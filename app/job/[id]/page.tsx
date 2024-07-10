import { Router } from "next/router";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>JOb id is - {id}</div>;
};

export default page;
