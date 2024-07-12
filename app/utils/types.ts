export type NaukriTypeFromAPI = {
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
    required_experience_in_months: string;
  };
  job_required_skills: string[];
  job_min_salary: number;
  job_max_salary: number;
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
  job_required_experience: string;
  job_required_skills: string[];
  job_min_salary: number;
  job_max_salary: number;
};
