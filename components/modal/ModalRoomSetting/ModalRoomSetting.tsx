import React from "react";
import Modal from "../Modal";

import styles from "./ModalRoomSetting.module.scss";
import SwitchBox from "../components/SwitchBox/SwitchBox";
import NextBox from "../components/NextBox/NextBox";

import useModalsStore from "../store";

const ModalRoomSetting = () => {
  const modalsStore = useModalsStore((state) => state);

  const showModalChangeAvatar = () => {
    modalsStore.addOpenModal({ name: "ModalChangeAvatar" });
  };

  const showModalChangeName = () => {
    modalsStore.addOpenModal({ name: "ModalChangeName" });
  };

  const showModalChangePassword = () => {
    modalsStore.addOpenModal({ name: "ModalChangePassword" });
  };

  const showModalConfirm = () => {
    modalsStore.setConfirmText("Підтвердити вихід з облікового запису?");
    modalsStore.addOpenModal({ name: "ModalConfirm" });
  };

  return (
    <Modal title="Налаштування">
      <div className={styles.boxContainer}>
        <NextBox option="Статистика" onClick={showModalChangeName} />
        <NextBox option="Видалити кімнату" onClick={showModalChangePassword} />
      </div>
    </Modal>
  );
};

export default ModalRoomSetting;
