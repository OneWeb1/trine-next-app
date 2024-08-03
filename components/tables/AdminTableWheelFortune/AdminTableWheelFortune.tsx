"use client";

import React, { FC, useState } from "react";
import styles from "./AdminTableWheelFortune.module.scss";
import clsx from "clsx";

import Pagination from "../../Pagination/Pagination";
import CustomImage from "@/components/ui/images/CustomImage/CustomImage";

type TableRowItemProps = {
  id: number;
  balance: string;
};

const MoneyWrapper = ({ number }: { number: number }) => {
  return (
    <>
      <CustomImage
        style={{ marginRight: "1px" }}
        src="/assets/home/money.svg"
        alt="image"
        width={10}
        height={10}
      />{" "}
      <span className={styles.money}>{number}</span>
    </>
  );
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
          <th className={clsx(styles.item)}>
            <MoneyWrapper number={100} />
          </th>
          <th style={{ maxWidth: "15px" }} className={clsx(styles.item)}>
            2x
          </th>
          <th className={clsx(styles.item)}>
            <MoneyWrapper number={800} />
          </th>
          <th className={clsx(styles.item)}>
            <MoneyWrapper number={1200} />
          </th>
          <th className={clsx(styles.item, styles.textRight)}>
            <MoneyWrapper number={1600} />
          </th>
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
          <th className={clsx(styles.item)}>Ставка</th>
          <th style={{ maxWidth: "15px" }} className={clsx(styles.item)}>
            Х
          </th>
          <th className={clsx(styles.item)}>Приз</th>
          <th className={clsx(styles.item)}>ПБ</th>
          <th className={clsx(styles.item, styles.textRight)}>Баланс</th>
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
