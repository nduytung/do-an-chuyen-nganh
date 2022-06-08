import React from "react";

const BackerList = () => {
  return (
    <table className="w-full">
      <tr className="border-b border-gray-300 w-full text-left">
        <th>Name</th>
        <th>Donate amount</th>
        <th>Date</th>
      </tr>
      <tr className="py-6 border-b border-gray-300 w-full text-left">
        <td>Nguyen Duy Tung</td>
        <td>$45000</td>
        <td>22-09-2022</td>
      </tr>
    </table>
  );
};

export default BackerList;
