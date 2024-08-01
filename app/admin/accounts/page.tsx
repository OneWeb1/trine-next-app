"use client";

import React, { useEffect, useState } from "react";
import styles from "./../page.module.scss";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import useAdminStore from "../store";
import useModalsStore from "@/components/modal/store";
import AdminTable from "@/components/tables/AdminTableAccounts/AdminTableAccounts";
import AdminTableAccounts from "@/components/tables/AdminTableAccounts/AdminTableAccounts";
import ModalsView from "@/components/ModalsView/ModalsView";
// import Pagination from "@/components/Pagination/Pagination";

const Accounts = () => {
  const adminStore = useAdminStore((state) => state);
  const modalsStore = useModalsStore((state) => state);

  const showModalViewBalance = () => {
    modalsStore.addOpenModal({ name: "ModalViewSumBalance" });
  };

  const showModalSearchAccountById = () => {
    modalsStore.addOpenModal({ name: "ModalSearchAccountById" });
  };

  const showModalAccountSetting = () => {
    modalsStore.addOpenModal({ name: "ModalAccountSetting" });
  };

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
            <AdminNavigationButton
              src="/assets/admin/nav/search.svg"
              onClick={showModalSearchAccountById}
            />
            <AdminNavigationButton
              src="/assets/admin/nav/wallet.svg"
              onClick={showModalViewBalance}
            />
          </AdminNavigation>
          <AdminTableAccounts onClick={showModalAccountSetting} />
          <ModalsView />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
