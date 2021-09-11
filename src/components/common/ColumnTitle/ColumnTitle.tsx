import { FunctionComponent } from 'react';
import styles from './ColumnTitle.module.scss';

interface Props {
  title: string;
}

const SectionTitle: FunctionComponent<Props> = ({ title }) => (
  <h2 className={`${styles.component} ${styles[title]}`}>{title}</h2>
);

export default SectionTitle;
