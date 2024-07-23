"use client";

import React, { ForwardedRef, MouseEvent, RefObject, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import DropdownHeaderMenu from "../DropdownHeaderMenu/DropdownHeaderMenu";

import useModalsStore from "../modal/store";

const Header = () => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState<boolean>(false);

  const modalsStore = useModalsStore((state) => state);

  const openModalBalanceReplenishment = () => {
    modalsStore.addOpenModal({
      name: "ModalBalanceReplenishment",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftWrapper}>
        <Image
          src={"/assets/home/logo.svg"}
          alt="logo"
          width={100}
          height={24}
        />
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.moneyWrapper}>
          <Image
            src="/assets/home/money.svg"
            alt="money"
            width={20}
            height={20}
          />
          <div className={styles.money}>4455</div>
          <button
            className={styles.buttonAdd}
            onClick={openModalBalanceReplenishment}
          >
            <Image
              src="/assets/home/plus.svg"
              alt="plus"
              width={16}
              height={16}
            />
          </button>
        </div>
        <div
          className={styles.dropdown}
          onClick={() => !isOpenDropdownMenu && setIsOpenDropdownMenu(true)}
        >
          <Image
            className={styles.avatar}
            src="/assets/home/avatar.svg"
            alt="avatar"
            width={22}
            height={22}
          />
          <Image
            className={`${styles.arrow} ${
              isOpenDropdownMenu ? styles.rotateStart : styles.rotateEnd
            }`}
            src="/assets/home/arrow-down.svg"
            alt="arrow"
            width={6.72}
            height={4}
          />
          {isOpenDropdownMenu && (
            <DropdownHeaderMenu close={() => setIsOpenDropdownMenu(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
