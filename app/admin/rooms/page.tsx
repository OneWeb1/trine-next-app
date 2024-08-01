"use client";

import React, { useEffect } from "react";
import styles from "./../page.module.scss";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import AdminNavigation, {
  AdminNavigationButton,
} from "@/components/AdminNavigation/AdminNavigation";
import useModalsStore from "@/components/modal/store";
import useAdminStore from "../store";
import RoomsView from "@/components/RoomsView/RoomsView";
import ModalsView from "@/components/ModalsView/ModalsView";

const Rooms = () => {
  const adminStore = useAdminStore((state) => state);
  const modalsStore = useModalsStore((state) => state);

  const showModalCreateRoom = () => {
    modalsStore.addOpenModal({ name: "ModalCreateRoom" });
  };

  const showModalRoomSetting = () => {
    modalsStore.addOpenModal({ name: "ModalRoomSetting" });
  };

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
            <AdminNavigationButton
              src="/assets/admin/nav/plus.svg"
              onClick={showModalCreateRoom}
            />
          </AdminNavigation>
          <RoomsView roomClick={showModalRoomSetting} />
          <ModalsView />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
