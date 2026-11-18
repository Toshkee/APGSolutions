"""Makes the Spanish link-preview image, public/share/og-es.jpg (1200x630).

It rebuilds the English image (public/share/og-en.jpg) as an HTML page with the Spanish hero text, and screenshots it
with headless Google Chrome. Run it again after changing the hero badge, headline or trust line in
src/content/es/apg.ts:  python3 scripts/make-share-image.py
Needs Google Chrome, Python with Pillow, and internet for the Google Fonts.
"""

import html
import pathlib
import subprocess
import tempfile

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Keep in step with hero.badge / hero.title / hero.titleAccent / hero.trust in src/content/es/apg.ts
BADGE = "Nashville, TN · Reclutamiento CDL-A en los 48 estados"
TITLE = "Pague solo cuando pongamos un "
ACCENT = "conductor al volante."
TRUST = ["$0 por adelantado", "Sin contratos largos", "Pagos según la retención"]

# The English headline is 76px on three lines; the Spanish one is longer, so it is 62px to stay on three lines
HEADLINE_SIZE = 62
HEADLINE_WIDTH = 860
HEADLINE_TOP = 258

CHECK = (
    '<svg width="22" height="22" viewBox="0 0 20 20" fill="none"><path d="M16.6667 5L7.5 14.1667L3.33333 10" '
    'stroke="#f5a524" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
)


def page(poster: str, logo: str) -> str:
    trust = "".join(f'<span class="t">{CHECK}{html.escape(t)}</span>' for t in TRUST)
    return f"""<!doctype html><html lang="es"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Saira:ital,wght@1,800&display=block" rel="stylesheet">
<style>
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
html, body {{ width: 1200px; height: 630px; overflow: hidden; background: #061232; font-family: Inter, sans-serif; -webkit-font-smoothing: antialiased; }}
.bg {{ position: absolute; inset: 0; background: url("{poster}") center / cover; }}
.ov {{ position: absolute; inset: 0; background: linear-gradient(90deg, rgba(6,18,50,0.97) 0%, rgba(10,31,85,0.85) 40%, rgba(11,36,99,0.3) 62%, rgba(11,36,99,0.05) 100%); }}
.logo {{ position: absolute; left: 72px; top: 56px; width: 190px; }}
.badge {{ position: absolute; left: 72px; top: 181px; display: flex; align-items: center; gap: 10px; padding: 10px 18px; border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; background: rgba(255,255,255,0.1); color: #fff; font-size: 19px; font-weight: 600; }}
.dot {{ width: 9px; height: 9px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 0 3px rgba(34,197,94,0.25); }}
h1 {{ position: absolute; left: 72px; top: {HEADLINE_TOP}px; width: {HEADLINE_WIDTH}px; font-family: Saira; font-size: {HEADLINE_SIZE}px; font-style: italic; font-weight: 800; line-height: 0.98; letter-spacing: -0.5px; text-transform: uppercase; color: #fff; }}
h1 span {{ color: #f5a524; }}
.trust {{ position: absolute; left: 72px; top: 548px; display: flex; gap: 31px; color: #d7deee; font-size: 20px; font-weight: 500; }}
.t {{ display: flex; align-items: center; gap: 9px; }}
</style></head><body>
<div class="bg"></div><div class="ov"></div>
<img class="logo" src="{logo}">
<p class="badge"><span class="dot"></span>{html.escape(BADGE)}</p>
<h1>{html.escape(TITLE)}<span>{html.escape(ACCENT)}</span></h1>
<div class="trust">{trust}</div>
</body></html>"""


def main() -> None:
    with tempfile.TemporaryDirectory() as tmp:
        src = pathlib.Path(tmp) / "og-es.html"
        png = pathlib.Path(tmp) / "og-es.png"
        src.write_text(
            page(
                (ROOT / "public/media/nashville-hero-poster.jpg").as_uri(),
                (ROOT / "public/apg/logo-apg-solutions-white.png").as_uri(),
            ),
            encoding="utf-8",
        )
        subprocess.run(
            [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--window-size=1200,630",
             "--force-device-scale-factor=1", "--virtual-time-budget=8000", f"--screenshot={png}", src.as_uri()],
            check=True,
            capture_output=True,
        )
        out = ROOT / "public/share/og-es.jpg"
        Image.open(png).convert("RGB").save(out, quality=88, optimize=True, progressive=True)
        print(f"Wrote {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
