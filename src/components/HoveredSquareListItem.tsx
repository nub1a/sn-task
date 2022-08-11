import React, { memo } from "react";
import "./styles/hoveredSquareListItem.css";

interface Props {
  row: number;
  column: number;
}

const HoveredSquareListItem: React.FC<Props> = ({ row, column }) => (
  <div className="hovered-container">
    row {row} column {column}
  </div>
);

export default memo(HoveredSquareListItem);
