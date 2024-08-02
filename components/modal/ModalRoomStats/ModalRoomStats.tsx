import React from "react";
import Modal from "../Modal";

import styles from "./ModalRoomStats.module.scss";
import SwitchBox from "../components/SwitchBox/SwitchBox";
import NextBox from "../components/NextBox/NextBox";

import useModalsStore from "../store";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";

const ModalRoomStats = () => {
  const modalsStore = useModalsStore((state) => state);

  return (
    <Modal title="Статистика">
      <div className={styles.boxContainer}>
        <BeetwenBox option="Активних кімнат" value="7" />
        <BeetwenBox option="Всі кімнати" value="7" />
      </div>
    </Modal>
  );
};

export default ModalRoomStats;
