import { useCallback, useContext } from "react";
import { FieldRowsCountContext } from "../context/fieldRowsCountContext";

export const useSelectFieldOption = () => {
  const { setFieldRowsCount } = useContext(FieldRowsCountContext);

  const onSelectOption = useCallback(
    (fieldRowsCount: number) => {
      setFieldRowsCount(fieldRowsCount);
    },
    [setFieldRowsCount]
  );

  return {
    onSelectOption,
  };
};
