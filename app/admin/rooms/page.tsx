"use client";

import React, { useEffect } from "react";
import styles from "./../page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import useAdminStore from "../store";
import RoomsView from "@/components/RoomsView/RoomsView";

const Rooms = () => {
  const adminStore = useAdminStore((state) => state);

  useEffect(() => {
    adminStore.setCurrentPage("rooms");
  }, []);

  return (
    <div className={styles.admin}>
      <div className={styles.screen}>
        <div className={styles.background}></div>
        <div className={styles.main}>
          <HeaderAdmin />
          <AdminNavigation title="Кімнати">
            <AdminNavigationButton src="/assets/admin/nav/search.svg" />
            <AdminNavigationButton src="/assets/admin/nav/plus.svg" />
          </AdminNavigation>
          <RoomsView />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
