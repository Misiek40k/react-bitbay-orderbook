export const calculateCurrencyAmount = (rate, cryptoAmount) => {
  return parseFloat(rate * cryptoAmount).toFixed(2);
};

export const checkIfObjectEmpty = (object) => {
  if (Object.keys(object).length !== 0) {
    return false;
  }
  return true;
};

export const getCurrentCurrency = (orderbookPair) => {
  console.log(orderbookPair);
  return orderbookPair.split('-')[0].join('');
};

export const getCurrentCrypto = (orderbookPair) => {
  return orderbookPair.split('-')[1].join('');
};
