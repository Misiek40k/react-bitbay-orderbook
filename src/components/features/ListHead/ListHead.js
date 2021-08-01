import PropTypes from 'prop-types';

import { getDateFromTimestamp } from 'utils/utils';

import styles from './ListHead.module.scss';

const ListHead = ({ date }) => {

  return (
    <div className={styles.component}>
      <div>list</div>
      <div>{getDateFromTimestamp(date)}</div>
    </div>
  );
};

ListHead.propTypes = {
  date: PropTypes.string,
};

export default ListHead;
