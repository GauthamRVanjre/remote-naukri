"use client";
import { NaukriType } from "@/app/utils/types";
import { isValidUrl } from "@/app/utils/urlParser";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const decodedId = decodeURIComponent(id);
  const [jobData, setJobData] = useState<NaukriType | undefined>();

  useEffect(() => {
    function fetchJobData() {
      const res = fetch(`/api/fetchJobs/${decodedId}`)
        .then((res) => res.json())
        .then((data) => {
          setJobData(data);
        });
    }

    fetchJobData();
  }, [decodedId]);

  console.log(JSON.stringify(jobData?.job_description));

  // Replace newline characters with <br /> for job_description
  const jobDescriptionWithBreaks = jobData?.job_description?.replace(
    /\n/g,
    "<br />"
  );

  return (
    <>
      <div>
        {/* background image */}
        <div className="header"></div>

        <div
          onClick={() => (window.location.href = "/")}
          className="breadcrumb apply_link"
        >
          Find More Jobs
        </div>
        <div className="employer-details border-provider">
          <div>
            <img
              className="employer-logo"
              src={jobData?.employer_logo}
              alt="logo"
            />
          </div>
          <div className="employer-role-details">
            <div>
              <div className="company">
                <span className="cname">{jobData?.employer_name}</span>
              </div>
              <div>
                <span>{jobData?.job_title}</span>
              </div>
              <div className="details">
                <span>
                  {jobData?.job_required_experience
                    ? jobData?.job_required_experience
                    : "Freshers"}{" "}
                  <span>
                    {jobData?.job_required_experience ? "months" : ""}
                  </span>
                </span>
                <span className="details-dots">•</span>
                <span>{jobData?.job_employment_type}</span>
                <span className="details-dots">•</span>
                <span>
                  {jobData?.job_is_remote ? "Remote" : jobData?.job_city}
                </span>
              </div>
            </div>

            <div className="employer-links">
              <Link
                href={
                  jobData && isValidUrl(jobData.job_apply_link)
                    ? jobData.job_apply_link
                    : "/"
                }
                target="_blank"
                className="apply_link"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="job-detail-layout">
          <div className="job-detail-description border-provider">
            <div>About Job -</div>
            <p
              dangerouslySetInnerHTML={{ __html: jobDescriptionWithBreaks! }}
            />
          </div>
          <div className="job-details-points border-provider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            omnis id aperiam doloribus, laborum nulla nobis obcaecati neque
            fugit dicta est quos minima dignissimos sunt, sit vero impedit qui
            consequuntur. Dolor minima voluptas, officia quisquam quia amet
            similique ratione consequuntur repudiandae quam molestiae dicta
            itaque quasi exercitationem explicabo odio incidunt tenetur
            provident? Nesciunt aperiam modi quia dolores libero enim
            voluptates! Vitae assumenda maxime accusamus cum nobis, odio itaque
            dignissimos totam eos placeat vero ratione aliquam minus fugiat
            veritatis aut dolorem exercitationem numquam illo delectus laborum
            dolore perspiciatis? Nemo, ipsum molestiae. Voluptates, natus qui,
            in dolores officiis exercitationem, quibusdam illum beatae tempora
            ut ipsa optio iusto laudantium? Quod debitis molestiae asperiores?
            Tempora perferendis voluptatem voluptates odio commodi adipisci hic
            eveniet consectetur?
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
