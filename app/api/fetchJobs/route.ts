import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url).searchParams;
  const skip = Number(url.get("skip")) || 0;
  const take = Number(url.get("take")) || 10;
  const employementType = url.get("employementType")?.trim() || "";
  const experienceValue = url.get("experienceValue") || "";
  const location = url.get("location") || ""; //done
  const searchValue = url.get("searchValue") || ""; // done

  try {
    let whereClause: any = {};
    if (location !== "") {
      whereClause.job_is_remote = Boolean(location);
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

    if (employementType !== "") {
      whereClause.job_employment_type = employementType;
    }

    if (experienceValue !== "") {
      whereClause.job_required_experience = experienceValue;
    }
    let jobs;
    let jobsCount;

    if (Object.keys(whereClause).length > 0) {
      jobs = await prisma.jobs.findMany({
        skip,
        take,
        where: whereClause,
        orderBy: {
          job_posted_at_timestamp: "desc",
        },
      });
      jobsCount = await prisma.jobs.count({
        where: whereClause,
      });
    } else {
      jobs = await prisma.jobs.findMany({
        skip,
        take,
        orderBy: {
          job_posted_at_timestamp: "desc",
        },
      });
      jobsCount = await prisma.jobs.count();
    }

    return NextResponse.json({ jobs, count: jobsCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
