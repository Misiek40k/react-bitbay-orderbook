import logoSrc from 'assets/logo.svg';

export const data = {
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
    headItemRate: 'RATE',
    headItemTitle: 'head',
    bidColumnTitle: 'bid',
    askColumnTitle: 'ask',
    componentInitialState: 'hidden',
    componentAnimation: 'visible',
  },
};
