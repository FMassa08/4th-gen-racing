"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const lightbox = open ? (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Fullscreen image viewer" onClick={() => setOpen(false)}>
      <button className="lightbox-close" type="button" aria-label="Close fullscreen image" onClick={() => setOpen(false)}>
        x
      </button>
      <div className="lightbox-frame" onClick={(event) => event.stopPropagation()}>
        <img src={src} alt={alt} />
      </div>
    </div>
  ) : null;

  return (
    <>
      <button className="lightbox-trigger" type="button" onClick={() => setOpen(true)} aria-label={`Open image fullscreen: ${alt}`}>
        <img src={src} alt={alt} />
      </button>
      {mounted && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  );
}
