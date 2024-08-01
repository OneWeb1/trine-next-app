"use client";

import React, { useEffect } from "react";
import styles from "./../page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import useAdminStore from "../store";
import useModalsStore from "@/components/modal/store";
import AdminTableWheelFortune from "@/components/tables/AdminTableWheelFortune/AdminTableWheelFortune";
import ModalsView from "@/components/ModalsView/ModalsView";

const WheelFortune = () => {
  const adminStore = useAdminStore((state) => state);
  const modalsStore = useModalsStore((state) => state);

  const showModalSearchFortuneHistoryById = () => {
    modalsStore.addOpenModal({ name: "ModalSearchFortuneHistoryById" });
  };

  const showModalViewFortuneStatsBalance = () => {
    modalsStore.addOpenModal({ name: "ModalViewFortuneStatsBalance" });
  };

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
            <AdminNavigationButton
              src="/assets/admin/nav/search.svg"
              onClick={showModalSearchFortuneHistoryById}
            />
            <AdminNavigationButton
              src="/assets/admin/nav/wallet.svg"
              onClick={showModalViewFortuneStatsBalance}
            />
          </AdminNavigation>
          <AdminTableWheelFortune />
          <ModalsView />
        </div>
      </div>
    </div>
  );
};

export default WheelFortune;
