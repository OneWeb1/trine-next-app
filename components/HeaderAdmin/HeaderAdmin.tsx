"use client";

import React, { ForwardedRef, MouseEvent, RefObject, useState } from "react";
import styles from "./HeaderAdmin.module.scss";

import DropdownHeaderMenu from "../DropdownHeaderMenu/DropdownHeaderMenu";

import useModalsStore from "../modal/store";
import DropdownHeaderAdminMenu from "../DropdownHeaderAdminMenu/DropdownHeaderAdminMenu";
import CustomImage from "../ui/images/CustomImage/CustomImage";

const HeaderAdmin = () => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState<boolean>(false);

  const modalsStore = useModalsStore((state) => state);

  const openModalBalanceReplenishment = () => {
    modalsStore.addOpenModal({
      name: "ModalBalanceReplenishment",
    });
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.burger}
        onClick={() => !isOpenDropdownMenu && setIsOpenDropdownMenu(true)}
      >
        <CustomImage
          src={"/assets/admin/burger.svg"}
          alt="logo"
          width={16}
          height={16}
        />
        {isOpenDropdownMenu && (
          <DropdownHeaderAdminMenu close={() => setIsOpenDropdownMenu(false)} />
        )}
      </div>
      <div className={styles.pageName}>Адмін панель</div>
      <div className={styles.logo}>
        <CustomImage
          src={"/assets/admin/logo.svg"}
          alt="logo"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

export default HeaderAdmin;
