"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalSearchFortuneHistoryById.module.scss";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalSearchFortuneHistoryById = () => {
  const [id, setId] = useState<number>();

  return (
    <Modal title="Історія прокрутів">
      <div className={styles.boxContainer}>
        <MainInput
          type="number"
          placeholder="ID гравця"
          value={String(id)}
          onChange={(e) => setId(Number(e.target.value))}
        />
      </div>
    </Modal>
  );
};

export default ModalSearchFortuneHistoryById;
