import React, { FC, ReactNode } from "react";

type ErrorTextProps = {
  children: ReactNode;
};

const ErrorText: FC<ErrorTextProps> = ({ children }) => {
  return (
    <div>
      <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
        {children}
      </p>
    </div>
  );
};

export default ErrorText;
