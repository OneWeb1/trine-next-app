"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "./AdminTableAccounts.module.scss";
import clsx from "clsx";

import Pagination from "../../Pagination/Pagination";

import useModalsStore from "@/components/modal/store";
import CustomImage from "@/components/ui/images/CustomImage/CustomImage";
import useAccountsStore from "@/app/store/admin/AccountsStore";
import { AdminAccountResponse } from "@/models/response/admin/AccountsResponse";
import { CirclesWithBar } from "react-loader-spinner";
import { profile } from "console";

type AdminTableAccountsProps = {
  onClick?: () => void;
};

type TableRowItemProps = {
  account: AdminAccountResponse;
  onClick: () => void;
};

const TableRowItem: FC<TableRowItemProps> = ({ account, onClick }) => {
  const modalsStore = useModalsStore();

  const showModalAccountSetting = () => {
    onClick();
    modalsStore.addOpenModal({ name: "ModalAccountSetting" });
  };

  return (
    <div className={styles.tableRowItem} onClick={showModalAccountSetting}>
      <div className={styles.tableRowChildLeft}>
        <div className={styles.idx}>{account?.id}</div>
        <div className={styles.accountWrapper}>
          <CustomImage
            className={styles.avatar}
            src={`https://trine-game.online/avatar/${
              account?.avatar_id ? account?.avatar_id : 0
            }`}
            alt="avatar"
            width={24}
            height={24}
          />
          <div className={styles.accountInfo}>
            <div className={styles.name}>{account?.nickname}</div>
            <div className={styles.email}>{account?.email}</div>
          </div>
        </div>
      </div>
      <div className={styles.tableRowChildRight}>
        <div>
          <CustomImage
            style={{ marginRight: "3px" }}
            src="/assets/home/money.svg"
            alt="image"
            width={12}
            height={12}
          />{" "}
          <span className={styles.money}>{account?.balance}</span>
        </div>
      </div>
    </div>
  );
};

const AdminTableAccounts: FC<AdminTableAccountsProps> = ({ onClick }) => {
  const {
    accounts,
    accountsNumber,
    loading,
    limit,
    setMenuAccount,
    getAccounts,
  } = useAccountsStore();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(localStorage.getItem("accounts-page")) || 1
  );

  useEffect(() => {
    getAccounts(currentPage * limit - limit, limit);
  }, [currentPage, limit, getAccounts]);

  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <div style={{ display: "flex" }}>
          <div className={styles.idx}>#</div>
          <div className={styles.name}>Ім`я</div>
        </div>
        <div>
          <div className={clsx(styles.textRight)}>Баланс</div>
        </div>
      </div>
      <div className={styles.tbody}>
        {loading && (
          <div
            style={{
              width: "100%",
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CirclesWithBar
              height="60"
              width="60"
              color="#4fa94d"
              outerCircleColor="#4fa94d"
              innerCircleColor="#4fa94d"
              barColor="#4fa94d"
              ariaLabel="circles-with-bar-loading"
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {!loading &&
          accounts?.map((account, idx) => (
            <TableRowItem
              key={account.id}
              account={account}
              onClick={() => setMenuAccount(account)}
            />
          ))}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={accountsNumber}
          pageSize={15}
          onPageChange={(page) => {
            if (typeof window !== "undefined")
              localStorage.setItem("accounts-page", String(page));
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default AdminTableAccounts;
