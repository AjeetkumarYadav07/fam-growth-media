import React from "react";
import { getImageProps, StaticImageData } from "next/image";

export interface ResponsiveImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  src: string | StaticImageData;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  unoptimized?: boolean;
  mobileBreakpoint?: number; // default 768px
}

/**
 * Maps a desktop image path to its pre-generated mobile WebP equivalent.
 * e.g. /founders_img/our_storyf.jpeg -> /founders_img/mobile/our_storyf.webp
 */
export function getMobileSrc(src: string): string {
  if (typeof src !== "string") return src;
  if (src.includes("/mobile/")) return src;
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) return src;
  if (src.endsWith(".svg")) return src;

  const parts = src.split("/");
  const filename = parts.pop() || "";
  const dir = parts.join("/");
  const dotIdx = filename.lastIndexOf(".");
  if (dotIdx === -1) return src;
  const base = filename.slice(0, dotIdx);
  return `${dir}/mobile/${base}.webp`;
}

/**
 * Extracts a sensible, moderate fallback URL from a Next.js srcSet string
 * (targeting ~750-1080px width) rather than defaulting to the largest 1920px/3840px desktop width.
 */
function getSensibleFallbackSrc(
  srcSet: string | undefined,
  defaultSrc: string,
  targetWidth = 828
): string {
  if (!srcSet) return defaultSrc;
  try {
    const candidates = srcSet
      .split(",")
      .map((entry) => entry.trim())
      .map((entry) => {
        const parts = entry.split(/\s+/);
        const url = parts[0];
        const descriptor = parts[1] || "";
        const width = descriptor.endsWith("w")
          ? parseInt(descriptor.slice(0, -1), 10)
          : 0;
        return { url, width };
      })
      .filter((c) => c.url && c.width > 0);

    if (candidates.length === 0) return defaultSrc;

    const closest = candidates.reduce((prev, curr) =>
      Math.abs(curr.width - targetWidth) < Math.abs(prev.width - targetWidth)
        ? curr
        : prev
    );

    return closest.url || defaultSrc;
  } catch {
    return defaultSrc;
  }
}

/**
 * ResponsiveImage renders a <picture> element containing:
 * 1. Mobile <source> matching (max-width: 768px) delivering dedicated lightweight WebP
 * 2. Desktop <source> matching (min-width: 768.01px) delivering full desktop image
 * 3. <img> element with mobile-friendly fallback src, preventing oversized 3840px downloads.
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  mobileSrc,
  alt,
  width,
  height,
  fill,
  priority = false,
  quality,
  sizes,
  className = "",
  style,
  loading,
  unoptimized = false,
  mobileBreakpoint = 768,
  onLoad,
  onError,
  ...restProps
}) => {
  const desktopSrc = typeof src === "string" ? src : src.src;
  const isAlreadyMobileWebp = typeof desktopSrc === "string" && desktopSrc.includes("/mobile/");
  const targetMobileSrc = mobileSrc || getMobileSrc(desktopSrc);

  // If source is external, SVG, or cannot be split, fallback to standard next image props
  const isEligible = typeof desktopSrc === "string" && !desktopSrc.endsWith(".svg") && !desktopSrc.startsWith("http");

  // Generate desktop image props via Next.js getImageProps
  const {
    props: { srcSet: desktopSrcSet, style: desktopStyle, ...restDesktop },
  } = getImageProps({
    src,
    alt,
    width: !fill ? width : undefined,
    height: !fill ? height : undefined,
    fill,
    priority,
    quality,
    sizes: sizes || (fill ? "100vw" : undefined),
    loading: priority ? undefined : loading || "lazy",
    unoptimized: unoptimized || isAlreadyMobileWebp,
  });

  // Calculate a sensible fallback for desktop when srcSet is used
  const sensibleDesktopFallback = getSensibleFallbackSrc(desktopSrcSet, restDesktop.src, 828);

  if (!isEligible || targetMobileSrc === desktopSrc) {
    return (
      <img
        {...restDesktop}
        src={isAlreadyMobileWebp ? desktopSrc : sensibleDesktopFallback}
        srcSet={isAlreadyMobileWebp ? undefined : desktopSrcSet}
        alt={alt}
        className={className}
        style={{ ...desktopStyle, ...style }}
        onLoad={onLoad}
        onError={onError}
        {...restProps}
      />
    );
  }

  // Generate mobile image props via Next.js getImageProps
  // For mobile copies, they are already pre-optimized static WebPs tailored for mobile.
  // Using unoptimized: true for mobile copies serves them directly from CDN with zero transformation cost and instant load.
  const {
    props: { srcSet: mobileSrcSet, src: mobileResolvedSrc },
  } = getImageProps({
    src: targetMobileSrc,
    alt,
    width: !fill ? width : undefined,
    height: !fill ? height : undefined,
    fill,
    priority,
    quality,
    sizes: sizes || (fill ? "100vw" : undefined),
    loading: priority ? undefined : loading || "lazy",
    unoptimized: true,
  });

  // The fallback src on the <img> is the lightweight mobile WebP,
  // preventing any mobile browser speculative preload scanner from requesting heavy desktop images.
  const fallbackSrc = mobileResolvedSrc || targetMobileSrc;

  return (
    <picture className="contents">
      {/* Mobile source: <= 768px */}
      <source
        media={`(max-width: ${mobileBreakpoint}px)`}
        srcSet={mobileSrcSet || mobileResolvedSrc}
        sizes={sizes || (fill ? "100vw" : undefined)}
        type="image/webp"
      />
      {/* Desktop source: > 768px */}
      <source
        media={`(min-width: ${mobileBreakpoint + 0.01}px)`}
        srcSet={desktopSrcSet}
        sizes={sizes || (fill ? "100vw" : undefined)}
      />
      {/* Fallback <img>: receives all classes and mobile-safe fallback src */}
      <img
        {...restDesktop}
        src={fallbackSrc}
        alt={alt}
        className={className}
        style={{ ...desktopStyle, ...style }}
        onLoad={onLoad}
        onError={onError}
        {...restProps}
      />
    </picture>
  );
};

export default ResponsiveImage;
