"use client";

import React, { useEffect, useState } from "react";
import styles from "./../page.module.scss";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import useAdminStore from "../store";
import AdminTable from "@/components/tables/AdminTableAccounts/AdminTableAccounts";
import AdminTableAccounts from "@/components/tables/AdminTableAccounts/AdminTableAccounts";
// import Pagination from "@/components/Pagination/Pagination";

const Accounts = () => {
  const adminStore = useAdminStore((state) => state);
  // const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    adminStore.setCurrentPage("accounts");
  }, []);

  return (
    <div className={styles.admin}>
      <div className={styles.screen}>
        <div className={styles.background}></div>
        <div className={styles.main}>
          <HeaderAdmin />
          <AdminNavigation title="Облікові записи">
            <AdminNavigationButton src="/assets/admin/nav/search.svg" />
            <AdminNavigationButton src="/assets/admin/nav/wallet.svg" />
          </AdminNavigation>
          <AdminTableAccounts />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
