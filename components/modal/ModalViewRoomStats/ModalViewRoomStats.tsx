"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalViewRoomStats.module.scss";
import BeetwenBox from "../components/BeetwenBox/BeetwenBox";

const ModalViewRoomStats = () => {
  return (
    <Modal title="Статистика кімнати">
      <div className={styles.boxContainer}>
        <BeetwenBox
          option="Ім`я"
          value="f43dfd4h-sd3g-hr3k-w2ha-dkjj439saf6d"
        />
        <BeetwenBox option="Кількість зіграних раундів" value="335" />
        <BeetwenBox option="Максимальний банк" value="4680" />
        <BeetwenBox option="Сума банку всіх раундів" value="1373874" />
      </div>
    </Modal>
  );
};

export default ModalViewRoomStats;
