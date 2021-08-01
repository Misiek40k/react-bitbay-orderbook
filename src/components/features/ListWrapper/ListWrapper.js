import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import List from '../List/List';
import { settings } from 'data/dataStore';
import { checkIfObjectEmpty } from 'utils/utils';

import styles from './ListWrapper.module.scss';

const ListWrapper = () => {
  let [orderbookList, setOrderbookList] = useState({});
  // let [orderbookPair, setOrderbookPair] = useState(
  //   `${settings.list.initialOrderbookPair}`,
  // );

  useEffect(() => {
    let interval = setInterval(() => {
      fetch(
        `${settings.list.orderbookApiUrl}${settings.list.initialOrderbookPair}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setOrderbookList(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currencyProps = {
    currency: 'PLN',
    crypto: 'BTC',
  };

  return (
    <div className={styles.component}>
      {checkIfObjectEmpty({ ...orderbookList }) ? (
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
        <List orderBookList={orderbookList} {...currencyProps} />
      )}
    </div>
  );
};

export default ListWrapper;
