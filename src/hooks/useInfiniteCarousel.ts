import { useCallback, useEffect, useRef, useState } from "react";

export interface UseInfiniteCarouselOptions {
  /** Number of unique slides in the carousel. */
  itemCount: number;
  /** Number of cloned slides prepended to the start for backward wrapping. */
  leftClones: number;
  /** Number of cloned slides appended to the end for forward wrapping. */
  rightClones: number;
  /** Maximum slides visible simultaneously (used to keep rapid-click runway populated). */
  maxVisible: number;
  /** Slide transition duration in ms (matches Tailwind duration class). Default 500ms. */
  transitionMs?: number;
  /** Optional autoplay advance interval in ms; pass 0 or omit to disable autoplay. */
  autoPlayMs?: number;
  /** External guard for autoplay (e.g., viewport intersection visibility). */
  isAutoPlayEnabled?: boolean;
}

/**
 * Builds a circular slide list by cloning `leftClones` items at the start
 * and `rightClones` items at the end so infinite wrap transitions stay seamless.
 */
export function buildClonedSlides<T>(items: T[], leftClones: number, rightClones: number): T[] {
  const len = items.length;
  if (len === 0) return [];

  const left: T[] = [];
  for (let i = leftClones; i > 0; i--) {
    left.push(items[((len - i) % len + len) % len]);
  }

  const right: T[] = [];
  for (let i = 0; i < rightClones; i++) {
    right.push(items[i % len]);
  }

  return [...left, ...items, ...right];
}

/**
 * Shared state and event handlers for responsive multi-card infinite carousels
 * with Prev/Next controls, dot pagination, touch swipe, and optional autoplay.
 */
export function useInfiniteCarousel({
  itemCount,
  leftClones,
  rightClones,
  maxVisible,
  transitionMs = 500,
  autoPlayMs = 0,
  isAutoPlayEnabled = true,
}: UseInfiniteCarouselOptions) {
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const [trackIndex, setTrackIndex] = useState(leftClones);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [interactionTick, setInteractionTick] = useState(0);

  const normalizeIfNeeded = useCallback(
    (idx: number) => {
      if (itemCount <= 0) return false;

      if (idx >= leftClones + itemCount) {
        const normalized = leftClones + ((idx - leftClones) % itemCount);
        setIsAnimated(false);
        setTrackIndex(normalized);
        return true;
      }
      if (idx < leftClones) {
        const normalized =
          leftClones + ((((idx - leftClones) % itemCount) + itemCount) % itemCount);
        setIsAnimated(false);
        setTrackIndex(normalized);
        return true;
      }
      return false;
    },
    [itemCount, leftClones]
  );

  // Re-enable CSS transitions two frames after an invisible clone->real jump commits
  useEffect(() => {
    if (isAnimated) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setIsAnimated(true);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [isAnimated]);

  // Safety normalization if transitionend is skipped (reduced-motion or background tab)
  useEffect(() => {
    if (trackIndex >= leftClones && trackIndex < leftClones + itemCount) return;
    const timer = setTimeout(() => {
      normalizeIfNeeded(trackIndex);
    }, transitionMs + 60);
    return () => clearTimeout(timer);
  }, [trackIndex, leftClones, itemCount, transitionMs, normalizeIfNeeded]);

  const stepBy = useCallback(
    (delta: number, isManual = true) => {
      if (!isAnimated || itemCount <= 0) return;
      if (isManual) {
        setInteractionTick((t) => t + 1);
      }
      const maxSafe = leftClones + itemCount + Math.max(0, rightClones - maxVisible);
      setTrackIndex((prev) => Math.max(0, Math.min(maxSafe, prev + delta)));
    },
    [isAnimated, itemCount, leftClones, rightClones, maxVisible]
  );

  const goTo = useCallback(
    (realIndex: number) => {
      setInteractionTick((t) => t + 1);
      setIsAnimated(true);
      setTrackIndex(leftClones + realIndex);
    },
    [leftClones]
  );

  // Optional autoplay that pauses on hover/focus and resets after manual interaction
  useEffect(() => {
    if (autoPlayMs <= 0 || !isAutoPlayEnabled || isPaused) return;
    const timer = setInterval(() => {
      stepBy(1, false);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, isAutoPlayEnabled, isPaused, interactionTick, stepBy]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== trackRef.current || e.propertyName !== "transform") return;
      normalizeIfNeeded(trackIndex);
    },
    [normalizeIfNeeded, trackIndex]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (touchStartXRef.current === null) return;
      const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
      const deltaX = endX - touchStartXRef.current;
      touchStartXRef.current = null;
      if (Math.abs(deltaX) < 40) return;
      stepBy(deltaX < 0 ? 1 : -1, true);
    },
    [stepBy]
  );

  const activeIndex =
    itemCount > 0 ? (((trackIndex - leftClones) % itemCount) + itemCount) % itemCount : 0;

  return {
    trackRef,
    trackIndex,
    isAnimated,
    activeIndex,
    setIsPaused,
    stepBy,
    goTo,
    handleTransitionEnd,
    handleTouchStart,
    handleTouchEnd,
  };
}

