"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalViewFortuneStatsBalance.module.scss";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";

const ModalViewFortuneStatsBalance = () => {
  return (
    <Modal title="Статистика фортуни">
      <div className={styles.boxContainer}>
        <BeetwenBox option="Баланс для виграшів" value="54" />
        <BeetwenBox option="Баланс податків" value="7543" />
      </div>
    </Modal>
  );
};

export default ModalViewFortuneStatsBalance;
