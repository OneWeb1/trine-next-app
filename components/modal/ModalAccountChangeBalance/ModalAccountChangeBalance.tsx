"use client";

import React, { useState } from "react";
import Modal from "../Modal";

import styles from "./ModalAccountChangeBalance.module.scss";

import useModalsStore from "../store";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";
import Image from "next/image";
import Balance from "../components/Balance/Balance";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalAccountChangeBalance = () => {
  const modalsStore = useModalsStore((state) => state);
  const [balanceValue, setBalanceValue] = useState<string>();

  return (
    <Modal
      title="Змінити баланс"
      isButtonsGroup={true}
      buttonValues={["Змінити", "Відмінити"]}
    >
      <div className={styles.boxContainer}>
        <BeetwenBox option="Поточний баланс" value={<Balance value={644} />} />
        <MainInput
          type="number"
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
