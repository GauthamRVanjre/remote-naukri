import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);

  try {
    const job = await prisma.jobs.findUnique({
      where: {
        job_id: params.id!,
      },
    });

    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
