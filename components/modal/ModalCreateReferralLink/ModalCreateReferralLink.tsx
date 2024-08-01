"use client";

import React, { useState } from "react";
import styles from "./ModalCreateReferralLink.module.scss";
import Modal from "../Modal";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalCreateReferralLink = () => {
  const [linkName, setLinkName] = useState<string>("");
  const [linkAdvertiser, setLinkAdvertiser] = useState<string>("");

  return (
    <Modal
      title="Реферальне посилання"
      isButtonsGroup={true}
      buttonValues={["Створити", "Відмінити"]}
    >
      <div className={styles.boxContainer}>
        <MainInput
          style={{ marginBottom: "15px" }}
          placeholder="Назва посилання"
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
        />
        <MainInput
          placeholder="Посилання на рекламодавця"
          value={linkAdvertiser}
          onChange={(e) => setLinkAdvertiser(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalCreateReferralLink;
