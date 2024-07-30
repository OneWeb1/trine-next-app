"use client";

import React, { FC, useState } from "react";
import styles from "./AdminTableWheelFortune.module.scss";
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
        <td className={styles.accountWrapper}>
          <div className={styles.name}>Vladislav</div>
        </td>
      </tr>
      <tr className={styles.tableRowChildRight}>
        <td>
          <span className={styles.money}>@bodya</span>
        </td>
      </tr>
    </tr>
  );
};

const AdminTableWheelFortune = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Ім`я</th>
        </tr>
        <tr className={styles.right}>
          <th className={clsx(styles.bet)}>Ставка</th>
          <th className={clsx(styles.x)}>Х</th>
          <th className={clsx(styles.prize)}>Приз</th>
          <th className={clsx(styles.prevBalance)}>ПБ</th>
          <th className={clsx(styles.balance, styles.textRight)}>Баланс</th>
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

export default AdminTableWheelFortune;
