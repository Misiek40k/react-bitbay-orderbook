import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({ca, co, pa, ra, sa}) => (
  <div className={styles.component}>
    {ca}, {co}, {pa}, {ra}, {sa}
  </div>
);

ListItem.propTypes = {
  ca: PropTypes.string,
  co: PropTypes.number,
  pa: PropTypes.string,
  ra: PropTypes.string,
  sa: PropTypes.string,
};

export default ListItem;
