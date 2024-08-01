"use client";

import React, { useState } from "react";
import styles from "./ModalChangeTransferManager.module.scss";
import Modal from "../Modal";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalChangeTransferManager = () => {
  const [link, setLink] = useState<string>("");

  return (
    <Modal
      title="Перекази"
      isButtonsGroup={true}
      buttonValues={["Зберегти", "Відмінити"]}
    >
      <div className={styles.boxContainer}>
        <MainInput
          placeholder="Посилання на менеджера"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalChangeTransferManager;
