"use client";

import React, { FC, useState } from "react";
import styles from "./AdminTableReferrals.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Pagination from "../../Pagination/Pagination";

import useModalsStore from "@/components/modal/store";

type TableRowItemProps = {
  id: number;
  balance: string;
};

const TableRowItem: FC<TableRowItemProps> = ({ id, balance }) => {
  const modalsStore = useModalsStore((state) => state);

  const showModalReferallSetting = () => {
    modalsStore.addOpenModal({ name: "ModalReferralSetting" });
  };

  return (
    <tr className={styles.tableRowItem} onClick={showModalReferallSetting}>
      <tr className={styles.tableRowChildLeft}>
        <td className={styles.idx}>{id}</td>
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

const AdminTableReferrals = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.idx}>#</th>
          <th>Ім`я</th>
        </tr>
        <tr>
          <th className={clsx(styles.textRight)}>Зв`язок</th>
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
          totalCount={50}
          pageSize={8}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </tbody>
    </table>
  );
};

export default AdminTableReferrals;
