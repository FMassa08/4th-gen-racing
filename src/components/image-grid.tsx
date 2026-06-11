"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "../data/content";

export function ImageGrid({ images, className = "" }: { images: Photo[]; className?: string }) {
  const [activeImage, setActiveImage] = useState<Photo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  const lightbox = activeImage ? (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Fullscreen image viewer" onClick={() => setActiveImage(null)}>
      <button className="lightbox-close" type="button" aria-label="Close fullscreen image" onClick={() => setActiveImage(null)}>
        x
      </button>
      <div className="lightbox-frame" onClick={(event) => event.stopPropagation()}>
        <img src={activeImage.src} alt={activeImage.alt} />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className={`image-grid ${className}`} aria-label="Racing image grid">
        {images.map((image) => (
          <figure className={image.wide ? "is-wide" : ""} key={image.src}>
            <button className="lightbox-trigger" type="button" onClick={() => setActiveImage(image)} aria-label={`Open image: ${image.alt}`}>
              <img src={image.src} alt={image.alt} />
            </button>
          </figure>
        ))}
      </div>
      {mounted && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  );
}
