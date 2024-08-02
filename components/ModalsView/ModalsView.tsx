"use client";

import React, { FC, ReactNode } from "react";

import useModalsStore from "../modal/store";

import {
  ModalBalanceReplenishment,
  ModalWithDrawalBalance,
  ModalSettings,
  ModalChangeAvatar,
  ModalChangeName,
  ModalChangePassword,
  ModalConfirm,
  ModalChangeTransferManager,
  ModalCreateRoom,
  ModalCreateReferralLink,
  ModalAccountsBalance,
  ModalSearchAccountById,
  ModalSearchReferralLink,
  ModalAccountSetting,
  ModalSearchFortuneHistoryById,
  ModalViewFortuneStatsBalance,
  ModalRoomSetting,
  ModalRoomStats,
  ModalViewAccountStats,
  ModalAccountChangeBalance,
  ModalViewRoomStats,
  ModalReferralSetting,
} from "./../modal";

const modals: { [key: string]: FC } = {
  ModalBalanceReplenishment,
  ModalWithDrawalBalance,
  ModalSettings,
  ModalChangeAvatar,
  ModalChangeName,
  ModalChangePassword,
  ModalConfirm,
  ModalChangeTransferManager,
  ModalCreateRoom,
  ModalCreateReferralLink,
  ModalAccountsBalance,
  ModalSearchAccountById,
  ModalSearchReferralLink,
  ModalAccountSetting,
  ModalSearchFortuneHistoryById,
  ModalViewFortuneStatsBalance,
  ModalRoomSetting,
  ModalRoomStats,
  ModalViewAccountStats,
  ModalAccountChangeBalance,
  ModalViewRoomStats,
  ModalReferralSetting,
};

const ModalsView = () => {
  const modalsStore = useModalsStore((state) => state);

  return (
    <>
      {modalsStore.openModals.map((openModal, idx) => {
        const Modal = modals[openModal.name];

        if (!Modal) return null;
        return <Modal key={idx} />;
      })}
    </>
  );
};

export default ModalsView;
