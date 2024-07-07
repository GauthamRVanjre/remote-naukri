import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url).searchParams;
  const skip = Number(url.get("skip")) || 0;
  const take = Number(url.get("take")) || 10;

  try {
    const jobsCount = await prisma.jobs.count();

    const jobs = await prisma.jobs.findMany({
      skip,
      take,
    });

    return NextResponse.json({ jobs, count: jobsCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
