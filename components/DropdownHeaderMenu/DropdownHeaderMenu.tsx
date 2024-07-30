"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import styles from "./DropdownHeaderMenu.module.scss";

import useModalsStore from "../modal/store";
import Link from "next/link";

type DropdownHeaderMenuProps = {
  close: () => void;
};

const DropdownHeaderMenu: FC<DropdownHeaderMenuProps> = ({ close }) => {
  const modalsStore = useModalsStore((state) => state);
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

  const showModalConfirm = () => {
    closeMenu();
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
                <Image
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
                <Image
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
              <Image
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
              <Image
                className={styles.avatar}
                src="/assets/home/settings.svg"
                alt="settings"
                width={20}
                height={20}
              />
              Налаштування
            </div>
            <div className={styles.dropdownMenuItem} onClick={showModalConfirm}>
              <Image
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
