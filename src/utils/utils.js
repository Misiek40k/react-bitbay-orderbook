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
  return orderbookPair.split('-')[0];
};

export const getCurrentCrypto = (orderbookPair) => {
  return orderbookPair.split('-')[1];
};

export const getDateFromTimestamp = (timestamp) => {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(timestamp);
};
