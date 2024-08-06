import React, { useEffect } from "react";
import Modal from "../Modal";

import styles from "./ModalAccountsBalance.module.scss";

import useModalsStore from "../store";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";

import Balance from "../components/Balance/Balance";
import useAccountsStore from "@/app/store/admin/AccountsStore";

const ModalRoomStats = () => {
  const modalsStore = useModalsStore((state) => state);
  const { loading, sumAllBalances, getSumAllBalances } = useAccountsStore(
    (state) => state
  );

  useEffect(() => {
    getSumAllBalances();
  }, [getSumAllBalances]);

  return (
    <Modal title="інформація">
      <div className={styles.boxContainer}>
        <BeetwenBox
          option="Сума балансів"
          value={<Balance value={sumAllBalances} />}
        />
      </div>
    </Modal>
  );
};

export default ModalRoomStats;
