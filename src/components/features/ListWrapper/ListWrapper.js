import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import List from '../List/List';

import {
  checkIfObjectEmpty,
  getCurrentCrypto,
  getCurrentCurrency,
} from 'utils/utils';
import { data } from 'data/dataStore';

import styles from './ListWrapper.module.scss';

const ListWrapper = () => {
  let [orderbookListResponse, setOrderbookListResponse] = useState({});
  let [currentOrderbookPair, setCurrentOrderbookPair] = useState(
    `${data.list.initialOrderbookPair}`,
  );

  const setCurrentOrderbookListInterval = () => {
    return setInterval(() => {
      fetch(data.list.orderbookApiUrl + currentOrderbookPair)
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
    let interval = setCurrentOrderbookListInterval();
    return () => clearInterval(interval);
  }, [currentOrderbookPair]);

  const orderbookPairProps = {
    currency: getCurrentCurrency(`${currentOrderbookPair}`),
    crypto: getCurrentCrypto(`${currentOrderbookPair}`),
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
