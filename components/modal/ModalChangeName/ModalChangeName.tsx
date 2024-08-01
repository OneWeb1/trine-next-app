"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalChangeName.module.scss";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalChangeName = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <Modal
      title="Змінити ім'я"
      isButtonsGroup={true}
      buttonValues={["Зберегти", "Відмінити"]}
    >
      <div className={styles.boxContainer}>
        <MainInput
          placeholder="Змінити ім`я"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalChangeName;
