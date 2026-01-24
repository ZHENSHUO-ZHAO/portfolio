import { useEffect, useRef, useState } from "react";

export type Size = { width: number; height: number };

// Custom hook to keep track of the size of a specified element.
export default function useMeasure<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      // Add event listener to track the ref's size.
      const observer = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        const roundWidth = Math.round(width);
        const roundHeight = Math.round(height);
        if (roundWidth !== size.width || roundHeight !== size.height) {
          setSize({ width: Math.round(width), height: Math.round(height) });
        }
      });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  return [ref, size] as const;
}
