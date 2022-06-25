import React from "react";

const BackerList = ({
  backerList,
}: {
  backerList: [{ name: string; amount: string | number; date: string }];
}) => {
  return (
    <table className="w-full gap-4">
      <tr className="border-b border-gray-300 w-full text-left h-12">
        <th>Name</th>
        <th>Donate amount</th>
        <th>Date</th>
      </tr>
      {backerList?.length > 0 &&
        backerList?.map((item: any) => {
          return (
            <tr className="py-6 border-b border-gray-300 w-full text-left h-12">
              <td className="font-semibold">{item.name}</td>
              <td>${item.amount}</td>
              <td>{item.date?.split("T")[0]}</td>
            </tr>
          );
        })}
    </table>
  );
};

export default BackerList;
