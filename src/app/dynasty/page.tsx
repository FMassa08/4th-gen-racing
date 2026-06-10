import type { Metadata } from "next";
import Link from "next/link";
import { drivers } from "../../data/content";
import { DynastyNav } from "../../components/dynasty-nav";
import { CtaLink } from "../../components/links";

export const metadata: Metadata = {
  title: "Dynasty",
  description: "A living gateway to four generations of Massa racing drivers: Adriano, Ademaro, Emanuele, and Filippo."
};

export default function DynastyPage() {
  return (
    <main id="top">
      <section className="page-hero dynasty-hero section-dark">
        <img
          className="hero-image"
          src="/images/dynasty-timeline-hero.png"
          alt="Timeline-style collage showing the evolution of the Massa racing dynasty from Adriano Massa to Filippo Massa."
        />
        <div className="hero-wash" />
        <div className="container hero-copy">
          <p className="eyebrow">Dynasty</p>
          <h1>The Massa racing line, still moving.</h1>
          <p>
            Four drivers, four eras, one red line: the limit on the tachometer, the color of urgency, and the thread that
            carries the Massa family from origin to future.
          </p>
        </div>
      </section>

      <section className="dynasty-nav-band">
        <div className="container">
          <DynastyNav />
        </div>
      </section>

      <section className="section-pad section-dark dynasty-visual-band">
        <div className="container split">
          <div>
            <p className="eyebrow">Four Generations</p>
            <h2>The lineage in one frame.</h2>
          </div>
          <div className="dynasty-composite dynasty-composite-compact">
            <img
              src="/images/four-generations-massa.jpeg"
              alt="Four generations of Massa racing drivers: Adriano Massa, Ademaro Massa, Emanuele Ademaro Massa, and Filippo Ademaro Massa."
            />
          </div>
        </div>
      </section>

      <section className="section-pad parchment">
        <div className="container timeline">
          {drivers.map((driver) => (
            <Link className="timeline-entry" href={driver.href} key={driver.slug}>
              <span>{driver.generation}</span>
              <h2>{driver.name}</h2>
              <p>{driver.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad section-dark red-line-section">
        <div className="container split">
          <div>
            <p className="eyebrow">The Red Thread</p>
            <h2>The Red Line</h2>
          </div>
          <div className="copy-stack">
            <p>
              In racing, the red line marks the point where machinery reaches its limit. In this family, it also marks
              passion, destiny, and continuity: the moment when instinct becomes decision and a driver accepts the risk of
              going further.
            </p>
            <p>
              Adriano Massa gives the story its origin. Ademaro Massa carries it into national fame, Touring and GT racing,
              and the hard lesson of the Parabolica. Emanuele Ademaro Massa transforms childhood wonder into a modern racing
              life. Filippo Massa brings the present and future into motion between Italy, the United States, and a broad
              development path.
            </p>
            <p>
              The dynasty is not a static record of old results. It is transferable knowledge: the car unloaded from a
              trailer, the line through a corner, the silence before an engine wakes, and the Number 6 appearing again across
              time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad continue-panel">
        <div className="container continue-inner">
          <div>
            <p className="eyebrow">Continue</p>
            <h2>Start with the symbol, then follow the images.</h2>
          </div>
          <div className="continue-actions">
            <CtaLink href="/number-6/">Number 6</CtaLink>
            <CtaLink href="/archive/" variant="secondary">
              Archive
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
