import PropTypes from 'prop-types';
import ListColumn from 'components/features/ListColumn/ListColumn';

import { settings } from 'data/dataStore';

import styles from './List.module.scss';

const List = ({ orderBookList: { buy, sell }, ...currencyProps }) => (
  <div className={styles.component}>
    <div className={styles.head}>list</div>
    <div className={styles.list}>
      <ListColumn title={settings.list.bidColumnTitle} items={buy} {...currencyProps} />
      <ListColumn title={settings.list.askColumnTitle} items={sell} {...currencyProps} />
    </div>
  </div>
);

List.propTypes = {
  orderBookList: PropTypes.shape({
    buy: PropTypes.array.isRequired,
    sell: PropTypes.array.isRequired,
  }),
};

export default List;
