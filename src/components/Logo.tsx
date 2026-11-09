type LogoProps = { className?: string };

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="relative size-[34px] flex-none rounded-[9px] bg-current">
        <span className="absolute inset-x-2 top-[15px] h-1 rounded-sm bg-amber" />
      </span>
      <span className="flex flex-col text-[17px] leading-[1.05] font-semibold">
        Easy Motion
        <small className="text-[12px] font-normal tracking-[0.16em] uppercase opacity-75">Recruiting</small>
      </span>
    </span>
  );
}
