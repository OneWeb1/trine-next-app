"use client";

import React, { useEffect, useState } from "react";
import Modal from "../Modal";

import styles from "./ModalAccountChangeBalance.module.scss";

import useModalsStore from "../store";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";

import Balance from "../components/Balance/Balance";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";
import useAccountsStore from "@/app/store/admin/AccountsStore";

const ModalAccountChangeBalance = () => {
  const modalsStore = useModalsStore((state) => state);
  const { menuAccount, changeBalance } = useAccountsStore((state) => state);
  const [balanceValue, setBalanceValue] = useState<string>("");

  const changeBalanceHandler = () => {
    changeBalance(menuAccount.id, balanceValue);
  };

  return (
    <Modal
      title="Змінити баланс"
      isButtonsGroup={true}
      buttonValues={["Змінити", "Відмінити"]}
      handlers={[changeBalanceHandler]}
    >
      <div className={styles.boxContainer}>
        <BeetwenBox
          option="Поточний баланс"
          value={<Balance value={menuAccount.balance} />}
        />
        <MainInput
          type="string"
          value={String(balanceValue)}
          placeholder="Сума для зміни балансу"
          onChange={(e) => setBalanceValue(e.target.value)}
        />
        <div className={styles.text}>
          Для того щоб поповнити баланс, введіть + та суму більшу за нуль
        </div>
        <div className={styles.text}>
          Для того щоб зняти кошти з балансу, введіть суму мееншу за нуль
        </div>
      </div>
    </Modal>
  );
};

export default ModalAccountChangeBalance;
