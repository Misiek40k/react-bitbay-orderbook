import PropTypes from 'prop-types';
import ListColumn from 'components/features/ListColumn/ListColumn';

import styles from './List.module.scss';

const List = ({ orderBookList: { buy, sell }, ...currencyProps }) => (
  <div className={styles.component}>
    <div className={styles.head}>list</div>
    <div className={styles.list}>
      <ListColumn title={'bid'} items={buy} {...currencyProps} />
      <ListColumn title={'ask'} items={sell} {...currencyProps} />
    </div>
  </div>
);

List.propTypes = {
  orderBookList: PropTypes.shape({
    buy: PropTypes.array,
    sell: PropTypes.array,
  }),
};

export default List;