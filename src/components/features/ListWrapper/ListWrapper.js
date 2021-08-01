import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import List from '../List/List';

import {
  checkIfObjectEmpty,
  getCurrentCrypto,
  getCurrentCurrency,
} from 'utils/utils';
import { settings } from 'data/dataStore';

import styles from './ListWrapper.module.scss';

const ListWrapper = () => {
  let [marketCodesArray, setMarketCodesArray] = useState([]);
  let [orderbookListResponse, setOrderbookListResponse] = useState({});
  let [currentOrderbookPair, setCurrentOrderbookPair] = useState(
    `${settings.list.initialOrderbookPair}`,
  );

  const getCurrentMarkets = () => {
    fetch(`${settings.list.tickerApiUrl}`)
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

  const setCurrentOrderbookListInterval = () => {
    return setInterval(() => {
      console.log(settings.list.orderbookApiUrl + currentOrderbookPair);
      fetch(settings.list.orderbookApiUrl + currentOrderbookPair)
        .then((response) => response.json())
        .then((data) => {
          setOrderbookListResponse(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };

  useEffect(() => {
    getCurrentMarkets();
    let interval = setCurrentOrderbookListInterval();
    return () => clearInterval(interval);
  }, [currentOrderbookPair]);

  const orderbookPairProps = {
    currency: getCurrentCurrency(`${currentOrderbookPair}`),
    crypto: getCurrentCrypto(`${currentOrderbookPair}`),
    marketCodesArray,
    setCurrentOrderbookPair,
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
