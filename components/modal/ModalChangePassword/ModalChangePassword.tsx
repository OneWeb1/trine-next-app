"use client";

import React, { useState } from "react";
import styles from "./ModalChangePassword.module.scss";
import Modal from "../Modal";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";

const ModalChangePassword = () => {
  const [currentPassword, setCurrrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  return (
    <Modal
      title="Змінити пароль"
      isButtonsGroup={true}
      buttonValues={["Зберегти", "Відмінити"]}
    >
      <div className={styles.boxContainer}>
        <MainInput
          style={{ marginBottom: "15px" }}
          placeholder="Поточний пароль"
          value={currentPassword}
          onChange={(e) => setCurrrentPassword(e.target.value)}
        />
        <MainInput
          style={{ marginBottom: "15px" }}
          placeholder="Новий пароль"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <MainInput
          placeholder="Повторіть новий пароль"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalChangePassword;
