"use client";

import React, {
  ForwardedRef,
  MouseEvent,
  RefObject,
  useEffect,
  useState,
} from "react";
import styles from "./Header.module.scss";
import useUserStore from "@/app/store/userStore";

import DropdownHeaderMenu from "../DropdownHeaderMenu/DropdownHeaderMenu";

import useModalsStore from "../modal/store";
import CustomImage from "../ui/images/CustomImage/CustomImage";

const Header = () => {
  const modalsStore = useModalsStore((state) => state);
  const userStore = useUserStore((state) => state);

  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState<boolean>(false);

  const openModalBalanceReplenishment = () => {
    modalsStore.addOpenModal({
      name: "ModalBalanceReplenishment",
    });
  };

  useEffect(() => {
    userStore.getUser();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.leftWrapper}>
        <CustomImage
          src={"/assets/home/logo.svg"}
          alt="logo"
          width={100}
          height={24}
        />
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.moneyWrapper}>
          <CustomImage
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
            <CustomImage
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
          <CustomImage
            className={styles.avatar}
            src="/assets/home/avatar.svg"
            alt="avatar"
            width={22}
            height={22}
          />
          <CustomImage
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
