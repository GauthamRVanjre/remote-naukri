import { NaukriTypeFromAPI } from "@/app/utils/types";
import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.API_KEY;
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=developer%20in%20India&page=1&num_pages=20&date_posted=all&job_requirements=under_3_years_experience`,
      {
        headers: {
          "x-rapidapi-key": `${API_KEY}`,
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    const jobs: NaukriTypeFromAPI[] = data.data;

    const existingJobs = await prisma.jobs.count();
    console.log("existing jobs: " + existingJobs);
    if (existingJobs && existingJobs > 0) {
      await prisma.jobs.deleteMany();
    }

    console.log("jobs deleted: ");

    for (const job of jobs) {
      await prisma.jobs.create({
        data: {
          job_id: job.job_id || "",
          employer_name: job.employer_name || "",
          employer_logo: job.employer_logo || "",
          employer_website: job.employer_website || "",
          employer_linkedin: job.employer_linkedin || "",
          job_employment_type: job.job_employment_type || "",
          job_title: job.job_title || "",
          job_apply_link: job.job_apply_link || "",
          job_description: job.job_description || "",
          job_is_remote: job.job_is_remote || false,
          job_city: job.job_city || "",
          job_state: job.job_state || "",
          job_country: job.job_country || "",
          // job_required_experience: {
          //   no_experience_required:
          //     job.job_required_experience.no_experience_required || "",
          //   required_experience_in_months:
          //     job.job_required_experience.required_experience_in_months || "",
          //   experience_preferred:
          //     job.job_required_experience.experience_preferred || "",
          // },
          job_required_experience:
            job.job_required_experience.required_experience_in_months,
          job_required_skills: job.job_required_skills
            ? job.job_required_skills
            : [],
          job_min_salary: job.job_min_salary || 0,
          job_max_salary: job.job_max_salary || 0,
        },
      });
    }

    return NextResponse.json(
      { message: "Jobs Dumped Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
