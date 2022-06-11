import React, { useEffect } from "react";

export interface IPrimaryInput {
  inputName: string;
  handleChange: Function;
  type: "number" | "text" | "date";
  classname?: string;
  error?: boolean;
  value: any;
  setError: Function;
}
const PrimaryInput = ({
  inputName,
  handleChange,
  type,
  classname,
  error = false,
  value,
  setError,
}: IPrimaryInput) => {
  useEffect(() => {
    if (error === true) setError(true);
  }, [error]);

  return (
    <>
      <input
        name={inputName}
        onChange={(e) => handleChange(e)}
        type={type}
        className={`border border-gray-300 py-2 px-4 rounded-md mb-4 mt-2 focus:outline-none ${
          error ? "border border-red-500" : ""
        } ${classname}`}
        value={value}
      />
      {error && (
        <p className="text-red-700 text-base font-light mb-5">
          This field is required
        </p>
      )}
    </>
  );
};

export default PrimaryInput;
