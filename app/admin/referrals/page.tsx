"use client";

import React, { useEffect } from "react";
import styles from "./../page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import useAdminStore from "../store";
import AdminTableReferrals from "@/components/tables/AdminTableReferrals/AdminTableReferrals";

const Referrals = () => {
  const adminStore = useAdminStore((state) => state);

  useEffect(() => {
    adminStore.setCurrentPage("referrals");
  }, []);

  return (
    <div className={styles.admin}>
      <div className={styles.screen}>
        <div className={styles.background}></div>
        <div className={styles.main}>
          <HeaderAdmin />
          <AdminNavigation title="Рефералки">
            <AdminNavigationButton src="/assets/admin/nav/search.svg" />
            <AdminNavigationButton src="/assets/admin/nav/plus.svg" />
            <AdminNavigationButton src="/assets/admin/nav/file-download.svg" />
          </AdminNavigation>
          <AdminTableReferrals />
        </div>
      </div>
    </div>
  );
};

export default Referrals;
