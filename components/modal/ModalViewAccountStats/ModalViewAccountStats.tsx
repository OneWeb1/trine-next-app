"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalViewAccountStats.module.scss";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";

const ModalViewAccountStats = () => {
  return (
    <Modal title="Статистика гравця">
      <div className={styles.boxContainer}>
        <BeetwenBox option="Ім`я" value="Чина" />
        <BeetwenBox option="Кількість зіграних раундів" value="335" />
        <BeetwenBox option="Кількість виграних раундів" value="162" />
        <BeetwenBox option="Кількість програних раундів" value="169" />
      </div>
    </Modal>
  );
};

export default ModalViewAccountStats;
