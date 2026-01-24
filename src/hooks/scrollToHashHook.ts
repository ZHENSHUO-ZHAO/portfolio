import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScrollToHash(offset: number = 0) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [hash, offset]);
}
