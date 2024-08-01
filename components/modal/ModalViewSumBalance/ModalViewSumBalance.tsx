"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalViewSumBalance.module.scss";

const ModalViewSumBalance = () => {
  return (
    <Modal title="Сума балансів">
      <div className={styles.boxContainer}>ModalViewSumBalance</div>
    </Modal>
  );
};

export default ModalViewSumBalance;
