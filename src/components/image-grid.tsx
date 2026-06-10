import type { Photo } from "../data/content";
import { LightboxImage } from "./lightbox-image";

export function ImageGrid({ images, className = "" }: { images: Photo[]; className?: string }) {
  return (
    <div className={`image-grid ${className}`} aria-label="Racing image grid">
      {images.map((image) => (
        <figure className={image.wide ? "is-wide" : ""} key={image.src}>
          <LightboxImage src={image.src} alt={image.alt} />
        </figure>
      ))}
    </div>
  );
}
