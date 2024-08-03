"use client";

import { ReactNode, useEffect } from "react";
import { redirect } from "next/navigation";
import useAuthStore from "@/components/auth/store";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  if (!localStorage?.getItem("accessToken")) {
    redirect("/auth/login");
  }

  if (!localStorage?.getItem("accessToken")) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
