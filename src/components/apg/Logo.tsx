import Image from "next/image";
import logo from "../../../public/apg/logo.svg";

// Vector logo drawn by scripts/make-logo.py. Scale proportionally.
export function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return <Image src={logo} alt="APG Solutions Inc." preload={priority} className={`h-auto object-contain ${className}`} />;
}
