import type { Metadata } from "next";
import { ImageGrid } from "../../components/image-grid";
import { CtaLink } from "../../components/links";

export const metadata: Metadata = {
  title: "The Number 6",
  description: "The Number 6 as a family mark, talisman, and living signal of the Massa racing dynasty."
};

const markInMotionImages = [
  {
    src: "/images/number-6/number-6-mark-in-motion-mountain-road.png",
    alt: "Historic mountain road race car carrying the Number 6."
  },
  {
    src: "/images/number-6/number-6-mark-in-motion-rain-race.png",
    alt: "Historic rain race scene with an early race car carrying the Number 6."
  }
];

export default function NumberSixPage() {
  return (
    <main id="top">
      <section className="page-hero number-hero section-dark">
        <img className="hero-image" src="/images/number-6/number-6-hero-background.png" alt="Number 6 racing heritage hero background." />
        <div className="hero-wash" />
        <div className="container hero-copy">
          <p className="eyebrow">Family Crest</p>
          <h1>The Number 6</h1>
          <p>
            A racing number. A father's tribute. A talisman carried through four generations of the Massa racing dynasty.
          </p>
        </div>
      </section>

      <section className="section-pad parchment">
        <div className="container number-story">
          <div className="number-mark" aria-hidden="true">
            6
          </div>
          <div className="text-sequence">
            <article className="editorial-block">
              <h2>A Father's Tribute</h2>
              <p>
                In 1940s Italy, country roads became makeshift circuits and the roar of engines echoed like a challenge to
                fate. The automobile was still a romantic and dangerous dream, and from that dream a legend began.
              </p>
              <p>
                On August 6th, Adriano's son Ademaro was born. From that day, the Number 6 became more than a racing number:
                a silent tribute to his son and to the unbreakable bond between father and child.
              </p>
            </article>
            <article className="editorial-block">
              <h2>The First Car</h2>
              <p>
                Adriano Massa, son of a passionate visionary, transformed the dream inherited from his father into something
                real. Together with his brother Marco, in the dim light of a small Milanese workshop, he built his first race
                car entirely from aluminum.
              </p>
              <p>
                It was fragile and powerful at once, forged more by passion than by engineering. When Adriano painted the
                Number 6 on the hood, a personal gesture became companion, talisman, and destiny.
              </p>
            </article>
            <article className="editorial-block">
              <h2>The Number That Never Left</h2>
              <p>
                A Milanese like Alberto Ascari, one of the greatest Italian drivers of all time and the first to win two
                consecutive Formula 1 World Championships in 1952 and 1953, Adriano moved through those early days of racing
                with the spirit of a heroic generation.
              </p>
              <p>
                These were not yet true racetracks, but hill climbs, dirt roads, and improvised circuits, where courage
                mattered more than machinery and every corner could be the last.
              </p>
            </article>
            <article className="editorial-block">
              <h2>From Talisman to Dynasty</h2>
              <p>
                In those years, to race was to defy life itself: no seatbelts, no barriers, only the wind on your face and
                the constant presence of danger. Yet Adriano threw himself into the fray with an indomitable heart, earning
                victories and respect.
              </p>
              <p>
                His true legacy was not measured in victories alone. Adriano ignited an eternal flame carried by Ademaro
                Massa, Emanuele Ademaro Massa, and Filippo Ademaro Massa: four generations bound by a single red thread.
              </p>
              <p>
                A story that began with a young Milanese dreamer and an aluminum race car â€” and that continues to this day,
                under the watchful gaze of the Number 6.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Archive</p>
            <h2>The mark in motion</h2>
          </div>
          <ImageGrid images={markInMotionImages} className="number-motion-grid" />
        </div>
      </section>

      <section className="section-pad continue-panel">
        <div className="container continue-inner">
          <div>
            <p className="eyebrow">Continue</p>
            <h2>Return to the full dynasty.</h2>
          </div>
          <CtaLink href="/dynasty/">Explore the Dynasty</CtaLink>
        </div>
      </section>
    </main>
  );
}

