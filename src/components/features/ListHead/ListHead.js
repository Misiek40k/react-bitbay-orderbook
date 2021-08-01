import PropTypes from 'prop-types';
import Select from 'react-select';
import { motion } from 'framer-motion';

import { settings } from 'data/dataStore';
import { getDateFromTimestamp, defaultTransitionTime } from 'utils/utils';

import styles from './ListHead.module.scss';

const ListHead = ({ date, marketCodesArray, setCurrentOrderbookPair }) => {
  const defaultSelectValue = () => {
    return marketCodesArray.filter(
      (market) => market.value === settings.list.initialOrderbookPair,
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
        initial={settings.list.componentInitialState}
        animate={settings.list.componentAnimation}
        variants={selectAnimationVariants}
        transition={defaultTransitionTime}
      >
        {marketCodesArray && (
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
        initial={settings.list.componentInitialState}
        animate={settings.list.componentAnimation}
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
  marketCodesArray: PropTypes.array,
  setCurrentOrderbookPair: PropTypes.func,
};

export default ListHead;
