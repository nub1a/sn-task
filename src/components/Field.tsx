import React, { memo, useCallback, useContext } from "react";
import { FieldRowsCountContext } from "../context/fieldRowsCountContext";
import Cell from "./Cell";
import "./styles/field.css";

const CELL_SIZE = 40;

const Field: React.FC = () => {
  const { fieldRowsCount } = useContext(FieldRowsCountContext);

  const renderField = useCallback(() => {
    if (!fieldRowsCount) {
      return null;
    }

    return (
      <div
        className="field-container"
        style={{
          width: CELL_SIZE * fieldRowsCount,
          height: CELL_SIZE * fieldRowsCount,
        }}
      >
        {Array(fieldRowsCount * fieldRowsCount)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              <Cell cellNumber={index + 1} />
            </React.Fragment>
          ))}
      </div>
    );
  }, [fieldRowsCount]);

  return <div>{renderField()} </div>;
};

export default memo(Field);
