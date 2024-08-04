"use client";

import { ReactNode, useEffect } from "react";
import { redirect } from "next/navigation";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  // if (typeof window !== "undefined") {
  //   if (!localStorage?.getItem("isAdmin")) {
  //     redirect("/");
  //   }

  //   if (!localStorage?.getItem("isAdmin")) {
  //     return null;
  //   }
  // }

  return <>{children}</>;
};

export default AdminRoute;
