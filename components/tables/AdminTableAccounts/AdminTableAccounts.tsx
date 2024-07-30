"use client";

import React, { FC, useState } from "react";
import styles from "./AdminTableAccounts.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Pagination from "../../Pagination/Pagination";

type TableRowItemProps = {
  id: number;
  balance: string;
};

const TableRowItem: FC<TableRowItemProps> = ({ id, balance }) => {
  return (
    <tr className={styles.tableRowItem}>
      <tr className={styles.tableRowChildLeft}>
        <td className={styles.idx}>{id}</td>
        <td className={styles.accountWrapper}>
          <Image
            className={styles.avatar}
            src="/assets/home/avatar.svg"
            alt="avatar"
            width={24}
            height={24}
          />
          <div className={styles.accountInfo}>
            <div className={styles.name}>Vladislav</div>
            <div className={styles.email}>my.info.account@gmail.com</div>
          </div>
        </td>
      </tr>
      <tr className={styles.tableRowChildRight}>
        <td>
          <Image
            style={{ marginRight: "3px" }}
            src="/assets/home/money.svg"
            alt="image"
            width={12}
            height={12}
          />{" "}
          <span className={styles.money}>{balance}</span>
        </td>
      </tr>
    </tr>
  );
};

const AdminTableAccounts = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.idx}>#</th>
          <th>Ім'я</th>
        </tr>
        <tr>
          <th className={clsx(styles.textRight)}>Баланс</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((_, idx) => (
          <TableRowItem
            key={idx}
            id={idx + 1}
            balance={((idx + 1) * Math.random() * 200).toFixed(0)}
          />
        ))}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={305}
          pageSize={8}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </tbody>
    </table>
  );
};

export default AdminTableAccounts;
