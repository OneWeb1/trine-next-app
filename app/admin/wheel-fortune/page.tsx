"use client";

import React, { useEffect } from "react";
import styles from "./../page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import useAdminStore from "../store";
import AdminTableWheelFortune from "@/components/tables/AdminTableWheelFortune/AdminTableWheelFortune";
import ModalsView from "@/components/ModalsView/ModalsView";

const WheelFortune = () => {
  const adminStore = useAdminStore((state) => state);

  useEffect(() => {
    adminStore.setCurrentPage("wheel-fortune");
  }, []);

  return (
    <div className={styles.admin}>
      <div className={styles.screen}>
        <div className={styles.background}></div>
        <div className={styles.main}>
          <HeaderAdmin />
          <AdminNavigation title="Колесо фортуни">
            <AdminNavigationButton src="/assets/admin/nav/search.svg" />
            <AdminNavigationButton src="/assets/admin/nav/wallet.svg" />
          </AdminNavigation>
          <AdminTableWheelFortune />
          <ModalsView />
        </div>
      </div>
    </div>
  );
};

export default WheelFortune;
