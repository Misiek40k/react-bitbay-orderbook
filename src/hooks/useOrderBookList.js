import { useState, useEffect } from 'react';
import { data } from '../data/dataStore';

const useOrderBookList = (initialState, currentOrderbookPair, dependency) => {
  let [orderbookList, setOrderbookList] = useState(initialState);

  const setCurrentOrderbookListInterval = () => {
    return setInterval(() => {
      fetch(data.list.orderbookApiUrl + currentOrderbookPair)
        .then((response) => response.json())
        .then((data) => {
          setOrderbookList(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };

  useEffect(() => {
    let interval = setCurrentOrderbookListInterval();
    return () => clearInterval(interval);
  }, [dependency]);

  return orderbookList;
};

export default useOrderBookList;
