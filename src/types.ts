export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'sms' | 'email';
  matterType: string;
  description: string;
  isUrgent: boolean;
  confidentialityAccepted: boolean;
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  keyMatters: string[];
  feeStructure: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  badge?: string;
  reviewCount?: string;
  photoCount?: string;
  text: string;
  verified: boolean;
  matterCategory: string;
}

export interface AttorneyProfile {
  name: string;
  title: string;
  firmName: string;
  phone: string;
  phoneFormatted: string;
  smsAvailable: boolean;
  fax: string;
  email: string;
  address: string;
  suite: string;
  cityStateZip: string;
  fullAddress: string;
  plusCode: string;
  barAdmission: string;
  experienceYears: string;
  lawSchool: string;
  rating: number;
  reviewCount: number;
  category: string;
}
