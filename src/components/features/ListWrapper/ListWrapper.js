import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import List from '../List/List';

import { checkIfObjectEmpty } from 'utils/utils';
import { settings } from 'data/dataStore';

import styles from './ListWrapper.module.scss';

const ListWrapper = () => {
  let [marketCodesArray, setMarketCodesArray] = useState([]);
  let [orderbookListResponse, setOrderbookListResponse] = useState({});
  // let [currentorderbookPair, setCurrentOrderbookPair] = useState(
  //   `${settings.list.initialOrderbookPair}`,
  // );

  const getCurrentMarkets = () => {
    fetch(`${settings.list.tickerApiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        const marketCodesResponseArray = [];
        for (let market in data.items) {
          marketCodesResponseArray.push(market);
        }
        setMarketCodesArray(marketCodesResponseArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setCurrentOrderbookListInterval = () => {
    let interval = setInterval(() => {
      fetch(settings.list.orderbookApiUrl + settings.list.initialOrderbookPair)
        .then((response) => response.json())
        .then((data) => {
          setOrderbookListResponse(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    getCurrentMarkets();
    setCurrentOrderbookListInterval();
  }, []);

  const orderbookPairProps = {
    currency: 'PLN',
    crypto: 'BTC',
    marketCodesArray,
  };

  return (
    <div className={styles.component}>
      {checkIfObjectEmpty({ ...orderbookListResponse }) ? (
        <div className={styles.loaderWrapper}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0}
          />
        </div>
      ) : (
        <List orderBookList={orderbookListResponse} {...orderbookPairProps} />
      )}
    </div>
  );
};

export default ListWrapper;
