import { FunctionComponent } from 'react';

import styles from './ListItem.module.scss';

type Props = {
  rate: string,
  cryptoAmount: string,
  currencyAmount: string,
  title: string
}

const ListItem: FunctionComponent<Props> = ({ rate, currencyAmount, cryptoAmount, title }) => (
  <div className={`${styles.component} ${styles[title]}`}>
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

export default ListItem;
