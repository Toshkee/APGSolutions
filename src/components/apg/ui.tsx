import type { ComponentProps, ReactNode } from "react";

// Renders a design SVG at its own root size (sizes come straight from the Figma export)
export function Svg({ src, w, h, className = "" }: { src: string; w: number; h: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} width={w} height={h} alt="" aria-hidden="true" className={`block shrink-0 ${className}`} />
  );
}

// Same SVG used as a mask, so it takes the current text color and can change color on hover
export function MaskIcon({ src, size, className = "" }: { src: string; size: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 bg-current ${className}`}
      style={{
        width: size,
        height: size,
        maskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}

type ButtonStyle ="primary" | "dark" | "outline";

const buttonStyles: Record<ButtonStyle, string> = {
  // Amber is the action color; blue stays the brand color
  primary:
    "bg-amber text-navy shadow-[0_8px_14px_rgba(245,165,36,0.35)] hover:bg-amber-hover hover:shadow-[0_10px_20px_rgba(245,165,36,0.45)]",
  dark: "bg-navy text-white hover:bg-[#13285a]",
  outline: "border-[1.5px] border-white/35 text-white hover:border-white/70 hover:bg-white/8",
};

type ButtonProps = ComponentProps<"a"> & { variant?: ButtonStyle; size?: "md" | "sm" };

export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-[10px] px-[26px] text-base font-bold whitespace-nowrap transition duration-200 hover:-translate-y-px ${
        size === "sm" ? "h-[46px] text-[15px]" : "h-[52px]"
      } ${buttonStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

type HeadingProps = {
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  titleClassName?: string;
  leadClassName?: string;
  // The mobile design drops the lead paragraph in some sections
  leadDesktopOnly?: boolean;
};

// Headline + lead paragraph at the top of each section. Saira is kept for the hero and the final CTA only.
export function SectionHeading({
  title,
  lead,
  align = "left",
  tone = "light",
  titleClassName = "lg:max-w-[1000px]",
  leadClassName = "lg:max-w-[640px]",
  leadDesktopOnly = false,
}: HeadingProps) {
  const center = align === "center";
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start"}`}>
      <h2
        className={`text-[32px] leading-[1.1] font-bold tracking-[-0.025em] text-balance lg:text-[48px] ${
          tone === "dark" ? "text-white" : "text-navy"
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-[18px] text-[17px] leading-[1.6] lg:text-[19px] ${leadDesktopOnly ? "hidden lg:block" : ""} ${
            tone === "dark" ? "text-on-dark" : "text-body"
          } ${leadClassName}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

// "light" = on white/light backgrounds (deeper amber for contrast), "dark" = on navy/video backgrounds
type CheckTone = "light" | "dark";

export function CheckItem({ children, tone = "light", className = "" }: { children: ReactNode; tone?: CheckTone; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 text-base font-medium ${className}`}>
      {/* Same path as the design's check icon, recolored to the amber accent */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className={`shrink-0 ${tone === "dark" ? "text-amber" : "text-amber-deep"}`}
      >
        <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  );
}
