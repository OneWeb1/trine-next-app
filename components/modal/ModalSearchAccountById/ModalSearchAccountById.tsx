"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalSearchAccountById.module.scss";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalSearchAccountById = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <Modal title="Пошук гравця">
      <div className={styles.boxContainer}>
        <MainInput
          placeholder="ID гравця"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalSearchAccountById;
