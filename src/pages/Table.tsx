import React from "react";

interface Values {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface MetaData {
  [key: string]: string;
}

interface TableProps {
  metaData: MetaData;
  timeSeriesData: [string, Values][] | null;
}

const Table: React.FC<TableProps> = ({ metaData, timeSeriesData }) => {
  return (
    <div>
      <div className="w-[100%] md:w-[60%] mx-auto mb-[5rem] mt-4">
        <p className="font-extrabold text-[20px] text-center">Meta Data</p>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
              <th className="py-2 px-4">Information</th>
              <th className="py-2 px-4">Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {metaData &&
              Object.entries(metaData).map(([key, value]) => (
                <tr
                  key={key}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-2 px-4 font-medium">{key}</td>
                  <td className="py-2 px-4">{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
        <div className="max-w-[90%] mx-auto ">
          <p className="font-extrabold text-[20px] text-center">Time Series</p>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
              <tr>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  Date
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Open
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  High
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Low
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Close
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
              </tr>
            </thead>
            <tbody>
              {timeSeriesData &&
                timeSeriesData.map(([date, values]) => (
                  <tr
                    key={date}
                    className="border-b text-center border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {values["1. open"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {values["2. high"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {values["3. low"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {values["4. close"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {values["5. volume"]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
