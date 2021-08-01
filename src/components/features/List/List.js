import PropTypes from 'prop-types';
import ListHead from '../ListHead/ListHead';
import ListColumn from 'components/features/ListColumn/ListColumn';

import { settings } from 'data/dataStore';

import styles from './List.module.scss';

const List = ({
  setCurrentOrderbookPair,
  marketCodesArray,
  orderBookList: { buy, sell, timestamp },
  ...currencyProps
}) => {

  const listHeadProps = {
    date: timestamp,
    marketCodesArray,
    setCurrentOrderbookPair,
  };

  return (
    <div className={styles.component}>
      <ListHead {...listHeadProps} />
      <div className={styles.list}>
        <ListColumn
          title={settings.list.bidColumnTitle}
          items={buy}
          {...currencyProps}
        />
        <ListColumn
          title={settings.list.askColumnTitle}
          items={sell}
          {...currencyProps}
        />
      </div>
    </div>
  );
};

List.propTypes = {
  setCurrentOrderbookPair: PropTypes.func,
  marketCodesArray: PropTypes.array,
  orderBookList: PropTypes.shape({
    buy: PropTypes.array.isRequired,
    sell: PropTypes.array.isRequired,
    timestamp: PropTypes.string.isRequired,
  }),
};

export default List;
