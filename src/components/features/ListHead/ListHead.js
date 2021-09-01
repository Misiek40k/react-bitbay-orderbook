import PropTypes from 'prop-types';
import Select from 'react-select';
import { motion } from 'framer-motion';
import useMarketCodesArray from 'hooks/useMarketCodesArray';

import { data } from 'data/dataStore';
import { getDateFromTimestamp, defaultTransitionTime } from 'utils/utils';

import styles from './ListHead.module.scss';


const ListHead = ({ date, setCurrentOrderbookPair }) => {
  const marketCodesArray = useMarketCodesArray();

  const defaultSelectValue = () => {
    return marketCodesArray.filter(
      (market) => market.value === data.list.initialOrderbookPair,
    );
  };

  const selectAnimationVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };

  const timestampAnimationVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };

  return (
    <div className={styles.component}>
      <motion.div
        className={styles.selectWrapper}
        initial={data.list.componentInitialState}
        animate={data.list.componentAnimation}
        variants={selectAnimationVariants}
        transition={defaultTransitionTime}
      >
        {marketCodesArray?.length > 0 && (
          <Select
            options={marketCodesArray}
            defaultValue={defaultSelectValue()}
            onChange={(event) => {
              setCurrentOrderbookPair(event.value);
            }}
          />
        )}
      </motion.div>
      <motion.div
        initial={data.list.componentInitialState}
        animate={data.list.componentAnimation}
        variants={timestampAnimationVariants}
        transition={defaultTransitionTime}
      >
        {getDateFromTimestamp(date)}
      </motion.div>
    </div>
  );
};

ListHead.propTypes = {
  date: PropTypes.string,
  setCurrentOrderbookPair: PropTypes.func,
};

export default ListHead;
