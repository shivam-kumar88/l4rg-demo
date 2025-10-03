// components/AnimatedCircularBar.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCircularBar({
  percentage,
  size = 120,
  strokeWidth = 7,
  color = "text-[#e94d65]",
  children,
  duration = 1000,
}) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Observe when the component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate when visible
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = () => {
      start += 1;
      if (start <= percentage) {
        setProgress(start);
        requestAnimationFrame(step);
      }
    };
    step();
  }, [isVisible, percentage]);

  return (
    <div ref={circleRef} className="flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* background circle */}
          <circle
            stroke="currentColor"
            className="text-gray-200"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* progress circle */}
          <circle
            stroke="currentColor"
            className={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              transition: `stroke-dashoffset ${duration}ms ease-out`,
            }}
          />
        </svg>

        {/* content inside */}
        <div className="absolute flex items-center justify-center">
          {children ? (
            children
          ) : (
            <span className="font-semibold text-gray-700">
              {progress}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
