import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url).searchParams;
  const skip = Number(url.get("skip")) || 0;
  const take = Number(url.get("take")) || 10;
  const employementType = url.get("employementType")?.trim();
  const experienceValue = url.get("experienceValue");
  const location = url.get("location"); //done
  const searchValue = url.get("searchValue"); // done

  try {
    let whereClause: any = {};

    if (location !== "undefined") {
      whereClause.job_is_remote = location;
    }

    if (searchValue) {
      whereClause.OR = [
        {
          job_title: {
            contains: searchValue,
            mode: "insensitive",
          },
        },
        {
          employer_name: {
            contains: searchValue,
            mode: "insensitive",
          },
        },
      ];
    }

    if (employementType !== "undefined") {
      whereClause.job_employment_type = employementType;
    }

    if (experienceValue !== "undefined") {
      whereClause.job_required_experience = {
        required_experience_in_months: experienceValue,
      };
    }

    console.log(whereClause);
    let jobs;
    let jobsCount;
    jobsCount = await prisma.jobs.count({
      where: whereClause,
    });
    if (whereClause) {
      jobs = await prisma.jobs.findMany({
        skip,
        take,
        where: whereClause,
      });
    } else {
      jobs = await prisma.jobs.findMany({
        skip,
        take,
      });
    }

    // console.log(jobs);

    return NextResponse.json({ jobs, count: jobsCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
