import { useState } from 'react';

const useCurrentOrderBookPair = (initialState) => {
  let [currentOrderbookPair, setCurrentOrderbookPair] = useState(
    initialState,
  );

  return [currentOrderbookPair, setCurrentOrderbookPair];
};

export default useCurrentOrderBookPair;
