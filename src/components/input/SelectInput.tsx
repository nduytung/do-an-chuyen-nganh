import React, { useEffect } from "react";
import { IPrimaryInput } from "./PrimaryInput";

export interface ISelectInput {
  inputName: string;
  handleChange: Function;
  classname?: string;
  error?: boolean;
  value: any;
  disabledPlaceholder: string;
  valueList: Array<{
    value: string | number;
    name: string;
  }>;
  setError: Function;
}

const SelectInput = ({
  inputName,
  handleChange,
  classname,
  error = false,
  value,
  disabledPlaceholder,
  valueList,
  setError,
}: ISelectInput) => {
  useEffect(() => {
    console.log("setting");
    error === true && setError(true);
  }, [error]);
  return (
    <>
      <select
        name={inputName}
        onChange={(e) => handleChange(e)}
        className={`border border-gray-300 py-2 px-4 rounded-md mb-4 mt-2 focus:outline-none w-full ${
          error === true ? "border border-red-500" : ""
        } ${classname}`}
        value={value}
      >
        <option disabled selected value={""}>
          {disabledPlaceholder}
        </option>
        {valueList.map((item: any) => {
          return <option value={item.value}>{item.name}</option>;
        })}
      </select>
      {error && (
        <p className="text-red-700 text-base font-light mb-5">
          {" "}
          This field is required
        </p>
      )}
    </>
  );
};

export default SelectInput;
