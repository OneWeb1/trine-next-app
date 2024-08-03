"use client";

import { ReactNode, useEffect } from "react";
import { redirect } from "next/navigation";

const AuthentificatedRoute = ({ children }: { children: ReactNode }) => {
  if (localStorage?.getItem("accessToken")) {
    redirect("/");
  }

  if (localStorage?.getItem("accessToken")) {
    return null;
  }

  return <>{children}</>;
};

export default AuthentificatedRoute;
