'use client';

import { useRef, useState, useEffect, RefObject } from 'react';

type Props = {
  threshold?: number;
  root?: RefObject<Element> | null;
  rootMargin?: string;
};

export function useIntersectionObserver({
  threshold = 1,
  root = null,
  rootMargin = '0%',
}: Props): [RefObject<HTMLElement>, IntersectionObserverEntry | null] {
  const ref = useRef<HTMLElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const node = ref?.current;

    if (!node || typeof IntersectionObserver !== 'function') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { threshold, root: root?.current, rootMargin },
    );

    observer.observe(node);

    return () => {
      setEntry(null);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return [ref, entry];
}
