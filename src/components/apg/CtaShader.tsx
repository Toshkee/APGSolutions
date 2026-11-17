"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

// Slowly moving mesh gradient in the brand blues behind the final call to action ("Mesh Gradient" by Paper,
// found in the Shaders section of 21st.dev). It loads after the page, pauses itself when off screen, and caps
// its pixel count so phones stay smooth. The box's static gradient stays underneath as the fallback (no WebGL,
// or while the shader is loading).
const MeshGradient = dynamic(() => import("@paper-design/shaders-react").then((m) => m.MeshGradient), { ssr: false });

export function CtaShader() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <MeshGradient
        className="size-full"
        colors={["#0b2463", "#1557e6", "#061232", "#2f6bff"]}
        distortion={0.85}
        swirl={0.15}
        speed={reduce ? 0 : 0.35}
        minPixelRatio={1}
        maxPixelCount={1280 * 720}
      />
      {/* keeps the white headline on the left easy to read whatever the gradient is doing */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,50,0.45)_0%,rgba(6,18,50,0.15)_55%,rgba(6,18,50,0)_100%)]" />
    </div>
  );
}
