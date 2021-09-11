import { useState, useEffect } from 'react';
import { data } from '../data/dataStore';

const useMarketCodesArray = (initialState) => {
  let [marketCodesArray, setMarketCodesArray] = useState(initialState);

  const getCurrentMarkets = () => {
    fetch(`${data.list.tickerApiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        const marketCodesResponseArray = [];
        for (let market in data.items) {
          marketCodesResponseArray.push({ value: market, label: market });
        }
        setMarketCodesArray(marketCodesResponseArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCurrentMarkets();
  }, []);

  return marketCodesArray;
};

export default useMarketCodesArray;
