import React from "react";
import Modal from "../Modal";

import styles from "./ModalRoomSetting.module.scss";
import SwitchBox from "../components/SwitchBox/SwitchBox";
import NextBox from "../components/NextBox/NextBox";

import useModalsStore from "../store";

const ModalRoomSetting = () => {
  const modalsStore = useModalsStore((state) => state);

  const showModalViewRoomStats = () => {
    modalsStore.addOpenModal({ name: "ModalViewRoomStats" });
  };

  const showModalConfirm = () => {
    modalsStore.setConfirmText("Підтвердити видалення кімнати?");
    modalsStore.addOpenModal({ name: "ModalConfirm" });
  };

  return (
    <Modal title="Меню">
      <div className={styles.boxContainer}>
        <NextBox option="Статистика" onClick={showModalViewRoomStats} />
        <NextBox option="Видалити кімнату" onClick={showModalConfirm} />
      </div>
    </Modal>
  );
};

export default ModalRoomSetting;
