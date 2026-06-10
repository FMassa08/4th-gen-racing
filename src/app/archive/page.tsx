import type { Metadata } from "next";
import { archiveGroups } from "../../data/content";
import { ImageGrid } from "../../components/image-grid";
import { CtaLink } from "../../components/links";

export const metadata: Metadata = {
  title: "Archive",
  description: "Cars, circuits, faces, and atmosphere from four generations of Massa racing history."
};

export default function ArchivePage() {
  return (
    <main id="top">
      <section className="page-hero section-dark">
        <img className="hero-image" src="/images/media-contact-hero-number6-collage.jpg" alt="Number 6 collage representing the Massa family competition history." />
        <div className="hero-wash" />
          <div className="container hero-copy">
            <p className="eyebrow">Archive</p>
          <h1>Four generations. One racing line.</h1>
          <p>
            From Adriano's early Italian racing years to Ademaro's touring battles, Emanuele Ademaro Massa's GT and
            touring car chapters, and Filippo's first steps into modern competition, this archive follows the cars, faces,
            circuits, and atmosphere that shaped the Massa racing story.
          </p>
        </div>
      </section>

      <section className="section-pad parchment">
        <div className="container split">
          <div>
            <p className="eyebrow">Massa Archive</p>
            <h2>People, machines, and circuits.</h2>
          </div>
          <div className="copy-stack">
            <p>
              The archive is organized by generation so each image remains tied to the person, machine, and racing era it
              belongs to: Adriano, Ademaro, Emanuele Ademaro Massa, and Filippo.
            </p>
            <p>
              The page is meant to be read like a racing file: family faces, cars under pressure, garage details, circuit
              atmosphere, and the visible continuity of the Massa story across four generations.
            </p>
          </div>
        </div>
      </section>

      {archiveGroups.map((group) => (
        <section className="section-pad section-dark archive-section" key={group.title}>
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Generation Archive</p>
              <h2>{group.title}</h2>
            </div>
            <ImageGrid images={group.images} className="archive-grid" />
          </div>
        </section>
      ))}

      <section className="section-pad continue-panel">
        <div className="container continue-inner">
          <div>
            <p className="eyebrow">Media</p>
            <h2>For media, brand, and partnership conversations.</h2>
          </div>
          <CtaLink href="/contact/">Contact 4th Gen Racing</CtaLink>
        </div>
      </section>
    </main>
  );
}


