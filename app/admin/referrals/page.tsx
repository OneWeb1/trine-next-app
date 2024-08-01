"use client";

import React, { useEffect } from "react";
import styles from "./../page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import useAdminStore from "../store";
import useModalsStore from "@/components/modal/store";
import AdminTableReferrals from "@/components/tables/AdminTableReferrals/AdminTableReferrals";
import ModalsView from "@/components/ModalsView/ModalsView";
import { ModalSearchReferralLink } from "@/components/modal";

const Referrals = () => {
  const adminStore = useAdminStore((state) => state);
  const modalsStore = useModalsStore((state) => state);

  const showModalCreateReferralLink = () => {
    modalsStore.addOpenModal({ name: "ModalCreateReferralLink" });
  };

  const showModalSearchReferallLink = () => {
    modalsStore.addOpenModal({ name: "ModalSearchReferralLink" });
  };

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
            <AdminNavigationButton
              src="/assets/admin/nav/search.svg"
              onClick={showModalSearchReferallLink}
            />
            <AdminNavigationButton
              src="/assets/admin/nav/plus.svg"
              onClick={showModalCreateReferralLink}
            />
            <AdminNavigationButton src="/assets/admin/nav/file-download.svg" />
          </AdminNavigation>
          <AdminTableReferrals />
          <ModalsView />
        </div>
      </div>
    </div>
  );
};

export default Referrals;
