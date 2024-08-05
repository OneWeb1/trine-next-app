"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./ModalChangeName.module.scss";
import MainInput from "@/components/ui/inputs/MainInput/MainInput";
import useUserStore from "@/app/store/userStore";

const ModalChangeName = () => {
  const { profile, changeNickname } = useUserStore((state) => state);
  const [username, setUsername] = useState<string>(profile?.nickname || "");
  const changeNicknameHandler = () => {
    changeNickname(username);
  };

  return (
    <Modal
      title="Змінити ім'я"
      isButtonsGroup={true}
      buttonValues={["Змінити", "Відмінити"]}
      handlers={[changeNicknameHandler]}
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
