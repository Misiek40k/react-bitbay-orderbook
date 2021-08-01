import PropTypes from 'prop-types';
import ListColumn from 'components/features/ListColumn/ListColumn';

import styles from './List.module.scss';

const List = ({ listProps: { buy, sell } }) => (
  <div className={styles.component}>
    <div className={styles.head}>list</div>
    <div className={styles.list}>
      <ListColumn title={'bid'} items={buy} />
      <ListColumn title={'ask'} items={sell} />
    </div>
  </div>
);

List.propTypes = {
  listProps: PropTypes.shape({
    buy: PropTypes.array,
    sell: PropTypes.array,
  }),
};

export default List;
