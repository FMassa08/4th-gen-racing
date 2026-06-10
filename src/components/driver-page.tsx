import { driverBySlug } from "../data/content";
import type { Driver } from "../data/content";
import { DynastyNav } from "./dynasty-nav";
import { ImageGrid } from "./image-grid";
import { CtaLink } from "./links";

export function DriverPage({ slug }: { slug: Driver["slug"] }) {
  const driver = driverBySlug[slug];

  return (
    <main id="top">
      <section className="page-hero section-dark">
        <img className="hero-image" src={driver.hero.src} alt={driver.hero.alt} />
        <div className="hero-wash" />
        <div className="container hero-copy">
          <p className="eyebrow">{driver.generation}</p>
          <h1>{driver.name}</h1>
          <p className="lede">{driver.theme}</p>
          <p>{driver.summary}</p>
        </div>
      </section>

      <section className="dynasty-nav-band">
        <div className="container">
          <DynastyNav activeHref={driver.href} />
        </div>
      </section>

      <section className="section-pad parchment">
        <div className="container editorial-layout">
          <aside className="driver-plate">
            <img src={driver.portrait.src} alt={driver.portrait.alt} />
            <div>
              <span>{driver.generation}</span>
              <strong>{driver.name}</strong>
            </div>
          </aside>

          <div className="text-sequence">
            {driver.body.map((section) => (
              <article className="editorial-block" key={section.title}>
                <h2>{section.title}</h2>
                {(Array.isArray(section.text) ? section.text : [section.text]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {driver.context ? (
        <section className="section-pad section-dark context-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{driver.context.eyebrow}</p>
              <h2>{driver.context.title}</h2>
              {(Array.isArray(driver.context.text) ? driver.context.text : [driver.context.text]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ImageGrid images={driver.context.images} className="context-grid" />
          </div>
        </section>
      ) : null}

      <section className="section-pad section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Visual Record</p>
            <h2>Images in motion</h2>
          </div>
          <ImageGrid images={driver.images} className="driver-gallery" />
        </div>
      </section>

      <section className="section-pad continue-panel">
        <div className="container continue-inner">
          <div>
            <p className="eyebrow">Continue the Dynasty</p>
            <h2>The red line accelerates forward.</h2>
          </div>
          <div className="continue-actions">
            {driver.previous ? (
              <CtaLink href={driver.previous.href} variant="secondary">
                {driver.previous.label}
              </CtaLink>
            ) : null}
            {driver.next ? <CtaLink href={driver.next.href}>{driver.next.label}</CtaLink> : null}
            <CtaLink href="/dynasty/" variant="secondary">
              Back to Dynasty
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}

