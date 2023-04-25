import React, { useEffect } from "react";

function Headers({ res }: { res: any }) {
  return (
    <>
      <div className="w-full h-full  px-6">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3 w-1/3">
                  Key
                </th>
                <th scope="col" className="px-6 py-3">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(res).map((item) => {
                return (
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 w-1/3">{item}</td>
                    <td className="px-6 py-4">{res[`${item}`]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Headers;
