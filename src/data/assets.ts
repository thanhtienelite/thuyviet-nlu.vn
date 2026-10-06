// Asset Mapping Registry for THỤY VIỆT (DA55)
// Strictly routes to static assets in /public/images/

export interface AppAssets {
  productHero: string;
  productBox: string;
  productPouch: string;
  productPowder: string;
  productLifestyle: string;
  productFlatlay: string;

  chicken01: string;
  chicken02: string;
  chicken03: string;
  chicken04: string;
  chicken05: string;
  chicken06: string;

  bananaRaw: string;
  bananaWash: string;
  bananaSlices: string;
  bananaDry: string;
  bananaGrind: string;
  stepMixing: string;
  stepTesting: string;

  labTeam: string;
  labProcess: string;

  logoNLU: string;
  logoADM: string;
  logoHoangLam: string;

  teamToan: string;
  teamDuy: string;
  teamThao: string;
  teamTien: string;

  eventPoster: string;
  qrRepresentative: string;
}

export const assets: AppAssets = {
  productHero: "/images/thuy-viet-product.jpg",
  productBox: "/images/product-box.jpg",
  productPouch: "/images/product-pouch.jpg",
  productPowder: "/images/powder.jpg",
  productLifestyle: "/images/product-lifestyle.jpg",
  productFlatlay: "/images/product-flatlay.jpg",

  chicken01: "/images/chicken-01.jpg",
  chicken02: "/images/chicken-02.jpg",
  chicken03: "/images/chicken-03.jpg",
  chicken04: "/images/chicken-04.jpg",
  chicken05: "/images/chicken-05.jpg",
  chicken06: "/images/chicken-06.jpg",

  bananaRaw: "/images/banana-raw.jpg",
  bananaWash: "/images/banana-wash.jpg",
  bananaSlices: "/images/banana-slices.jpg",
  bananaDry: "/images/banana-dry.jpg",
  bananaGrind: "/images/step-grind-sieve.jpg",
  stepMixing: "/images/step-mixing.jpg",
  stepTesting: "/images/step-testing.jpg",

  labTeam: "/images/lab-team.jpg",
  labProcess: "/images/lab-process.jpg",

  logoNLU: "/images/logo-nlu.png",
  logoADM: "/images/logo-adm.png",
  logoHoangLam: "/images/logo-hoang-lam.png",

  teamToan: "/images/team-toan.jpg",
  teamDuy: "/images/team-duy.jpg",
  teamThao: "/images/team-thao.jpg",
  teamTien: "/images/team-tien.jpg",

  eventPoster: "/images/poster-competition.png",
  qrRepresentative: "/images/qr-representative.jpg",
};

// Aliases for compatibility across components
export const ASSETS = {
  PRODUCT_HERO: assets.productHero,
  PRODUCT_PACKAGING_BOX: assets.productBox,
  PRODUCT_PACKAGING_POUCH: assets.productPouch,
  PRODUCT_PACKAGING_JAR: assets.productPouch,
  PRODUCT_POWDER: assets.productPowder,
  PRODUCT_LIFESTYLE: assets.productLifestyle,
  PRODUCT_FLATLAY: assets.productFlatlay,

  CHICKEN_TRIAL_01: assets.chicken01,
  CHICKEN_TRIAL_02: assets.chicken02,
  CHICKEN_TRIAL_03: assets.chicken03,
  CHICKEN_TRIAL_04: assets.chicken04,
  CHICKEN_TRIAL_05: assets.chicken05,
  CHICKEN_TRIAL_06: assets.chicken06,

  BANANA_RAW: assets.bananaRaw,
  BANANA_WASH: assets.bananaWash,
  BANANA_SLICES: assets.bananaSlices,
  BANANA_DRY: assets.bananaDry,
  BANANA_GRIND: assets.bananaGrind,
  STEP_GRIND_SIEVE: assets.bananaGrind,
  STEP_MIXING: assets.stepMixing,
  STEP_TESTING: assets.stepTesting,

  LAB_TEAM: assets.labTeam,
  LAB_PROCESS: assets.labProcess,

  LOGO_NLU: assets.logoNLU,
  LOGO_ADM: assets.logoADM,
  LOGO_HOANG_LAM: assets.logoHoangLam,

  TEAM_TOAN_IMAGE: assets.teamToan,
  TEAM_DUY_IMAGE: assets.teamDuy,
  TEAM_THAO_IMAGE: assets.teamThao,
  TEAM_TIEN_IMAGE: assets.teamTien,

  EVENT_POSTER: assets.eventPoster,
  QR_REPRESENTATIVE: assets.qrRepresentative,
  QR_CONTACT: assets.qrRepresentative,
};

export default assets;
