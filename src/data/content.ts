export type Photo = {
  src: string;
  alt: string;
  wide?: boolean;
};

export type Driver = {
  slug: "adriano" | "ademaro" | "emanuele" | "filippo";
  generation: string;
  name: string;
  shortName: string;
  href: string;
  theme: string;
  hero: Photo;
  portrait: Photo;
  summary: string;
  body: Array<{
    title: string;
    text: string | string[];
  }>;
  images: Photo[];
  context?: {
    eyebrow: string;
    title: string;
    text: string | string[];
    images: Photo[];
  };
  next?: {
    label: string;
    href: string;
  };
  previous?: {
    label: string;
    href: string;
  };
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Dynasty", href: "/dynasty/" },
  { label: "Number 6", href: "/number-6/" },
  { label: "Archive", href: "/archive/" },
  { label: "Contact", href: "/contact/" }
];

export const imageFoldersFound = [
  "public/images/filippo/",
  "public/images/home/",
  "public/images/media/",
  "public/images/dynasty/adriano/",
  "public/images/dynasty/ademaro/",
  "public/images/dynasty/emanuele/"
];

export const missingImageFolders: string[] = [];

export const missingApprovedAssets: string[] = [];

const heritageHero: Photo = {
  src: "/images/monza-banking-hero.jpg",
  alt: "Historic white race car with Number 6 on track."
};

const numberSixCar: Photo = {
  src: "/images/legacy-number6-car.jpg",
  alt: "White vintage race car with Number 6 on the side."
};

const adrianoImages: Photo[] = [
  { src: "/images/dynasty/adriano/adriano-01.png", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-02.png", alt: "Historic racing image of Adriano Massa.", wide: true },
  { src: "/images/dynasty/adriano/adriano-03.png", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-04.png", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-05.jpg", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-06.png", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-07.jpg", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-08.png", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-09.png", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-10.png", alt: "Historic racing image of Adriano Massa." },
  { src: "/images/dynasty/adriano/adriano-11.png", alt: "Historic racing image of Adriano Massa." }
];


const adrianoContextImages: Photo[] = [
  {
    src: "/images/dynasty/adriano/context/adriano-era-grand-prix-start.webp",
    alt: "Historic Grand Prix start from the golden age of Italian motorsport.",
    wide: true
  },
  {
    src: "/images/dynasty/adriano/context/adriano-era-ascari-villoresi-paddock.webp",
    alt: "Alberto Ascari and Luigi Villoresi in the postwar Italian racing world."
  },
  {
    src: "/images/dynasty/adriano/context/adriano-era-ascari-lancia-d50-bw.jpg",
    alt: "Historic Grand Prix car from the era of Alberto Ascari and Luigi Villoresi."
  },
  {
    src: "/images/dynasty/adriano/context/adriano-era-ascari-lancia-d50-color.jpg",
    alt: "Color image of a historic Lancia D50 Grand Prix car from postwar Italian motorsport."
  },
  {
    src: "/images/dynasty/adriano/context/adriano-era-grand-prix-field.jpg",
    alt: "Postwar Italian motorsport scene from the era in which Adriano Massa raced."
  },
  {
    src: "/images/dynasty/adriano/context/adriano-era-ascari-ferrari-cockpit.jpeg",
    alt: "Historic Ferrari cockpit scene from the era of Alberto Ascari."
  },
  {
    src: "/images/dynasty/adriano/context/adriano-era-ascari-ferrari-500-action.webp",
    alt: "Historic Ferrari 500 Grand Prix car in action from the Ascari era."
  }
];

const ademaroImages: Photo[] = [
  { src: "/images/dynasty/ademaro/ademaro-01.png", alt: "Historic racing image of Ademaro Massa.", wide: true },
  { src: "/images/dynasty/ademaro/ademaro-02.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-03.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-04.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-05.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-06.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-07.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-08.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-09.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-10.png", alt: "Historic racing image of Ademaro Massa." },
  { src: "/images/dynasty/ademaro/ademaro-11.png", alt: "Historic racing image of Ademaro Massa." }
];

const emanueleImages: Photo[] = [
  { src: "/images/dynasty/emanuele/emanuele-01.png", alt: "Historic racing image of Emanuele Ademaro Massa.", wide: true },
  { src: "/images/dynasty/emanuele/emanuele-02.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-03.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-04.jpg", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-05.jpg", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-06.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-07.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-08.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-09.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-10.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-11.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-12.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-13.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-14.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-15.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-16.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-17.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-18.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-19.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-20.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-21.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-22.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-23.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-24.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-25.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-26.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-27.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-28.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-29.png", alt: "Historic racing image of Emanuele Ademaro Massa." },
  { src: "/images/dynasty/emanuele/emanuele-30.png", alt: "Historic racing image of Emanuele Ademaro Massa." }
];

const archiveRacing: Photo[] = [
  numberSixCar,
  {
    src: "/images/filippo/media/media-formula-pack-action.jpg",
    alt: "Formula cars racing in a tight pack."
  },
  {
    src: "/images/filippo/media/media-mustang-track-attack.jpg",
    alt: "Closed-wheel race car on track."
  },
  {
    src: "/images/filippo/media/media-stock-car-80-oval.jpg",
    alt: "Stock car racing on an oval circuit."
  },
  {
    src: "/images/filippo/program/program-garage-engineering.jpg",
    alt: "Race car engineering work in a garage."
  },
  {
    src: "/images/filippo/racecraft/racecraft-open-wheel-lineup-sunset.png",
    alt: "Open-wheel race cars lined up at sunset."
  }
];

const filippoImages: Photo[] = [
  {
    src: "/images/filippo/closed-wheel-action.jpg",
    alt: "Filippo Massa closed-wheel racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/closed-wheel-action.png",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/cmp-2026/details/filippo-massa-cmp-2026-helmet-detail-fm-star.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/details/filippo-massa-cmp-2026-srf3-engine-rear.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/cmp-2026/details/filippo-massa-cmp-2026-srf3-engine-top.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/cmp-2026/details/filippo-massa-cmp-2026-srf3-nose-number-three.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/cmp-2026/engineering/filippo-massa-cmp-2026-driver-coach-discussion.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/cmp-2026/engineering/filippo-massa-cmp-2026-engineering-laptop-review.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/cmp-2026/engineering/filippo-massa-cmp-2026-engineering-review-trailer.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/cmp-2026/engineering/filippo-massa-cmp-2026-team-data-review.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/cmp-2026/garage/filippo-massa-cmp-2026-comprent-transporter.png",
    alt: "Filippo Massa engineering and paddock development image.",
    wide: true
  },
  {
    src: "/images/filippo/cmp-2026/garage/filippo-massa-cmp-2026-garage-with-support.png",
    alt: "Filippo Massa engineering and paddock development image.",
    wide: true
  },
  {
    src: "/images/filippo/cmp-2026/garage/filippo-massa-cmp-2026-paddock-driver-conversation.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/cmp-2026/garage/filippo-massa-cmp-2026-race-trailer-ramp.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-balaclava-prep.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-balaclava-red-portrait.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-driver-entry-srf3.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-earpiece-prep.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-gloves-ready.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-green-srf3-garage-hero.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-helmet-front-prep.png",
    alt: "Filippo Massa preparation and training image.",
    wide: true
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-helmet-side-closeup.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-helmeted-driver-portrait.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/cmp-2026/race/filippo-massa-cmp-2026-grid-lineup-rear.png",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/cmp-2026/race/filippo-massa-cmp-2026-srf3-race-pack-wide.png",
    alt: "Filippo Massa formula and prototype development image.",
    wide: true
  },
  {
    src: "/images/filippo/cmp-2026/race/filippo-massa-cmp-2026-srf3-wet-track-action.png",
    alt: "Filippo Massa formula and prototype development image.",
    wide: true
  },
  {
    src: "/images/filippo/cmp-2026/racecraft/filippo-massa-cmp-2026-cockpit-driver-view.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/cmp-2026/racecraft/filippo-massa-cmp-2026-driver-in-cockpit-front.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/cmp-2026/results/filippo-massa-cmp-2026-award-handoff.png",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/cmp-2026/results/filippo-massa-cmp-2026-plaque-portrait.png",
    alt: "Filippo Massa portrait and paddock image."
  },
  {
    src: "/images/filippo/driver/cockpit-top-down.jpg",
    alt: "Filippo Massa formula and prototype development image.",
    wide: true
  },
  {
    src: "/images/filippo/driver/driver-car-49.jpg",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/driver/filippo-massa-driver-paddock-racing.png",
    alt: "Filippo Massa portrait and paddock image."
  },
  {
    src: "/images/filippo/driver/filippo-massa-driver-portrait-sunglasses.png",
    alt: "Filippo Massa portrait and paddock image."
  },
  {
    src: "/images/filippo/driver/helmet-car-49.jpg",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/hero-main.jpg",
    alt: "Filippo Massa racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/identity/identity-cockpit-young-racing.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/identity/identity-helmet-closeup-fmassa.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/identity/identity-red-cockpit-portrait.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/identity/identity-sunset-car-49.png",
    alt: "Filippo Massa racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/karting/filippo-massa-karting-roots-paddock-preparation.png",
    alt: "Filippo Massa karting development image.",
    wide: true
  },
  {
    src: "/images/filippo/karting/filippo-massa-karting-roots-skm-kart-portrait.png",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/karting/filippo-massa-karting-roots-technical-prep.png",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/karting/karting-current-skm-seat.jpg",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/karting/karting-early-blue-106.jpg",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/karting/karting-early-rain-birel-24.jpg",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/karting/karting-helmet-closeup-163.jpg",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/karting/karting-helmet-closeup-163.PNG",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/karting/karting-race-pack-106.jpg",
    alt: "Filippo Massa karting development image.",
    wide: true
  },
  {
    src: "/images/filippo/karting/karting-racecraft-163.jpg",
    alt: "Filippo Massa karting development image."
  },
  {
    src: "/images/filippo/legacy/legacy-karting-shared-roots.png",
    alt: "Filippo Massa racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/media/Legend-1.jpg",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/media/media-blue-formula-flame.jpg",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/media/media-dark-horse-overhead.jpg",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/media/media-formula-pack-action.jpg",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/media/media-mustang-track-attack.jpg",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/media/media-red-formula-27-action.jpg",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/media/media-red-formula-chase.jpg",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/media/media-stock-car-80-oval.jpg",
    alt: "Filippo Massa closed-wheel racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/media/media-stock-car-80-oval.png",
    alt: "Filippo Massa closed-wheel racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/media/media-stohr-49-action.jpg",
    alt: "Filippo Massa racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/media/racecraft-blue-f4-action-front.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/media/racecraft-car-70-cornering-close.png",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/onboard-poster.jpg",
    alt: "Filippo Massa racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/partners/partners-red-formula-27-rear-hero.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/partners/partners-red-formula-garage-front.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/partners/partners-red-formula-overhead-prep.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/portrait.png",
    alt: "Filippo Massa portrait and paddock image."
  },
  {
    src: "/images/filippo/preparation/physical-cardio-ford-performance.jpeg",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/preparation/physical-cardio-ford-performance.jpg",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/preparation/physical-training-jfc-dips.jpg",
    alt: "Filippo Massa preparation and training image.",
    wide: true
  },
  {
    src: "/images/filippo/preparation/physical-training-jfc-dips.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/preparation/simulator-cockpit-closeup.jpeg",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/preparation/simulator-cockpit-closeup.jpg",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/preparation/simulator-wide-young-driver.jpeg",
    alt: "Filippo Massa preparation and training image.",
    wide: true
  },
  {
    src: "/images/filippo/preparation/simulator-wide-young-driver.jpg",
    alt: "Filippo Massa preparation and training image.",
    wide: true
  },
  {
    src: "/images/filippo/program/filippo-massa-adaptability-blue-formula-4.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/program/filippo-massa-partner-relevance-dark-horse-r.png",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/program/program-buell-garage-wide.jpg",
    alt: "Filippo Massa racing development image.",
    wide: true
  },
  {
    src: "/images/filippo/program/program-cockpit-feedback.jpg",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/program/program-cockpit-pre-session.png",
    alt: "Filippo Massa formula and prototype development image.",
    wide: true
  },
  {
    src: "/images/filippo/program/program-cremona-overhead.jpg",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/program/program-driver-entry-red.jpg",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/program/program-garage-engineering.jpg",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/program/program-garage-f4-preparation.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/program/program-pit-strategy-young-racing.png",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/program/program-race-day-discussion.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/program/program-red-formula-front.jpg",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/program/program-red-white-formula-pit-lane-low-angle.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/program/program-trackside-coaching.png",
    alt: "Filippo Massa engineering and paddock development image."
  },
  {
    src: "/images/filippo/program/program-whiteboard-briefing-young-racing.png",
    alt: "Filippo Massa engineering and paddock development image.",
    wide: true
  },
  {
    src: "/images/filippo/racecraft/racecraft-blue-f4-wet-pit-lane-rear.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-car-70-front-grid.png",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-cockpit-visor-focus.png",
    alt: "Filippo Massa formula and prototype development image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-driver-entry-car-70.png",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-driver-standing-car-70.png",
    alt: "Filippo Massa closed-wheel racing development image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-glove-focus-blue-suit.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-helmet-grid-eye-contact.png",
    alt: "Filippo Massa preparation and training image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-lucas-oil-side-by-side.png",
    alt: "Filippo Massa racing development image."
  },
  {
    src: "/images/filippo/racecraft/racecraft-open-wheel-lineup-sunset.png",
    alt: "Filippo Massa formula and prototype development image.",
    wide: true
  },
  {
    src: "/images/filippo/racecraft/racecraft-open-wheel-paddock-lineup.png",
    alt: "Filippo Massa formula and prototype development image.",
    wide: true
  },
  {
    src: "/images/filippo/racecraft/racecraft-traffic-pack-orange-car.png",
    alt: "Filippo Massa closed-wheel racing development image."
  }
];
const filippoPageImagePaths = [
  "/images/filippo/hero-main.jpg",
  "/images/filippo/portrait.png",
  "/images/filippo/driver/filippo-massa-driver-portrait-sunglasses.png",
  "/images/filippo/program/program-cockpit-pre-session.png",
  "/images/filippo/program/program-driver-entry-red.jpg",
  "/images/filippo/program/program-buell-garage-wide.jpg",
  "/images/filippo/program/program-garage-engineering.jpg",
  "/images/filippo/program/program-trackside-coaching.png",
  "/images/filippo/program/program-race-day-discussion.png",
  "/images/filippo/racecraft/racecraft-cockpit-visor-focus.png",
  "/images/filippo/racecraft/racecraft-driver-standing-car-70.png",
  "/images/filippo/racecraft/racecraft-open-wheel-lineup-sunset.png",
  "/images/filippo/media/media-formula-pack-action.jpg",
  "/images/filippo/media/media-mustang-track-attack.jpg",
  "/images/filippo/media/media-stock-car-80-oval.jpg",
  "/images/filippo/closed-wheel-action.jpg",
  "/images/filippo/karting/karting-race-pack-106.jpg",
  "/images/filippo/karting/filippo-massa-karting-roots-paddock-preparation.png",
  "/images/filippo/karting/filippo-massa-karting-roots-technical-prep.png",
  "/images/filippo/preparation/simulator-wide-young-driver.jpg",
  "/images/filippo/preparation/physical-cardio-ford-performance.jpg",
  "/images/filippo/cmp-2026/preparation/filippo-massa-cmp-2026-helmeted-driver-portrait.png",
  "/images/filippo/cmp-2026/engineering/filippo-massa-cmp-2026-engineering-laptop-review.png",
  "/images/filippo/cmp-2026/race/filippo-massa-cmp-2026-srf3-wet-track-action.png"
];

const filippoPageImages = filippoPageImagePaths
  .map((src) => filippoImages.find((image) => image.src === src))
  .filter((image): image is Photo => Boolean(image));

const filippoArchiveImages = filippoPageImages;

export const drivers: Driver[] = [
  {
    slug: "adriano",
    generation: "Generation I",
    name: "Adriano Massa",
    shortName: "Adriano",
    href: "/dynasty/adriano/",
    theme: "The origin",
    hero: adrianoImages[1],
    portrait: adrianoImages[7],
    summary:
      "The origin of the Massa racing dynasty: 1940s Italy, a Milanese workshop, aluminum machinery, improvised roads, and the first mark of a family still moving forward.",
    body: [
      {
        title: "The Origin",
        text: [
          "In 1940s Italy, when country roads became makeshift circuits and engines sounded like a challenge to fate, Adriano Massa turned a family dream into something real.",
          "The automobile was still a romantic and dangerous idea. For Adriano, it became a way to measure courage, instinct, and the strange calm that arrives only when speed begins."
        ]
      },
      {
        title: "Milan, Aluminum, and Courage",
        text: [
          "Together with his brother Marco, in the dim light of a small Milanese workshop, Adriano built his first race car entirely from aluminum: fragile and powerful at once, shaped more by passion than by engineering.",
          "Those early machines belonged to a heroic era of hill climbs, dirt roads, and improvised circuits, where courage mattered as much as machinery and every corner carried consequence."
        ]
      },
      {
        title: "The First Generation",
        text: [
          "When his son Ademaro was born on August 6th, Adriano chose the Number 6 as a silent tribute. Painted on the hood of his car, it became companion, talisman, destiny, and the first visible crest of the Massa racing dynasty.",
          "Adriano was versatile, fast in both closed-wheel cars and open-wheel machines. His most famous blue Number 6 car became a symbol of daring and determination."
        ]
      },
      {
        title: "Before Circuits Became Safe",
        text: [
          "A Milanese like Alberto Ascari, Adriano moved through the early world of Italian racing with the same regional spirit, crossing paths with the heroic atmosphere of drivers who raced before modern safety existed.",
          "There were no seatbelts, no barriers, only the wind, the road, and the constant presence of danger. Adriano's greatest legacy was not measured only in victories. It was the flame carried forward by Ademaro, Emanuele Ademaro Massa, and Filippo."
        ]
      }
    ],
    context: {
      eyebrow: "Era Context",
      title: "In the Age of Ascari and Villoresi",
      text: [
        "Adriano Massa's story belongs to the heroic postwar years of Italian motorsport, when the line between road, circuit, courage, and danger was still thin. It was the age of Alberto Ascari and Luigi Villoresi, of open cockpits, leather helmets, improvised paddocks, and circuits that demanded instinct before calculation.",
        "These images are used as era context: the racing world Adriano moved through, not as verified photographs of Adriano himself. They evoke the same competitive atmosphere in which he carried the Number 6 into the first chapter of the Massa dynasty."
      ],
      images: adrianoContextImages
    },
    images: adrianoImages,
    next: { label: "Continue to Ademaro", href: "/dynasty/ademaro/" }
  },
  {
    slug: "ademaro",
    generation: "Generation II",
    name: "Ademaro Massa",
    shortName: "Ademaro",
    href: "/dynasty/ademaro/",
    theme: "Parabolica and resilience",
    hero: ademaroImages[0],
    portrait: ademaroImages[1],
    summary:
      "The second generation expanded the family mark through hill climbs, Touring and GT racing, Monza, Ferrari, and the resilience born from the Parabolica.",
    body: [
      {
        title: "The Parabolica & Destiny",
        text: [
          "In the 1960s, when Italian motorsport exploded across legendary circuits and roaring crowds, Ademaro Massa took the wheel of his own story.",
          "The son of Adriano, he grew up breathing oil and gasoline, running around his father's cars, timing laps with a stopwatch too large for his hands, and helping unload and polish the car with the pride of a boy who already knew where he belonged."
        ]
      },
      {
        title: "The Second Generation",
        text: [
          "Adriano taught him every secret: the perfect racing line, the art of driving uphill and downhill, how to tame a wet corner, and the calm required when speed turns into fury.",
          "When he came of age, Ademaro turned inheritance into reality. He bought his first race car, a machine he not only competed with but even drove to work. They were hard times, rich in passion, risk, and sacrifice. With him, the second generation of the Massa racing dynasty was born."
        ]
      },
      {
        title: "From Hill Climbs to Circuits",
        text: [
          "From his first hill climb races, following in his father's footsteps, Ademaro moved naturally to circuits. There he built his legend through Touring and GT racing, victories across Italy and abroad, and the identity of a four-time Italian Champion.",
          "His story reached one of its brightest moments at Monza, behind the wheel of a Ferrari, alongside Arturo Merzario, the fearless Ferrari Formula 1 driver of the 1970s remembered as one of the heroes who helped save Niki Lauda from the flames."
        ]
      },
      {
        title: "Monza and the Edge of Fate",
        text: [
          "In those years, racing was inseparable from tragedy. At Monza, exiting the legendary Parabolica before the main straight, Ademaro suffered a devastating crash.",
          "His car spun and came to rest sideways in the middle of the track. Struck at full speed by another vehicle, his Alfa Romeo GTA was torn in two, and he fell into a coma."
        ]
      },
      {
        title: "Return from the Shadow",
        text: [
          "Emerging from the shadow of tragedy, scarred in body and soul, Ademaro chose to listen once again to the voice that had always guided him: the voice of speed.",
          "He returned to the track despite everything, because it was not speed that consumed him. It was speed that kept him alive."
        ]
      },
      {
        title: "The Flame Passed Forward",
        text: [
          "Over the years, Ademaro became a respected figure in the racing world, forging friendships, competing in hundreds of races, and driving cars that today belong to private collectors: relics of a heroic era.",
          "His home remains filled with trophies, each a silent witness to a lifetime of racing. Yet his greatest legacy was not measured only in victories or silverware. As Adriano had done before him, Ademaro passed the passion to his son, Emanuele Ademaro Massa."
        ]
      }
    ],
    images: ademaroImages,
    previous: { label: "Back to Adriano", href: "/dynasty/adriano/" },
    next: { label: "Continue to Emanuele", href: "/dynasty/emanuele/" }
  },
  {
    slug: "emanuele",
    generation: "Generation III",
    name: "Emanuele Ademaro Massa",
    shortName: "Emanuele",
    href: "/dynasty/emanuele/",
    theme: "A child's dream",
    hero: emanueleImages[0],
    portrait: emanueleImages[0],
    summary:
      "The third generation transformed childhood wonder into competition: paddocks, silent cockpits, karting, touring cars, GT racing, and the Number 6.",
    body: [
      {
        title: "A Child's Dream",
        text: [
          "From the age of four, Emanuele Ademaro Massa, son of Ademaro and grandson of Adriano, followed his father to the races. With eyes full of wonder, he watched trophies and cups come home, each one a fragment of glory that fueled his dreams.",
          "At the family villa in Milan, race cars arrived on trailers still warm from the track. Emanuele would climb inside, sit in a seat too large for him, grip the thin leather steering wheel, and imagine himself already flying down a circuit."
        ]
      },
      {
        title: "The Villa, the Cars, and the Sleeping Beast",
        text: [
          "The silence of the engine intimidated him, like a beast asleep beneath the hood. His hand would brush against the keys in the dashboard, only to pull back at once, afraid to awaken the creature.",
          "The strange scent of the cockpit, gasoline, sweat, and speed, became part of his imagination. Wearing his father's helmet, still marked by effort and moments only a driver can understand, he was already racing at full speed long before he could reach the pedals."
        ]
      },
      {
        title: "First Lessons",
        text: [
          "His toys were small race cars that he sent darting across the family's billiard table, recreating the feats of great champions.",
          "At six, he raced around the villa's garden on minibikes brought home from the paddock, taking apart and reassembling carburetors and fairings. At eight, Ademaro took his hands and taught him how to tame a real car in that same garden, the place that became his first racetrack."
        ]
      },
      {
        title: "Karting and the Third Generation",
        text: [
          "At twelve, karting arrived. It was love at first sight. Karting taught him discipline, racing lines, braking, and overtaking.",
          "His father passed on the secrets of a lifetime in racing, while Adriano watched from the sidelines, advising and encouraging him. With Emanuele Ademaro Massa, the third generation of the Massa racing dynasty was born."
        ]
      },
      {
        title: "Touring Cars, GTs, and the Number 6",
        text: [
          "After outstanding results in karting, Emanuele debuted in the Touring Car Championship at eighteen and immediately won his first race. With his father and grandfather by his side, he built a career across Italy and abroad, collecting victories, trophies, and experience.",
          "Like Ademaro before him, he moved naturally from Touring Cars to GTs, carrying the Number 6 on his helmet as the eternal symbol of his lineage."
        ]
      },
      {
        title: "Passing the Flame",
        text: [
          "For twenty years, Emanuele raced at home and beyond borders, accumulating hundreds of races and dozens of trophies. When his first daughter was born, he chose to retire from competition, closing a glorious chapter without ever extinguishing the flame.",
          "Just as Adriano had passed the flame to Ademaro, and Ademaro had passed it to Emanuele, Emanuele did the most important thing of all: he passed the passion on to his son, Filippo."
        ]
      }
    ],
    images: emanueleImages,
    previous: { label: "Back to Ademaro", href: "/dynasty/ademaro/" },
    next: { label: "Meet Filippo", href: "/dynasty/filippo/" }
  },
  {
    slug: "filippo",
    generation: "Generation IV",
    name: "Filippo Massa",
    shortName: "Filippo",
    href: "/dynasty/filippo/",
    theme: "The fourth generation",
    hero: {
      src: "/images/filippo-hero-cockpit-pre-session.png",
      alt: "Filippo Massa seated in a cockpit before a session."
    },
    portrait: {
      src: "/images/generation-filippo.jpg",
      alt: "Filippo Massa in a racing suit and sunglasses."
    },
    summary:
      "Filippo Massa carries the fourth generation into motion: karting roots, disciplined training, and an early development path across Formula cars, GT cars, open-wheel and closed-wheel racecraft, with long-term ambitions toward IndyCar and NASCAR.",
    body: [
      {
        title: "Son of Speed",
        text: [
          "Filippo Ademaro Massa grew up inside a racing story already alive before he was born. The Number 6, the smell of garages, the discipline of the paddock, and the voices of Ademaro and Emanuele were never distant memories. They were part of his daily world.",
          "As a child in Milan, battery-powered cars and pedal karts turned garages and courtyards into miniature circuits. Ademaro and Emanuele were guides and mechanics there, showing him that the family craft was learned through hands, discipline, and repetition."
        ]
      },
      {
        title: "Fourth Generation",
        text: [
          "Filippo Massa is a rising young driver combining speed, discipline, and a profound family legacy in motorsport. From an early age, he developed an understanding of race dynamics, technical feedback, and strategy, qualities built first in karting and then sharpened in modern racing environments.",
          "His development includes access to Emanuele's Formula 4 team environment, simulator work, coaching, and a growing ability to translate instinct into structured performance."
        ]
      },
      {
        title: "From Karting to the Track",
        text: [
          "Karting gave Filippo the first language of speed: reflexes, braking points, patience, defeat, recovery, and the mechanical sensitivity that separates driving from simply steering.",
          "The path continued through real-track experiences, including the Hyundai Veloster at Homestead-Miami, and then through respected development programs such as Ford Performance Racing School, Skip Barber Racing School, and Lucas Oil School of Racing."
        ]
      },
      {
        title: "A Complete Modern Driver",
        text: [
          "Filippo is not being shaped by one category alone. Formula cars sharpen his precision, reaction speed, and technical sensitivity. GT and closed-wheel cars build traffic management, contact awareness, endurance, and racecraft.",
          "Together, they shape the complete profile he is building: Formula and GT experience, open-wheel precision and closed-wheel racecraft, and the skills required for future opportunities that could include IndyCar and NASCAR."
        ]
      },
      {
        title: "Open-Wheel and Closed-Wheel Development",
        text: [
          "In 2025, Filippo took an important step by testing the Ligier JS F4, one of the most competitive junior formula cars in North America. Behind the wheel for Buell Racing, he showed adaptability, pace, and the ability to extract performance from a new platform.",
          "That work sits alongside closed-wheel development, not against it. He is not choosing one lane too early. He is building range across machines, circuits, and racing cultures."
        ]
      },
      {
        title: "Karting: The First Fire",
        text: [
          "Karting is not just the starting point of motorsport. It is the primordial fire where dreams are forged into reality, the arena where young drivers learn to challenge their limits and shape their character.",
          "For Filippo, karting was far more than a childhood passion. It was the heartbeat that ignited his path toward the future of motorsport. It taught him that victory is not only crossing the finish line first, but rising after defeat, learning from mistakes, and turning obstacles into opportunity."
        ]
      },
      {
        title: "Discipline Beyond the Cockpit",
        text: [
          "Off the track, Filippo is fluent in Italian and English, is completing his senior year of high school with a 4.0 GPA, and follows a strict training regimen that includes running, strength conditioning, simulator work, and data analysis.",
          "He is recognized for professionalism, media presence, and strong relationships with engineers, coaches, and sponsors. The future still accelerates, but it is being built with method, range, and discipline."
        ]
      }
    ],
    images: filippoPageImages,
    previous: { label: "Back to Emanuele", href: "/dynasty/emanuele/" },
    next: { label: "Contact 4th Gen Racing", href: "/contact/" }
  }
];

export const driverBySlug = Object.fromEntries(drivers.map((driver) => [driver.slug, driver])) as Record<Driver["slug"], Driver>;

export const archiveGroups = [
  {
    title: "Adriano Massa",
    images: drivers[0].images
  },
  {
    title: "Ademaro Massa",
    images: drivers[1].images
  },
  {
    title: "Emanuele Ademaro Massa",
    images: drivers[2].images
  },
  {
    title: "Filippo Massa",
    images: filippoArchiveImages
  }
];

export const contactImages = [
  heritageHero,
  drivers[3].portrait,
  {
    src: "/images/filippo/program/program-race-day-discussion.png",
    alt: "Race day discussion in the paddock."
  },
  {
    src: "/images/filippo/partners/partners-red-formula-garage-front.png",
    alt: "Red formula car prepared in a garage."
  }
];

