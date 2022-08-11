import React, { PropsWithChildren, useState } from "react";
import { FieldRowsCountContext } from "../context/fieldRowsCountContext";

const FieldRowsCountProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [fieldRowsCount, setFieldRowsCount] = useState(0);
  const [rowsActive, setRowsActive] = useState<number[]>([]);

  return (
    <FieldRowsCountContext.Provider
      value={{ fieldRowsCount, setFieldRowsCount, rowsActive, setRowsActive }}
    >
      {children}
    </FieldRowsCountContext.Provider>
  );
};

export default FieldRowsCountProvider;
