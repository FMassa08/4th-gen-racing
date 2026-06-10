import type { Metadata } from "next";
import { ImageGrid } from "../../components/image-grid";
import { CtaLink } from "../../components/links";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact 4th Gen Racing for media, archive, partnership, and collaboration inquiries."
};

const contactEmail = "info@4thgenracing.com";

const contactBlocks = [
  {
    title: "Media & Story",
    subject: "Media & Story Inquiry - 4th Gen Racing",
    text: "For interviews, editorial features, press context, and storytelling around the four-generation Massa racing dynasty."
  },
  {
    title: "Archive & Historical Material",
    subject: "Archive & Historical Material Inquiry - 4th Gen Racing",
    text: "For historical information, family racing material, image references, and context connected to Adriano, Ademaro, Emanuele Ademaro Massa, Filippo, and the Number 6."
  },
  {
    title: "Partnerships & Collaborations",
    subject: "Partnerships & Collaborations Inquiry - 4th Gen Racing",
    text: "For brands and collaborators interested in a project that connects Italian motorsport heritage with the next chapter of driver development."
  },
  {
    title: "General Inquiries",
    subject: "General Inquiry - 4th Gen Racing",
    text: "For direct questions about 4th Gen Racing, the Massa story, the archive, or future project coordination."
  }
];

const contactMosaicImages = [
  {
    src: "/images/four-generations-massa.jpeg",
    alt: "Four generations of Massa racing drivers shown together."
  },
  {
    src: "/images/dynasty/adriano/adriano-02.png",
    alt: "Historic racing image connected to Adriano Massa."
  },
  {
    src: "/images/dynasty/ademaro/ademaro-01.png",
    alt: "Historic racing image connected to Ademaro Massa."
  },
  {
    src: "/images/dynasty/emanuele/emanuele-01.png",
    alt: "Historic racing image connected to Emanuele Ademaro Massa."
  },
  {
    src: "/images/filippo/program/program-cockpit-pre-session.png",
    alt: "Filippo Massa seated in a cockpit before a session."
  },
  {
    src: "/images/number-6/number-6-mark-in-motion-mountain-road.png",
    alt: "Historic mountain road race car carrying the Number 6."
  }
];

export default function ContactPage() {
  return (
    <main id="top">
      <section className="page-hero contact-hero section-dark">
        <img
          className="hero-image"
          src="/images/section-backgrounds/contact-dynasty-collage.png"
          alt="Collage representing contact, archive, and partnership context for 4th Gen Racing."
        />
        <div className="hero-wash" />
        <div className="container hero-copy">
          <p className="eyebrow">Contact / Media / Partnerships</p>
          <h1>Contact 4th Gen Racing</h1>
          <p>
            For media, archive material, historical context, partnerships, collaborations, and the next chapter of the Massa
            racing story.
          </p>
          <div className="hero-actions">
            <CtaLink href="mailto:info@4thgenracing.com">info@4thgenracing.com</CtaLink>
          </div>
        </div>
      </section>

      <section className="section-pad parchment contact-opener-section">
        <div className="container contact-opener">
          <div>
            <p className="eyebrow">Connect With the Dynasty</p>
            <h2>One point of contact for the story, the archive, and the future.</h2>
          </div>
          <div className="contact-opener-content">
            <div className="copy-stack">
              <p>
                4th Gen Racing brings together family history, racing images, the Number 6, and Filippo Massa's early
                development as the fourth generation of the Massa line.
              </p>
              <p>
                Inquiries should be specific where possible: media, archive research, historical material, partnership
                discussion, collaboration, or general project coordination.
              </p>
              <p>
                The same red line connects media context, archive material, partnership conversations, and the future
                development of 4th Gen Racing.
              </p>
            </div>
            <ImageGrid images={contactMosaicImages} className="contact-mosaic-grid" />
          </div>
        </div>
      </section>

      <section className="section-pad section-dark contact-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Inquiry Areas</p>
            <h2>Focused channels, one racing story.</h2>
          </div>
          <div className="contact-card-grid">
            {contactBlocks.map((block) => (
              <a
                className="contact-card"
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(block.subject)}`}
                aria-label={`${block.title}: send inquiry to 4th Gen Racing`}
                key={block.title}
              >
                <h3>{block.title}</h3>
                <p>{block.text}</p>
                <span>Send inquiry</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad continue-panel">
        <div className="container continue-inner">
          <div>
            <p className="eyebrow">Start the Conversation</p>
            <h2>Bring the right context. We will connect it to the right chapter.</h2>
          </div>
          <CtaLink href="mailto:info@4thgenracing.com">Email 4th Gen Racing</CtaLink>
        </div>
      </section>
    </main>
  );
}



