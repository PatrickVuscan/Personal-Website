import { createContext, useState, useEffect } from "react";
import localData from "./data.json";

const GITHUB_DATA_URL = "https://raw.githubusercontent.com/PatrickVuscan/Personal-Website/master/src/data.json";

const DataContext = createContext();

const useDataFetch = () => {
  const [data, setData] = useState({
    ...localData,
    loaded: false,
  });

  useEffect(() => {
    fetch(GITHUB_DATA_URL)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(new Error(`Couldn't fetch data from Github Repo. Error code ${response.status}`));
        }

        return response.json();
      })
      .then((fetchedData) => {
        setData({
          ...fetchedData,
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
        console.warn("Potentially stale data being used instead.", localData);
        setData((prevData) => ({
          ...prevData,
          loaded: true,
        }));
      });
  }, []);

  return data;
};

export {
  DataContext,
  useDataFetch,
};
