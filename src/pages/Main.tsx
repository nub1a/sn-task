import React, { memo } from "react";
import Field from "../components/Field";
import HoveredSquareList from "../components/HoveredSquareList";
import SquareOptionsPicker from "../components/SquareOptionsPicker";
import FieldRowsCountProvider from "../providers/FieldRowsCountProvider";
import "./styles/main.css";

const Main: React.FC = () => (
  <FieldRowsCountProvider>
    <div className="main">
      <div className="main-container">
        <SquareOptionsPicker />
        <Field />
      </div>
      <HoveredSquareList />
    </div>
  </FieldRowsCountProvider>
);

export default memo(Main);
