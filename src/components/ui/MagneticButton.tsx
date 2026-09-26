"use client";

import React, { forwardRef } from "react";
import confetti from "canvas-confetti";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glow" | "dark";
  size?: "sm" | "md" | "lg";
  withConfetti?: boolean;
  magneticStrength?: number;
  href?: string;
  target?: string;
  rel?: string;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      withConfetti = false,
      magneticStrength = 0.35,
      onClick,
      href,
      target,
      rel,
      ...props
    },
    forwardedRef
  ) => {
    const magneticRef = useMagnetic<HTMLElement>({ strength: magneticStrength });

    const triggerConfetti = (rect: DOMRect) => {
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { x, y },
        colors: ["#7c3aed", "#ec4899", "#06b6d4", "#3b82f6", "#a855f7"],
        ticks: 180,
      });
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (withConfetti) {
        triggerConfetti(e.currentTarget.getBoundingClientRect());
      }
      onClick?.(e);
    };

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (withConfetti) {
        triggerConfetti(e.currentTarget.getBoundingClientRect());
      }
      if (onClick) {
        (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)(e);
      }
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:brightness-105 active:scale-95",
      secondary:
        "bg-white text-slate-800 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 shadow-sm active:scale-95",
      outline:
        "bg-white/80 hover:bg-purple-50 text-purple-700 border border-purple-200 hover:border-purple-300 shadow-sm active:scale-95",
      glow:
        "bg-white text-slate-900 border border-purple-200 shadow-[0_4px_20px_rgba(124,58,237,0.12)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.2)] active:scale-95",
      dark:
        "bg-slate-900 hover:bg-slate-800 text-white shadow-md active:scale-95",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-xs font-semibold rounded-full",
      md: "px-5 py-2.5 text-sm font-semibold rounded-full",
      lg: "px-7 py-3.5 text-sm sm:text-base font-bold rounded-full",
    };

    const combinedClassName = cn(
      "group relative inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer select-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a
          ref={(node) => {
            (magneticRef as React.MutableRefObject<HTMLElement | null>).current = node;
            if (typeof forwardedRef === "function") {
              forwardedRef(node as unknown as HTMLButtonElement);
            } else if (forwardedRef) {
              forwardedRef.current = node as unknown as HTMLButtonElement;
            }
          }}
          href={href}
          target={target}
          rel={rel}
          onClick={handleAnchorClick}
          className={combinedClassName}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </a>
      );
    }

    return (
      <button
        ref={(node) => {
          (magneticRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        onClick={handleClick}
        className={combinedClassName}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
