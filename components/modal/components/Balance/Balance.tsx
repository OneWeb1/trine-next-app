import Image from "next/image";
import React, { FC } from "react";

type BalanceProps = {
  value: number | string;
};

const Balance: FC<BalanceProps> = ({ value }) => {
  return (
    <>
      <Image
        style={{ marginRight: "3px" }}
        src="/assets/home/money.svg"
        width={12}
        height={12}
        alt="image"
      />
      {value}
    </>
  );
};

export default Balance;
