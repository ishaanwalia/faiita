"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  prefix?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      setCount(current);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  // Format number with Indian style commas (lakhs, crores)
  const formatNumber = (num: number): string => {
    if (num >= 100000) {
      // For lakhs/crores, show in compact form
      if (num >= 10000000) {
        return `${(num / 10000000).toFixed(1)}Cr`;
      }
      if (num >= 100000) {
        return `${(num / 100000).toFixed(0)}L`;
      }
    }
    return num.toLocaleString("en-IN");
  };

  // Special formatting for the stats
  const displayValue = () => {
    if (target === 2500000) {
      return `${Math.floor(count / 100000)}L+`;
    }
    if (target === 50000) {
      return `${Math.floor(count / 1000)}K+`;
    }
    if (target >= 100000) {
      return formatNumber(count);
    }
    return count.toLocaleString("en-IN");
  };

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue()}{suffix}
    </span>
  );
}
