"use client";

import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import styles from "./ModalViewAccountStats.module.scss";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";
import useAccountsStore from "@/app/store/admin/AccountsStore";

const ModalViewAccountStats = () => {
  const { menuAccount, accountStats, getAccountStats } = useAccountsStore(
    (state) => state
  );

  useEffect(() => {
    getAccountStats(menuAccount.id);
  }, [menuAccount, getAccountStats]);

  return (
    <Modal title="Статистика гравця">
      <div className={styles.boxContainer}>
        <BeetwenBox option="Ім`я" value={menuAccount.nickname} />
        <BeetwenBox
          option="Кількість зіграних раундів"
          value={accountStats.won_times + accountStats.defeat_times}
        />
        <BeetwenBox
          option="Кількість виграних раундів"
          value={accountStats.won_times}
        />
        <BeetwenBox
          option="Кількість програних раундів"
          value={accountStats.defeat_times}
        />
      </div>
    </Modal>
  );
};

export default ModalViewAccountStats;
