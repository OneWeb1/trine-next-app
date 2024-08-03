"use client";

import { ReactNode, useEffect } from "react";
import { redirect } from "next/navigation";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  if (typeof window !== "undefined") {
    if (!localStorage?.getItem("accessToken")) {
      redirect("/auth/login");
    }

    if (!localStorage?.getItem("accessToken")) {
      return null;
    }
  }

  return <>{children}</>;
};

export default PrivateRoute;
