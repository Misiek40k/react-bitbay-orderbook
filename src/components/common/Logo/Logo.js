import PropTypes from 'prop-types';

import styles from './Logo.module.scss';

const Logo = ({ src, alt }) => (
  <picture className={styles.logo}>
    <img className={styles.image} src={src} alt={alt} />
  </picture>
);

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;
