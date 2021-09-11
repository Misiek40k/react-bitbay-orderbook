import { FunctionComponent } from 'react';

import styles from './Logo.module.scss';

type Props = {
  src: string,
  alt: string,
}

const Logo: FunctionComponent<Props> = ({ src, alt }) => (
  <h1 className={styles.component}>
    <img className={styles.image} src={src} alt={alt} />
  </h1>
);

export default Logo;
