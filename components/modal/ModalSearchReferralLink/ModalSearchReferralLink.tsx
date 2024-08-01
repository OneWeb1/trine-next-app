"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalSearchReferralLink.module.scss";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalSearchReferralLink = () => {
  const [linkName, setLinkName] = useState<string>("");

  return (
    <Modal title="Пошук посилання">
      <div className={styles.boxContainer}>
        <MainInput
          placeholder="Назва посилання"
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalSearchReferralLink;
