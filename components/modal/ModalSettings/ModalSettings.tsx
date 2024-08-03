import React from "react";
import Modal from "../Modal";

import styles from "./ModalSettings.module.scss";
import SwitchBox from "../components/SwitchBox/SwitchBox";
import NextBox from "../components/NextBox/NextBox";

import useModalsStore from "../store";
import useAuthStore from "@/components/auth/store";

const ModalSettings = () => {
  const modalsStore = useModalsStore((state) => state);
  const authStore = useAuthStore((state) => state);

  const showModalChangeAvatar = () => {
    modalsStore.addOpenModal({ name: "ModalChangeAvatar" });
  };

  const showModalChangeName = () => {
    modalsStore.addOpenModal({ name: "ModalChangeName" });
  };

  const showModalChangePassword = () => {
    modalsStore.addOpenModal({ name: "ModalChangePassword" });
  };

  const logout = () => {
    authStore.logout();
    window.location.href = "/auth/login";
  };

  const showModalConfirm = () => {
    modalsStore.setConfirmText("Підтвердити вихід з облікового запису?");
    modalsStore.setConfirmHandlers([logout]);

    modalsStore.addOpenModal({ name: "ModalConfirm" });
  };

  return (
    <Modal title="Налаштування">
      <div className={styles.boxContainer}>
        <SwitchBox option="Налаштування музики" value={true} />
        <SwitchBox option="Налаштування звуку" value={true} />
        <NextBox option="Змінити аватарку" onClick={showModalChangeAvatar} />
        <NextBox option="Змінити ім'я" onClick={showModalChangeName} />
        <NextBox option="Змінити пароль" onClick={showModalChangePassword} />
        <NextBox
          option="Вийти з облікового запису"
          onClick={showModalConfirm}
        />
      </div>
    </Modal>
  );
};

export default ModalSettings;
