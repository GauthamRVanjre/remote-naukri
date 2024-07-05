export type jobType = {
  id: string;
  title: string;
  description: string;
  company: string;
  technologies: string[];
  main_technology: string;
  job_type: string;
  max_payment_usd: number;
  country_iso: string;
  applications: number;
  views: number;
  apply_url: string;
  logo_url: string;
  created_at: Date;
  location: string;
};
