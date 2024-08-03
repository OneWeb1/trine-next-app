import React from "react";
import Modal from "../Modal";

import styles from "./ModalAccountsBalance.module.scss";

import useModalsStore from "../store";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";

import Balance from "../components/Balance/Balance";

const ModalRoomStats = () => {
  const modalsStore = useModalsStore((state) => state);

  return (
    <Modal title="інформація">
      <div className={styles.boxContainer}>
        <BeetwenBox option="Сума балансів" value={<Balance value={564} />} />
      </div>
    </Modal>
  );
};

export default ModalRoomStats;
