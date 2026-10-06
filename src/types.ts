export interface StatItem {
  number: string;
  label: string;
  subLabel?: string;
  unit?: string;
}

export interface AnatomyComponent {
  percent: string;
  name: string;
  role: string;
  description: string;
  color: string;
}

export interface DigestivePhase {
  phase: string;
  organ: string;
  time: string;
  ph: string;
  freeSurvival: number; // Log CFU/g or relative %
  synbioticSurvival: number; // Log CFU/g or relative %
  description: string;
}

export interface TrialTreatment {
  code: string;
  name: string;
  desc: string;
  finalWeight: number; // grams
  weightError: number;
  fcr: number;
  fcrError: number;
  color: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  image?: string;
  caption?: string;
  hasPhoto: boolean;
}

export interface HeritageColor {
  id: string;
  name: string;
  meaning: string;
  hex: string;
  borderHex: string;
  desc: string;
}

export interface TeamMember {
  id: string;
  name: string;
  major: string;
  role: string;
  roleDetails?: string[];
  institution: string;
  image: string;
  quote?: string;
}

export interface ProjectContact {
  code: string;
  name: string;
  institution: string;
  email: string;
  phone: string;
  facebook: string;
  website: string;
  socialOther: string;
  qrCodeLink: string;
}
