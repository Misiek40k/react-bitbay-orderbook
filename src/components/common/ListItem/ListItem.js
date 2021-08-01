import PropTypes from 'prop-types';

import styles from './ListItem.module.scss';

const ListItem = ({ rate, currencyAmount, cryptoAmount, title }) => (
  <div className={[styles.component, styles[title]].join(' ')}>
    <table className={styles.table}>
      <tbody>
        <tr>
          <td className={styles.item}>{rate}</td>
          <td className={styles.item}>{cryptoAmount}</td>
          <td className={styles.item}>{currencyAmount}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

ListItem.propTypes = {
  rate: PropTypes.string.isRequired,
  cryptoAmount: PropTypes.string.isRequired,
  currencyAmount: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default ListItem;
