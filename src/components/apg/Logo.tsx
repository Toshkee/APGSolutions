import Image from "next/image";
import logo from "../../../public/apg/logo-apg-solutions.jpg";

// Raster logo from the design (380×174). Scale proportionally.
export function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return <Image src={logo} alt="APG Solutions Inc." priority={priority} className={`h-auto object-contain ${className}`} />;
}
