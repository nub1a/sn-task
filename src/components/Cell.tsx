import { memo, useCallback, useContext, useEffect, useState } from "react";
import { FieldRowsCountContext } from "../context/fieldRowsCountContext";
import "./styles/cell.css";

interface Props {
  cellNumber: number;
}

const Cell: React.FC<Props> = ({ cellNumber }) => {
  const [isActive, setIsActive] = useState(false);

  const { setRowsActive, rowsActive, fieldRowsCount } = useContext(
    FieldRowsCountContext
  );

  const onMouseEnter = useCallback(() => {
    if (!isActive) {
      setRowsActive([...rowsActive, cellNumber]);
    } else {
      setRowsActive([...rowsActive].filter((cell) => cell !== cellNumber));
    }

    setIsActive(!isActive);
  }, [cellNumber, isActive, rowsActive, setRowsActive]);

  useEffect(() => {
    setIsActive(false);
  }, [fieldRowsCount]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`cell ${isActive ? "cell_active" : "cell_default"}`}
    />
  );
};

export default memo(Cell);
