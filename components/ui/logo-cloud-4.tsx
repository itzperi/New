// Add React import to resolve namespace and component prop issues
import React from "react";
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-5xl py-12">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/5" />

      <InfiniteSlider gap={60} reverse duration={40} durationOnHover={80}>
        {logos.map((logo) => (
          <div key={`logo-${logo.alt}`} className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             <img
                alt={logo.alt}
                className="h-8 md:h-12 w-auto select-none brightness-0 invert"
                loading="lazy"
                src={logo.src}
            />
          </div>
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={2}
        className="pointer-events-none absolute top-0 left-0 h-full w-[200px] z-10"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={2}
        className="pointer-events-none absolute top-0 right-0 h-full w-[200px] z-10"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/5" />
    </div>
  );
}
