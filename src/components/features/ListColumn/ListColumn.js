import PropTypes from 'prop-types';
import ListItem from '../../common/ListItem/ListItem';
import ColumnTitle from '../../common/ColumnTitle/ColumnTitle';
import { calculateCurrencyAmount } from 'utils/utils';

import styles from './ListColumn.module.scss';

const ListColumn = ({ title, items, crypto, currency }) => (
  <div className={styles.component}>
    <ColumnTitle title={title} />
    <div className={styles.items}>
      <ListItem
        rate="RATE"
        currencyAmount={currency}
        cryptoAmount={crypto}
        title="head"
      />
      {items &&
        items.map(({ ca, ra }, index) => {
          const itemProps = {
            title,
            cryptoAmount: ca,
            rate: ra,
            currencyAmount: calculateCurrencyAmount(ra, ca),
          };

          return <ListItem key={index} {...itemProps} />;
        })}
    </div>
  </div>
);

ListColumn.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  crypto: PropTypes.string,
  currency: PropTypes.string,
};

export default ListColumn;
