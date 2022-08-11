import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { SquareOption } from "../types/Square";

export const useGetSquareOptions = () => {
  const [options, setOptions] = useState<SquareOption[]>();

  const getSquareOptions = useCallback(async () => {
    const response = await axios("https://demo7919674.mockable.io/");

    const data = response.data;

    if (data) {
      setOptions(data);
    }
  }, []);

  useEffect(() => {
    getSquareOptions();
  }, []);

  return { options };
};
