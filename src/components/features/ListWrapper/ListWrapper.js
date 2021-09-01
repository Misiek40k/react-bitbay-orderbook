import Loader from 'react-loader-spinner';
import List from '../List/List';

import {
  checkIfObjectEmpty,
  getCurrentCrypto,
  getCurrentCurrency,
} from 'utils/utils';
import { data } from 'data/dataStore';
import useOrderBookList from 'hooks/useOrderBookList';
import useCurrentOrderBookPair from 'hooks/useCurrentOrderBookPair';

import styles from './ListWrapper.module.scss';

const ListWrapper = () => {
  const [currentOrderbookPair, setCurrentOrderbookPair] = useCurrentOrderBookPair(`${data.list.initialOrderbookPair}`);
  const orderbookListResponse = useOrderBookList({}, currentOrderbookPair, currentOrderbookPair);

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
