import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Table from "./pages/Table";
import Pagination from "./pages/Pagination";

interface Values {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface TimeSeriesData {
  [date: string]: Values;
}

interface MetaData {
  [key: string]: string;
}

interface ApiData {
  "Time Series (5min)": TimeSeriesData;
  "Meta Data": MetaData;
}

const App: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;

  //In case the API request exit per day request use API_KEY1
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const API_KEY = 'RIBXT3XYLI69PC0Q';
  const API_KEY1 = 'demo';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY1}`
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const paginatedData = useMemo(() => {
    if (!apiData) return null;
    const timeSeriesData = apiData["Time Series (5min)"];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Object.entries(timeSeriesData).slice(startIndex, endIndex);
  }, [apiData, currentPage]);

  return (
    <>
      {apiData ? (
        <div>
          <Table
            metaData={apiData["Meta Data"]}
            timeSeriesData={paginatedData}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              Object.keys(apiData["Time Series (5min)"]).length / itemsPerPage
            )}
            onPageChange={paginate}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default App;
