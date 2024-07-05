import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.API_KEY; // your api key
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

  return NextResponse.json(data.data);
}
