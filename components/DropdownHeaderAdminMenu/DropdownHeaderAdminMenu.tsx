"use client";

import React, { FC, useState } from "react";

import styles from "./DropdownHeaderAdminMenu.module.scss";
import clsx from "clsx";

import useModalsStore from "../modal/store";
import Link from "next/link";
import useAdminStore from "@/app/admin/store";
import CustomImage from "../ui/images/CustomImage/CustomImage";

type DropdownHeaderAdminMenuProps = {
  close: () => void;
};

const DropdownHeaderAdminMenu: FC<DropdownHeaderAdminMenuProps> = ({
  close,
}) => {
  const modalsStore = useModalsStore((state) => state);
  const { currentPage } = useAdminStore((state) => state);
  const [isClose, setIsClose] = useState<boolean>(false);

  const closeMenu = () => {
    setIsClose(true);

    setTimeout(() => {
      close();
    }, 60);
  };

  const showModalTransferManager = () => {
    closeMenu();
    modalsStore.addOpenModal({ name: "ModalChangeTransferManager" });
  };

  return (
    <>
      <div
        className={`${styles.overflowWrapper} ${isClose ? styles.hide : ""}`}
      >
        <div className={styles.dropdownMenu}>
          <div className={styles.menu}>
            <Link href="/admin/accounts">
              <div
                className={clsx(
                  styles.dropdownMenuItem,
                  currentPage === "accounts" ? styles.active : ""
                )}
                onClick={closeMenu}
              >
                <CustomImage
                  className={styles.avatar}
                  src="/assets/admin/dropdown/account-settings.svg"
                  alt="admin"
                  width={20}
                  height={20}
                />
                Облікові записи
              </div>
            </Link>

            <Link href="/admin/rooms">
              <div
                className={clsx(
                  styles.dropdownMenuItem,
                  currentPage === "rooms" ? styles.active : ""
                )}
              >
                <CustomImage
                  className={styles.avatar}
                  src="/assets/admin/dropdown/workshop.svg"
                  alt="admin"
                  width={20}
                  height={20}
                />
                Кімнати
              </div>
            </Link>
            <Link href="/admin/referrals">
              <div
                className={clsx(
                  styles.dropdownMenuItem,
                  currentPage === "referrals" ? styles.active : ""
                )}
              >
                <CustomImage
                  className={styles.avatar}
                  src="/assets/admin/dropdown/refer.svg"
                  alt="admin"
                  width={20}
                  height={20}
                />
                Рефералки
              </div>
            </Link>
            <div
              className={styles.dropdownMenuItem}
              onClick={showModalTransferManager}
            >
              <CustomImage
                className={styles.avatar}
                src="/assets/admin/dropdown/digital-payment.svg"
                alt="admin"
                width={20}
                height={20}
              />
              Перекази
            </div>
            <Link href="/admin/wheel-fortune">
              <div
                className={clsx(
                  styles.dropdownMenuItem,
                  currentPage === "wheel-fortune" ? styles.active : ""
                )}
              >
                <CustomImage
                  className={styles.avatar}
                  src="/assets/admin/dropdown/wheel-of-fortune.svg"
                  alt="admin"
                  width={20}
                  height={20}
                />
                Колесо фортуни
              </div>
            </Link>

            <Link href="/">
              <div className={styles.dropdownMenuItem}>
                <CustomImage
                  className={styles.avatar}
                  src="/assets/admin/dropdown/home.svg"
                  alt="out"
                  width={20}
                  height={20}
                />
                На головну
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.menuWrapper} onClick={closeMenu}></div>
    </>
  );
};

export default DropdownHeaderAdminMenu;
