import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import ListHead from '../ListHead/ListHead';
import ListColumn from 'components/features/ListColumn/ListColumn';

import { defaultAnimationVariants, defaultTransitionTime } from 'utils/utils';
import { data } from 'data/dataStore';

import styles from './List.module.scss';

const List = ({
  setCurrentOrderbookPair,
  orderBookList: { buy, sell, timestamp },
  ...currencyProps
}) => {
  const listHeadProps = {
    date: timestamp,
    setCurrentOrderbookPair,
  };

  return (
    <motion.div
      className={styles.component}
      initial={data.list.componentInitialState}
      animate={data.list.componentAnimation}
      variants={defaultAnimationVariants}
      transition={defaultTransitionTime}
    >
      <ListHead {...listHeadProps} />
      <div className={styles.list}>
        <ListColumn
          title={data.list.bidColumnTitle}
          items={buy}
          {...currencyProps}
        />
        <ListColumn
          title={data.list.askColumnTitle}
          items={sell}
          {...currencyProps}
        />
      </div>
    </motion.div>
  );
};

List.propTypes = {
  setCurrentOrderbookPair: PropTypes.func,
  orderBookList: PropTypes.shape({
    buy: PropTypes.array.isRequired,
    sell: PropTypes.array.isRequired,
    timestamp: PropTypes.string.isRequired,
  }),
};

export default List;
