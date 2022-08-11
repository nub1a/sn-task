import { createContext } from "react";

export interface FieldRowsCountContextType {
  fieldRowsCount: number;
  rowsActive: number[];
  setFieldRowsCount: React.Dispatch<React.SetStateAction<number>>;
  setRowsActive: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FieldRowsCountContext = createContext<FieldRowsCountContextType>({
  fieldRowsCount: 0,
  rowsActive: [],
  setFieldRowsCount: () => null,
  setRowsActive: () => null,
});
