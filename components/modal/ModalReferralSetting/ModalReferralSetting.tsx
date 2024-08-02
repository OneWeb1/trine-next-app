import React from "react";
import Modal from "../Modal";

import styles from "./ModalReferralSetting.module.scss";
import SwitchBox from "../components/SwitchBox/SwitchBox";
import NextBox from "../components/NextBox/NextBox";

import useModalsStore from "../store";

const ModalReferralSetting = () => {
  const modalsStore = useModalsStore((state) => state);

  const showModalViewRoomStats = () => {
    modalsStore.addOpenModal({ name: "ModalCreateReferralLink" });
  };

  const showModalConfirm = () => {
    modalsStore.setConfirmText("Підтвердити видалення реферального посилання?");
    modalsStore.addOpenModal({ name: "ModalConfirm" });
  };

  return (
    <Modal title="Меню">
      <div className={styles.boxContainer}>
        <NextBox option="Реферальне посилання" />
        <NextBox option="Посилання до файлу" />
        <NextBox
          option="Редагувати посилання"
          onClick={showModalViewRoomStats}
        />
        <NextBox option="Видалити посилання" onClick={showModalConfirm} />
      </div>
    </Modal>
  );
};

export default ModalReferralSetting;
