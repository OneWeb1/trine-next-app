import React from "react";
import Modal from "../Modal";

import styles from "./ModalAccountSetting.module.scss";
import SwitchBox from "../components/SwitchBox/SwitchBox";
import NextBox from "../components/NextBox/NextBox";

import useModalsStore from "../store";

const ModalAccountSetting = () => {
  const modalsStore = useModalsStore((state) => state);

  const showModalAccountChangeBalance = () => {
    modalsStore.addOpenModal({ name: "ModalAccountChangeBalance" });
  };

  const showModalAccountStats = () => {
    modalsStore.addOpenModal({ name: "ModalViewAccountStats" });
  };

  const showModalConfirm = () => {
    modalsStore.setConfirmText("Підтвердити видалення облікового запису?");
    modalsStore.addOpenModal({ name: "ModalConfirm" });
  };

  return (
    <Modal title="Меню">
      <div className={styles.boxContainer}>
        <NextBox
          option="Змінити баланс"
          onClick={showModalAccountChangeBalance}
        />
        <NextBox option="Статистика" onClick={showModalAccountStats} />
        <NextBox option="Видалити обліковий запис" onClick={showModalConfirm} />
      </div>
    </Modal>
  );
};

export default ModalAccountSetting;
