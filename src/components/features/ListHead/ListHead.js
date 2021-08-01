import PropTypes from 'prop-types';
import Select from 'react-select';

import { settings } from 'data/dataStore';
import { getDateFromTimestamp } from 'utils/utils';

import styles from './ListHead.module.scss';

const ListHead = ({ date, marketCodesArray, setCurrentOrderbookPair }) => {
  const defaultSelectValue = () => {
    return marketCodesArray.filter(
      (market) => market.value === settings.list.initialOrderbookPair,
    );
  };

  return (
    <div className={styles.component}>
      <div className={styles.selectWrapper}>
        {marketCodesArray && (
          <Select
            options={marketCodesArray}
            defaultValue={defaultSelectValue()}
            onChange={(event) => {
              setCurrentOrderbookPair(event.value);
            }}
          />
        )}
      </div>
      <div>{getDateFromTimestamp(date)}</div>
    </div>
  );
};

ListHead.propTypes = {
  date: PropTypes.string,
  marketCodesArray: PropTypes.array,
  setCurrentOrderbookPair: PropTypes.func,
};

export default ListHead;
