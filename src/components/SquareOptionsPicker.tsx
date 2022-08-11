import React, {
  ChangeEvent,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { FieldRowsCountContext } from "../context/fieldRowsCountContext";
import { useGetSquareOptions } from "../hooks/useGetSquareOptions";
import { useSelectFieldOption } from "../hooks/useSelectFieldOption";
import "./styles/squareOptionsPicker.css";

const SquareOptionsPicker: React.FC = () => {
  const [pickedSquareOption, setPickedSquareOption] = useState<number>();

  const { setRowsActive } = useContext(FieldRowsCountContext);

  const { options } = useGetSquareOptions();

  const { onSelectOption } = useSelectFieldOption();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      setPickedSquareOption(Number(e.target.value)),
    []
  );

  const onConfirm = useCallback(() => {
    if (!pickedSquareOption) {
      return null;
    }

    setRowsActive([]);

    onSelectOption(pickedSquareOption);
  }, [onSelectOption, pickedSquareOption, setRowsActive]);

  const Select = useMemo(() => {
    if (!options) {
      return null;
    }

    return (
      <select className="select" onChange={onChange} name="select">
        <option>Pick mode</option>
        {options.map((option, id) => (
          <option key={id.toString()} value={option.field}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }, [onChange, options]);

  return (
    <div className="picker-container">
      {Select}
      {options && (
        <button className="button-picker" onClick={onConfirm}>
          START
        </button>
      )}
    </div>
  );
};

export default memo(SquareOptionsPicker);
