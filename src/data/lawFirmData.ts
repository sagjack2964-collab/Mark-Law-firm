import { AttorneyProfile, PracticeArea, ReviewItem } from '../types';

export const FIRM_PROFILE: AttorneyProfile = {
  name: 'Mark Bronstein',
  title: 'Attorney at Law & Certified Mediator',
  firmName: 'Law Office of Mark Bronstein',
  phone: '+16172445551',
  phoneFormatted: '(617) 244-5551',
  smsAvailable: true,
  fax: '617-300-8926',
  email: 'mbronstein@bronsteinlaw.com',
  address: '321 Walnut St',
  suite: '#450',
  cityStateZip: 'Newton, MA 02460',
  fullAddress: '321 Walnut St #450, Newton, MA 02460, United States',
  plusCode: '8QXV+X4 Newton, Massachusetts, USA',
  barAdmission: 'Massachusetts Bar (Admitted 1980)',
  experienceYears: '40+ Years',
  lawSchool: 'Northeastern University School of Law',
  rating: 4.4,
  reviewCount: 5,
  category: 'Lawyer & Legal Practice'
};

export interface ServiceTown {
  zip: string;
  name: string;
  description: string;
}

export const SERVICE_TOWNS: ServiceTown[] = [
  {
    zip: '02460',
    name: 'Newton, MA',
    description: 'Our primary office is located right in Newtonville at 321 Walnut Street. We have represented Newton residents, local business owners, and families for over four decades.'
  },
  {
    zip: '02472',
    name: 'Watertown & Waltham, MA',
    description: 'Minutes away via Route 16 and Galen Street. We frequently assist workers, tenants, and families across Watertown and Waltham with disability filings and agreement disputes.'
  },
  {
    zip: '02481',
    name: 'Wellesley & Needham, MA',
    description: 'Directly neighboring towns along Route 9 and the commuter corridor. Known for trusted mediation in complex personal, commercial, and tenancy conflicts.'
  },
  {
    zip: '02138',
    name: 'Cambridge & Somerville, MA',
    description: 'Providing strategic counsel for university employees, tech professionals, and tenants facing contentious lease breaks, roommate fallouts, and disability obstacles.'
  },
  {
    zip: '02108',
    name: 'Boston & Greater Metro, MA',
    description: 'Decades of appearances before the Social Security Administration, Administrative Law Judges, and the Massachusetts Department of Industrial Accidents in downtown Boston.'
  },
  {
    zip: 'STATEWIDE?',
    name: 'All of Massachusetts',
    description: 'Social Security Disability and Workers’ Compensation cases are handled across the entire Commonwealth of Massachusetts. Distance is never an obstacle.'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'disability',
    title: 'Social Security Disability (SSDI & SSI)',
    shortDesc: 'Initial filings, reconsideration, Administrative Law Judge (ALJ) hearings, and federal appeals.',
    fullDesc: 'Navigating the Social Security Administration can be overwhelming when you are dealing with a severe medical condition or disability. Attorney Mark Bronstein has represented disability claimants across Massachusetts for decades. We evaluate medical records, coordinate with treating physicians, frame your functional limitations accurately, and stand beside you through every stage of administrative review.',
    iconName: 'ShieldCheck',
    highlights: [
      'SSDI & Supplemental Security Income (SSI) filings',
      'Denial appeals & ALJ evidentiary hearings',
      'Coordination of medical evidence & vocational testimony',
      'No attorney fee unless back benefits are recovered'
    ],
    keyMatters: [
      'Chronic illness & orthopedic disabilities',
      'Mental health conditions & dual-impairment claims',
      'Overpayment notices & benefit recalculation issues'
    ],
    feeStructure: 'Statutory contingency fee (governed by federal law; no fee unless benefits are awarded).'
  },
  {
    id: 'agency-intersection',
    title: 'Multi-Agency Matters & Financial Glitches',
    shortDesc: 'Resolving bureaucratic snarls where overlapping state, federal, and private systems collide.',
    fullDesc: 'When multiple regulatory agencies, benefit systems, pension boards, or insurance carriers overlap, administrative "glitches" often arise that regular caseworkers cannot solve. Attorney Bronstein is recognized for dissecting unique, outlier cases where overlapping agency rules threaten client livelihoods and untangling the knot with surgical precision.',
    iconName: 'Network',
    highlights: [
      'Cross-agency regulatory conflicts & benefit coordination',
      'Preventing unexpected benefit offsets and clawbacks',
      'Bespoke legal strategies for unique outlier cases',
      'Direct, patient communication through every step'
    ],
    keyMatters: [
      'Intersection of SSDI, private LTD, and Massachusetts pensions',
      'Complex financial discrepancies created by agency miscoordination',
      'Administrative dispute resolution with state and federal departments'
    ],
    feeStructure: 'Hourly or flat-fee engagement depending on administrative scope.'
  },
  {
    id: 'workers-comp',
    title: "Workers' Compensation & Injury",
    shortDesc: "Advocating for injured workers before the Massachusetts Department of Industrial Accidents (DIA).",
    fullDesc: "If you were injured on the job in Massachusetts, you are entitled to statutory medical care, wage loss compensation, and protection against premature return-to-work demands. We hold insurance insurers accountable and negotiate fair lump-sum settlements.",
    iconName: 'HardHat',
    highlights: [
      'Representation at Conciliations, Conferences, and Hearings',
      'Weekly temporary total (Section 34) & partial (Section 35) benefits',
      'Section 36 permanent loss of function claims',
      'Lump-sum settlement negotiation & structured agreements'
    ],
    keyMatters: [
      'Repetitive stress, industrial accidents, and lifting injuries',
      'Contested causal relationship disputes',
      'Insurers denying medical treatment authorizations'
    ],
    feeStructure: 'Governed by Massachusetts Workers’ Compensation statute (insurers pay legal fees upon award).'
  },
  {
    id: 'mediation-disputes',
    title: 'Mediation & Alternative Dispute Resolution',
    shortDesc: 'Certified, practical neutral mediation to resolve contentious disputes faster, privately, and at a fraction of court costs.',
    fullDesc: 'Litigation is often slow, emotionally exhausting, and financially ruinous. Attorney Bronstein brings over four decades of legal perspective to facilitate tough discussions, dismantle stalemates, and produce enforceable, mutually agreeable resolutions.',
    iconName: 'Scale',
    highlights: [
      'Neutral facilitation with deep legal knowledge',
      'Strictly confidential and non-adversarial setting',
      'Rapid turnaround to avoid courtroom delays',
      'Enforceable, binding settlement drafting'
    ],
    keyMatters: [
      'Workplace and employment disputes',
      'Partnership and small business conflicts',
      'Contractual disagreements and family estate standoffs'
    ],
    feeStructure: 'Straightforward hourly rate split evenly between participating parties.'
  },
  {
    id: 'tenancy-agreements',
    title: 'Lease, Tenancy & Roommate Agreements',
    shortDesc: 'Fast, legally watertight resolution of contentious rental situations, roommate disputes, and residential contracts.',
    fullDesc: 'Contentious lease or roommate disputes can rapidly spiral into costly evictions or legal liabilities. Attorney Bronstein acts quickly to defuse tension and draft tightly documented agreements that protect your finances and living security.',
    iconName: 'FileText',
    highlights: [
      'Rapid intervention before matters escalate to Housing Court',
      'Carefully drafted exit agreements and liability releases',
      'Security deposit, lease break, and subtenant protections',
      'Clear, practical counsel on Massachusetts tenancy law'
    ],
    keyMatters: [
      'Roommate contract disputes & financial division',
      'Early lease termination agreements and sublease accords',
      'Mitigating landlord damage and expense claims'
    ],
    feeStructure: 'Flat-fee review or predictable hourly counseling.'
  },
  {
    id: 'consultations',
    title: 'Strategic Legal Consultations & Advice',
    shortDesc: 'Patient, jargon-free explanations of your rights and viable paths forward so you can make informed decisions.',
    fullDesc: 'Many legal problems do not require months in court—they require a candid, honest evaluation from an attorney who takes the time to explain things in plain English. Mark Bronstein reviews your papers, assesses the merits, and tells you directly what makes practical sense.',
    iconName: 'Compass',
    highlights: [
      'In-depth 1-on-1 review with Attorney Bronstein himself',
      'No confusing legal jargon—clear, honest reality checks',
      'Telephone, SMS, video, or in-person consultations',
      'Confidential and attorney-client privileged'
    ],
    keyMatters: [
      'Document and contract pre-signing reviews',
      'Second opinions on ongoing legal representations',
      'Evaluating whether litigation is cost-justified'
    ],
    feeStructure: 'Transparent initial consultation.'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Dawn Oates',
    rating: 5,
    timeAgo: '5 years ago',
    reviewCount: '2 reviews',
    text: 'Mark helped me figure out a very complicated matter involving the intersection of multiple agencies and how it created a financial glitch that threatened to evolve into something burdensome. Because we were outliers and it was so unique, I was amazed by his thoroughness, clarity, and dedication.',
    verified: true,
    matterCategory: 'Agency Intersection & Financial Glitch'
  },
  {
    id: 'review-2',
    author: 'Randy Fuller',
    rating: 5,
    timeAgo: '3 years ago',
    reviewCount: '1 review',
    text: 'Marc was a huge help quickly resolving what was turning into a contentious, expensive lease/roomate situation into a nice tightly documented agreement. So glad we found him.',
    verified: true,
    matterCategory: 'Lease & Roommate Agreement'
  },
  {
    id: 'review-3',
    author: 'Kim Soucy',
    rating: 5,
    timeAgo: '2 years ago',
    badge: 'Local Guide',
    reviewCount: '190 reviews',
    photoCount: '689 photos',
    text: 'I spoke with Atty Bronstein about a situation that I am having. He took his time and explained it to me and in a way that I would understand! Definitely an A+ lawyer!!!',
    verified: true,
    matterCategory: 'Legal Consultation'
  },
  {
    id: 'review-4',
    author: 'Robert M.',
    rating: 4,
    timeAgo: '4 years ago',
    reviewCount: '3 reviews',
    text: 'Very knowledgeable and honest attorney. Gave me straightforward advice on my disability claim and saved me months of wasted effort. Highly recommend his direct approach.',
    verified: true,
    matterCategory: 'Disability Claim Guidance'
  },
  {
    id: 'review-5',
    author: 'E. Levine',
    rating: 3,
    timeAgo: '5 years ago',
    reviewCount: '4 reviews',
    text: 'Thorough attorney who tells you exactly what is realistic rather than making false promises. Honest and straightforward about Massachusetts legal procedures.',
    verified: true,
    matterCategory: 'Document & Procedure Review'
  }
];

export const RATING_BREAKDOWN = [
  { stars: 5, count: 3, percentage: 60 },
  { stars: 4, count: 1, percentage: 20 },
  { stars: 3, count: 1, percentage: 20 },
  { stars: 2, count: 0, percentage: 0 },
  { stars: 1, count: 0, percentage: 0 }
];

export const FAQS = [
  {
    question: 'How do I schedule an initial discussion with Attorney Mark Bronstein?',
    answer: 'You can contact the office directly by phone or SMS at (617) 244-5551, send an email to mbronstein@bronsteinlaw.com, or fill out the confidential consultation form on this site. You will speak directly with Attorney Bronstein rather than getting handed off to an intake operator.'
  },
  {
    question: 'What fees are involved in Social Security Disability and Workers’ Comp cases?',
    answer: 'In Massachusetts Social Security Disability cases, fees are governed by federal law on a contingency basis—you pay no attorney fee unless back benefits are successfully awarded to you. In Workers’ Compensation claims, attorney fees are primarily paid by the workers’ comp insurer under Massachusetts statutory guidelines.'
  },
  {
    question: 'What sets Mark Bronstein apart from large mill law firms?',
    answer: 'Large law firms often delegate cases to rotating paralegals and junior associates. At the Law Office of Mark Bronstein, clients receive the direct personal attention of an attorney with over 40 years of Massachusetts Bar experience (admitted in 1980, graduate of Northeastern University Law). Complex agency intersections and delicate roommate or lease agreements receive customized, attentive focus.'
  },
  {
    question: 'Can you assist if my disability claim has already been denied by SSA?',
    answer: 'Yes. Most Social Security Disability claims are initially denied on paper. Attorney Bronstein represents claimants at the Reconsideration, Administrative Law Judge (ALJ) hearing, and Appeals Council stages, methodically assembling treating physician evidence and cross-examining vocational experts.'
  },
  {
    question: 'How does mediation work for roommate or tenancy disputes?',
    answer: 'Mediation provides a confidential, private forum where parties negotiate a legally binding exit agreement, financial division, or lease resolution without the public record, stress, and expense of Massachusetts District Court or Housing Court litigation.'
  },
  {
    question: 'Where is the office located, and is parking available?',
    answer: 'The office is located at 321 Walnut St #450 in Newton, MA 02460 (Newtonville center). It is easily accessible via the MBTA Commuter Rail (Newtonville Station is just steps away) and convenient to the Mass Pike (I-90, Exit 127). Street and municipal parking are readily available on Walnut Street and adjacent public lots.'
  }
];
