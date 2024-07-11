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

export type NaukriType = {
  job_id: string;
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  employer_linkedin: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_description: string;
  job_is_remote: boolean;
  job_city: string;
  job_state: string;
  job_country: string;
  job_required_experience: {
    no_experience_required: string;
    required_experience_in_months: string;
    experience_preferred: string;
  };
  job_required_skills: string[];
  job_min_salary: number;
  job_max_salary: number;
};
