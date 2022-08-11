import React, { memo, useCallback, useContext, useMemo } from "react";
import { FieldRowsCountContext } from "../context/fieldRowsCountContext";
import HoveredSquareListItem from "./HoveredSquareListItem";

const HoveredSquareList: React.FC = () => {
  const { rowsActive, fieldRowsCount } = useContext(FieldRowsCountContext);

  const renderHoveredSquare = useCallback(
    () =>
      rowsActive.map((cellNumber) => {
        const row = Math.ceil(cellNumber / fieldRowsCount);
        const column =
          cellNumber % fieldRowsCount === 0
            ? fieldRowsCount
            : cellNumber % fieldRowsCount;
        return <HoveredSquareListItem row={row} column={column} />;
      }),
    [fieldRowsCount, rowsActive]
  );

  const Header = useMemo(
    () => (fieldRowsCount ? <h1>Hover squares</h1> : null),
    [fieldRowsCount]
  );

  return (
    <div>
      {Header}
      {renderHoveredSquare()}
    </div>
  );
};

export default memo(HoveredSquareList);
