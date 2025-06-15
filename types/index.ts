export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  consent: boolean;
}
