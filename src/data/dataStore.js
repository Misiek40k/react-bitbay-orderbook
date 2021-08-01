import logoSrc from 'assets/logo.svg';

export const settings = {
  header:{
    logoAlt: 'Bitbay Orderbook',
    logoSrc: logoSrc,
  },
  contentContainer: {
    title: 'Orderbook',
  },
  list:{
    tickerApiUrl: 'https://api.bitbay.net/rest/trading/ticker',
    orderbookApiUrl: 'https://api.bitbay.net/rest/trading/orderbook/',
    initialOrderbookPair: 'BTC-PLN',
  },
};
