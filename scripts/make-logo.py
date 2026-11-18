"""Draws the APG Solutions logo as SVG.

The client's only logo was a 380x174 JPG made with ChatGPT, so it was redrawn here by hand as vector shapes; this
script is now the logo's source. It writes:
  public/apg/logo.svg             colour, no tagline (site nav)
  public/apg/logo-white.svg       white, no tagline (footer, dark backgrounds)
  brand/logo-full.svg             colour, with "Connecting talent. Driving success."
  brand/logo-white-full.svg       white, with the tagline

Run:  pip install fonttools && python3 scripts/make-logo.py
"SOLUTIONS", "INC" and the tagline are set in Saira (the site's display font, SIL Open Font License); the font files
are downloaded from the Google Fonts repository on first run. Shapes are in a 1520x696 grid (4x the old JPG).
"""

import functools
import math
import pathlib
import re
import sys
import tempfile
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
FONT_DIR = pathlib.Path(tempfile.gettempdir()) / 'apg-logo-fonts'
FONT_URL = 'https://github.com/google/fonts/raw/main/ofl/saira/'
FONT_SRC = {'Saira-Italic.ttf': 'Saira-Italic%5Bwdth%2Cwght%5D.ttf', 'Saira.ttf': 'Saira%5Bwdth%2Cwght%5D.ttf'}


def font_file(name):
    path = FONT_DIR / name
    if not path.exists():
        FONT_DIR.mkdir(exist_ok=True)
        urllib.request.urlretrieve(FONT_URL + FONT_SRC[name], path)
    return str(path)


from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

@functools.lru_cache(None)
def inst(wdth,wght,italic=True):
    f=TTFont(font_file('Saira-Italic.ttf' if italic else 'Saira.ttf'))
    return instantiateVariableFont(f,{'wdth':wdth,'wght':wght})
def text_path(s, x, baseline, cap, width=None, tracking=0, wdth=100, wght=700, italic=True, skew=0, track=None):
    """Glyph outlines for s, scaled so caps are `cap` tall; if width is given, tracking is solved so the run is that wide."""
    f=inst(wdth,wght,italic); gs=f.getGlyphSet(); cmap=f.getBestCmap(); hm=f['hmtx']
    capH=f['OS/2'].sCapHeight; k=cap/capH
    names=[cmap[ord(c)] for c in s]
    adv=[hm[n][0]*k for n in names]
    # ink extents of first/last glyph for exact width fitting
    from fontTools.pens.boundsPen import BoundsPen
    def bounds(n):
        bp=BoundsPen(gs); gs[n].draw(bp); return bp.bounds
    b0=bounds(names[0]); bl=bounds(names[-1])
    natural=sum(adv[:-1])+bl[2]*k - b0[0]*k
    xs=1.0
    if width is not None and track is not None:
        xs=(width-track*(len(s)-1))/natural; tracking=track
    elif width is not None and len(s)>1: tracking=(width-natural)/(len(s)-1)
    adv=[a*xs for a in adv]
    pen=SVGPathPen(gs); cx=x-b0[0]*k*xs
    for n,a in zip(names,adv):
        if n!='space':
            tp=TransformPen(pen,(k*xs,0,-skew*k,-k,cx,baseline)); gs[n].draw(tp)
        cx+=a+tracking
    return pen.getCommands()


def bez(p0,p1,p2,p3,t):
    u=1-t; return tuple(u**3*a+3*u*u*t*b+3*u*t*t*c+t**3*d for a,b,c,d in zip(p0,p1,p2,p3))
# road edges, bottom -> vanishing point, two cubic segments each (same t on both sides)
L=[((180,478),(225,420),(290,372),(370,335)),((370,335),(470,290),(600,268),(705,266))]
R=[((386,478),(395,420),(420,365),(470,328)),((470,328),(530,290),(610,272),(705,266))]
def edge(E,s):  # s in 0..2
    i=min(int(s),1); return bez(*E[i],s-i)
def center(s):
    a=edge(L,s); b=edge(R,s); return ((a[0]+b[0])/2,(a[1]+b[1])/2), (b[0]-a[0],b[1]-a[1])
def dash(s0,s1):
    pts=[]
    for s,side in ((s0,-1),(s1,-1),(s1,1),(s0,1)):
        c,w=center(s); hw=0.055
        pts.append((c[0]+side*w[0]*hw, c[1]+side*w[1]*hw))
    return 'M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in pts)+'Z'
dashes=''.join(dash(a,b) for a,b in [(0.0,0.17),(0.32,0.47),(0.6,0.72),(0.84,0.94),(1.05,1.15),(1.26,1.34),(1.45,1.51)])

A='M300,110 L440,110 L650,462 L522,462 L357,195 L175,490 L40,490 Z'
P='M592,110 L800,108 C905,106 982,150 982,228 C982,302 925,350 835,350 L667,350 L652,462 L529,462 Z M682,186 L842,188 C868,188 884,205 884,228 C884,252 866,268 842,268 L668,268 Z'
G='M1340,108 L1125,110 C1035,111 975,160 950,215 C935,250 925,290 925,330 C925,410 985,462 1090,462 L1352,460 L1377,257 L1258,257 L1243,372 L1118,374 C1060,374 1022,345 1022,302 C1022,250 1052,200 1105,199 L1296,192 Z'
BAR='M1140,237 L1300,237 L1258,322 L1087,321 Z'
RIB_BLUE='M810,96 C960,40 1180,4 1330,6 C1450,8 1508,40 1506,88 C1504,140 1450,195 1377,257 L1290,257 C1380,200 1450,140 1448,95 C1446,60 1400,42 1330,42 C1180,42 980,70 810,96 Z'
RIB_SILVER='M880,97 C1040,56 1250,36 1358,48 C1440,62 1455,110 1420,160 C1380,215 1290,265 1170,322 C1270,258 1350,205 1385,160 C1410,125 1400,85 1340,74 C1240,64 1060,80 880,97 Z'
BAND='M20,514 C110,430 220,365 320,328 C430,288 560,262 760,258 L700,268 C580,272 460,300 360,345 C280,385 210,440 168,505 Z'
ROAD='M180,478 L386,478 C395,420 420,365 470,328 C530,290 610,272 705,266 C600,268 470,290 370,335 C290,372 225,420 180,478 Z'
ROAD_EDGE='M386,478 C395,420 420,365 470,328 C530,290 610,272 705,266'

def grad(id,stops,attrs):
    s=''.join(f'<stop offset="{o}" stop-color="{c}"' + (f' stop-opacity="{a}"' if a is not None else '') + '/>' for o,c,a in [(x+(None,))[:3] for x in stops])
    return f'<linearGradient id="{id}" {attrs}>{s}</linearGradient>'
V='gradientUnits="userSpaceOnUse" x1="0" x2="0"'
def themes(name):
    if name=='color':
        return dict(text='#0b1b40', gap='#fff', incText='#fff', incStroke='#0b1b40', dash='#fff', defs=[
          grad('face',[(0,'#0c2a74'),(.1,'#1747b2'),(.165,'#2f7cf0'),(.235,'#123c98'),(.42,'#0a2465'),(.7,'#061848'),(1,'#040c2a')],V+' y1="105" y2="470"'),
          grad('rib',[(0,'#071a4f'),(.55,'#123c9e'),(.85,'#2f7ff2'),(1,'#0f3a99')],'gradientUnits="userSpaceOnUse" x1="800" y1="0" x2="1510" y2="0"'),
          grad('rim',[(0,'#ffffff'),(.3,'#dfe3e8'),(.6,'#a3abb6'),(.85,'#eef0f3'),(1,'#b8bec7')],V+' y1="90" y2="520"'),
          grad('ribsil',[(0,'#8f98a4'),(.35,'#dde1e6'),(.6,'#f7f8fa'),(.8,'#b3bbc5'),(1,'#e3e6ea')],'gradientUnits="userSpaceOnUse" x1="880" y1="60" x2="1300" y2="300"'),
          grad('band',[(0,'#6f7782'),(.3,'#c3c9d1'),(.6,'#f4f6f8'),(1,'#aab2bc')],'gradientUnits="userSpaceOnUse" x1="40" y1="500" x2="700" y2="262"'),
          grad('road',[(0,'#1c2b55'),(1,'#08122e')],V+' y1="266" y2="478"'),
          grad('inc',[(0,'#9aa2ad'),(.5,'#6b7480'),(1,'#4a525d')],V+' y1="503" y2="590"'),
          grad('under',[(0,'#0b1b40',0),(.12,'#0b2a78'),(.45,'#2f7ff2'),(.8,'#0b2a78'),(1,'#0b1b40',0)],'gradientUnits="userSpaceOnUse" x1="110" y1="0" x2="1455" y2="0"'),
          grad('lineL',[(0,'#0b1b40',0),(1,'#0b1b40')],'x1="0" x2="1"'),
          grad('lineR',[(0,'#0b1b40'),(1,'#0b1b40',0)],'x1="0" x2="1"'),
        ])
    # white: for dark backgrounds (footer)
    return dict(text='#fff', gap='#061232', incText='#061232', incStroke='#fff', dash='#fff', defs=[
          grad('face',[(0,'#ffffff'),(.16,'#ffffff'),(.3,'#e3e8f0'),(.6,'#f4f6fa'),(1,'#c9d1de')],V+' y1="105" y2="470"'),
          grad('rib',[(0,'#aab4c6'),(.6,'#e9edf3'),(.85,'#ffffff'),(1,'#c9d1de')],'gradientUnits="userSpaceOnUse" x1="800" y1="0" x2="1510" y2="0"'),
          grad('rim',[(0,'#7e8aa3'),(1,'#5d6a86')],V+' y1="90" y2="520"'),
          grad('ribsil',[(0,'#7e8aa3'),(.5,'#c7cfdc'),(1,'#98a4ba')],'gradientUnits="userSpaceOnUse" x1="880" y1="60" x2="1300" y2="300"'),
          grad('band',[(0,'#9aa5ba'),(.5,'#f2f4f8'),(1,'#c3cbd8')],'gradientUnits="userSpaceOnUse" x1="40" y1="500" x2="700" y2="262"'),
          grad('road',[(0,'#1d2c55'),(1,'#0b1b40')],V+' y1="266" y2="478"'),
          grad('inc',[(0,'#ffffff'),(1,'#dfe4ec')],V+' y1="503" y2="590"'),
          grad('under',[(0,'#ffffff',0),(.2,'#ffffff',.7),(.5,'#ffffff'),(.8,'#ffffff',.7),(1,'#ffffff',0)],'gradientUnits="userSpaceOnUse" x1="110" y1="0" x2="1455" y2="0"'),
          grad('lineL',[(0,'#ffffff',0),(1,'#ffffff')],'x1="0" x2="1"'),
          grad('lineR',[(0,'#ffffff'),(1,'#ffffff',0)],'x1="0" x2="1"'),
        ])

import re
def r1(d): return re.sub(r'-?\d+\.\d+', lambda m: f'{float(m.group()):.1f}'.rstrip('0').rstrip('.'), d)

def build(tagline=True, theme='color', title='APG Solutions Inc.'):
    T=themes(theme)
    sol=text_path('SOLUTIONS',178,585,80,width=932,wdth=125,wght=780,track=-8,skew=0.1)
    inc=text_path('INC',1170,577,62,width=196,wdth=125,wght=780,track=-2,skew=0.1)
    tag=text_path('CONNECTING TALENT. DRIVING SUCCESS.',45,688,36,width=1415,wdth=125,wght=560,track=2,skew=0.06)
    ap=f'<path d="{A}"/><path d="{P}" fill-rule="evenodd"/>'
    g=f'<path d="{G}"/><path d="{BAR}"/>'
    rim='fill="none" stroke="url(#rim)" stroke-width="18" stroke-linejoin="round"'
    h=696 if tagline else 620
    out=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1520 {h}" role="img" aria-label="{title}">',
      '<defs>'+''.join(T['defs'])+'</defs>',
      f'<g {rim}>{ap}<path d="{RIB_BLUE}"/></g>',
      f'<g fill="url(#face)">{ap}</g>',
      f'<g {rim}>{g}</g>',
      f'<g fill="url(#face)">{g}</g>',
      f'<path d="{RIB_BLUE}" fill="url(#rib)"/>',
      f'<path d="{RIB_SILVER}" fill="url(#ribsil)" stroke="{T["gap"] if theme=="white" else "#7d8692"}" stroke-width="2.5" stroke-linejoin="round"/>',
      f'<path d="{ROAD}" fill="url(#road)"/>',
      f'<path d="{dashes}" fill="{T["dash"]}"/>',
      f'<path d="{ROAD_EDGE}" fill="none" stroke="url(#band)" stroke-width="7" stroke-linecap="round"/>',
      f'<path d="{BAND}" fill="url(#band)" stroke="{T["gap"]}" stroke-width="4" stroke-linejoin="round"/>',
      f'<path d="{sol}" fill="{T["text"]}"/>',
      f'<path d="M1136,503 L1422,503 L1398,590 L1110,590 Z" fill="url(#inc)" stroke="{T["incStroke"]}" stroke-width="6" stroke-linejoin="round"/>',
      f'<path d="{inc}" fill="{T["incText"]}"/>',
      '<rect x="0" y="550" width="152" height="6" fill="url(#lineL)"/><rect x="1422" y="550" width="98" height="6" fill="url(#lineR)"/>',
      '<path d="M110,608 Q782,599 1455,606 Q782,617 110,608 Z" fill="url(#under)"/>',
    ]
    if tagline: out.append(f'<path d="{tag}" fill="{T["text"]}"/>')
    out.append('</svg>')
    return r1(''.join(out))

if __name__ == '__main__':
    files = {
        'public/apg/logo.svg': build(False, 'color'),
        'public/apg/logo-white.svg': build(False, 'white'),
        'brand/logo-full.svg': build(True, 'color'),
        'brand/logo-white-full.svg': build(True, 'white'),
    }
    for path, svg in files.items():
        (ROOT / path).parent.mkdir(exist_ok=True)
        (ROOT / path).write_text(svg + '\n', encoding='utf-8')
        print('Wrote', path)
