import type { Metadata } from "next";
import Link from "next/link";
import { drivers } from "../data/content";
import { CtaLink } from "../components/links";

export const metadata: Metadata = {
  title: "Home",
  description:
    "A cinematic introduction to 4th Gen Racing: four Massa generations, the Number 6, and a living racing dynasty still moving forward."
};

export default function HomePage() {
  return (
    <main id="top">
      <section className="home-hero section-dark">
        <img
          className="hero-image home-hero-image"
          src="/images/2014-monza-sopraelevata.jpg"
          alt="Historic racing cars on the Monza banking, representing the origins of the Massa racing dynasty."
        />
        <div className="hero-wash" />
        <div className="container hero-copy">
          <p className="eyebrow">The Massa Racing Dynasty</p>
          <h1>Four generations. One red line.</h1>
          <p>
            4th Gen Racing is the guardian of eighty years of Massa family racing heritage: four generations connected by
            one red line, from the dawn of Italian road racing to the performance culture shaping the next chapter.
          </p>
          <div className="hero-actions">
            <CtaLink href="/dynasty/">Explore the Dynasty</CtaLink>
            <CtaLink href="/number-6/" variant="secondary">
              Discover the Number 6
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="section-pad parchment">
        <div className="container split">
          <div>
            <p className="eyebrow">The Legacy of Speed</p>
            <h2>Four boys who chose different emotions.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Like all great passions, this adventure began in childhood, with boys who were not drawn to ordinary games but
              to adrenaline, freedom, fear, courage, and the fierce calm that only a racetrack could offer.
            </p>
            <p>
              In different eras, four men felt the same sensations and lived the same emotions. They loved cars and circuits
              because those places made them feel at home, in their element, masters of their own destiny.
            </p>
            <p>
              Outside the track, ordinary people in the eyes of the world. Inside the track, when the red needle climbs and
              time seems to freeze, eternal.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Four Generations</p>
            <h2>Four generations, one line.</h2>
            <p>
              Adriano is the origin. Ademaro is expansion and resilience. Emanuele Ademaro Massa is continuation and
              transformation. Filippo is the future in motion.
            </p>
          </div>
          <div className="dynasty-composite">
            <img
              src="/images/four-generations-massa.jpeg"
              alt="Four generations of Massa racing drivers: Adriano Massa, Ademaro Massa, Emanuele Ademaro Massa, and Filippo Ademaro Massa."
            />
          </div>
          <div className="generation-cards">
            {drivers.map((driver) => (
              <Link className="generation-card" href={driver.href} key={driver.slug}>
                <img src={driver.portrait.src} alt={driver.portrait.alt} />
                <div>
                  <span>{driver.generation}</span>
                  <h3>{driver.name}</h3>
                  <p>{driver.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad number-preview">
        <div className="container split">
          <div className="number-mark" aria-hidden="true">
            6
          </div>
          <div className="copy-stack">
            <p className="eyebrow">Family Crest</p>
            <h2>More than a number.</h2>
            <p>
              The Number 6 began as Adriano's tribute to Ademaro, born on August 6th. Today it reads less like a relic and
              more like a signal: the family mark still accelerating across eras.
            </p>
            <CtaLink href="/number-6/" variant="secondary">
              Discover the Number 6
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="section-pad continue-panel">
        <div className="container continue-inner">
          <div>
            <p className="eyebrow">Media / Partners</p>
            <h2>The future carries the past.</h2>
            <p>
              Today the red thread celebrates Filippo Ademaro Massa, the newest heir of the dynasty, and the banner raised to
              support him through every turn of his career.
            </p>
          </div>
          <CtaLink href="/contact/">Contact 4th Gen Racing</CtaLink>
        </div>
      </section>
    </main>
  );
}

