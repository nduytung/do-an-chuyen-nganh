import React, { useEffect } from "react";
import { createNewDate } from "../../pages/project/NewProject";

export interface IDateInput {
  inputName: string;
  handleChange: Function;
  classname?: string;
  error?: boolean;
  value: any;
  setError: Function;
}

const DateInput = ({
  inputName,
  handleChange,
  classname,
  error = false,
  value,
  setError,
}: IDateInput) => {
  useEffect(() => {
    error === true && setError(true);
  }, [error]);
  return (
    <>
      <input
        name={inputName}
        onChange={(e) => handleChange(e)}
        defaultValue={createNewDate()}
        value={value}
        min={createNewDate()}
        type={"date"}
        className={`${classname} border border-gray-300 py-2 px-4 rounded-md mb-4 mt-2 focus:outline-none w-full ${
          error === true ? "border border-red-500" : ""
        }`}
      />
      {error && (
        <p className="text-red-700 text-base font-light mb-5">
          {" "}
          This field is required
        </p>
      )}
    </>
  );
};

export default DateInput;
