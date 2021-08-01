import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import List from '../List/List';
import { settings } from 'data/dataStore';

import styles from './ListWrapper.module.scss';

const ListWrapper = () => {
  let [orderbookList, setOrderbookList] = useState({});
  // let [orderbookPair, setOrderbookPair] = useState(
  //   `${settings.list.initialOrderbookPair}`,
  // );

  const isObjectEmpty = (object) => {
    if (Object.keys(object).length !== 0) {
      return false;
    }
    return true;
  };

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

  return (
    <div className={styles.component}>
      {isObjectEmpty({ ...orderbookList }) ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={0}
        />
      ) : (
        <List listProps={orderbookList} />
      )}
    </div>
  );
};

export default ListWrapper;
