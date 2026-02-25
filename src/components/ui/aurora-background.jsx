"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}) => {
    return (
        <div
            className={cn(
                "relative flex flex-col items-center justify-center bg-background text-text transition-bg overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    //   I'm sorry but this is what peak developer performance looks like // trigger warning
                    className={cn(
                        `
          [--white-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--background)_16%)]
          [--dark-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--background)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-400)_15%,var(--blue-600)_20%,var(--violet-500)_25%,var(--blue-500)_30%)]
          [background-image:var(--dark-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[10px] 
          after:content-[""] after:absolute after:inset-0
          after:[background-image:var(--dark-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-overlay
          pointer-events-none
          absolute -inset-[10px] opacity-[0.15] will-change-transform`,

                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                ></div>

                {/* Soft overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0 pointer-events-none" />
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};
