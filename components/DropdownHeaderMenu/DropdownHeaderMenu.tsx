"use client";

import React, { FC, useState } from "react";

import styles from "./DropdownHeaderMenu.module.scss";

import useModalsStore from "../modal/store";
import useAuthStore from "../auth/store";
import Link from "next/link";
import CustomImage from "../ui/images/CustomImage/CustomImage";

type DropdownHeaderMenuProps = {
  close: () => void;
};

const DropdownHeaderMenu: FC<DropdownHeaderMenuProps> = ({ close }) => {
  const modalsStore = useModalsStore((state) => state);
  const authStore = useAuthStore((state) => state);
  const [isClose, setIsClose] = useState<boolean>(false);

  const closeMenu = () => {
    setIsClose(true);

    setTimeout(() => {
      close();
    }, 60);
  };

  const showModalWithDrawalBalance = () => {
    closeMenu();
    modalsStore.addOpenModal({ name: "ModalWithDrawalBalance" });
  };

  const showModalSettings = () => {
    closeMenu();
    modalsStore.addOpenModal({ name: "ModalSettings" });
  };

  const logout = () => {
    authStore.logout();
    window.location.href = "/auth/login";
  };

  const showModalConfirm = () => {
    closeMenu();
    modalsStore.setConfirmText("Підтвердити вихід з облікового запису?");
    modalsStore.setConfirmHandlers([logout]);
    modalsStore.addOpenModal({ name: "ModalConfirm" });
  };

  return (
    <>
      <div
        className={`${styles.overflowWrapper} ${isClose ? styles.hide : ""}`}
      >
        <div className={styles.dropdownMenu}>
          <div className={styles.menu}>
            <div className={styles.dropdownMenuProfile}>
              <div className={styles.wrapper}>
                <CustomImage
                  className={styles.avatar}
                  src="/assets/home/avatar.svg"
                  alt="avatar"
                  width={30}
                  height={30}
                />
                <div className={styles.profileInfo}>
                  <div className={styles.username}>Гравець45656</div>
                  <div className={styles.email}>test.email@gmail.com</div>
                </div>
              </div>
            </div>
            <Link href="/admin/accounts">
              <div className={styles.dropdownMenuItem}>
                <CustomImage
                  className={styles.avatar}
                  src="/assets/home/admin.svg"
                  alt="admin"
                  width={20}
                  height={20}
                />
                Адмін панель
              </div>
            </Link>

            <div
              className={styles.dropdownMenuItem}
              onClick={showModalWithDrawalBalance}
            >
              <CustomImage
                className={styles.avatar}
                src="/assets/home/payment.svg"
                alt="payment"
                width={20}
                height={20}
              />
              Виведення коштів
            </div>
            <div
              className={styles.dropdownMenuItem}
              onClick={showModalSettings}
            >
              <CustomImage
                className={styles.avatar}
                src="/assets/home/settings.svg"
                alt="settings"
                width={20}
                height={20}
              />
              Налаштування
            </div>
            <div className={styles.dropdownMenuItem} onClick={showModalConfirm}>
              <CustomImage
                className={styles.avatar}
                src="/assets/home/out.svg"
                alt="out"
                width={20}
                height={20}
              />
              Вийти
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menuWrapper} onClick={closeMenu}></div>
    </>
  );
};

export default DropdownHeaderMenu;
