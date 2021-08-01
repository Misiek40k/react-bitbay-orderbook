import PropTypes from 'prop-types';
import ListItem from '../../common/ListItem/ListItem';
import ColumnTitle from '../../common/ColumnTitle/ColumnTitle';

import styles from './ListColumn.module.scss';

const ListColumn = ({ title, items }) => (
  <div className={styles.component}>
    <ColumnTitle title={title}/>
    <div className={styles.items}>
      {items &&
        items.map((item, index) => <ListItem key={index} {...item} />)}
    </div>
  </div>
);

ListColumn.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default ListColumn;
