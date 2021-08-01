import PropTypes from 'prop-types';

import styles from './Logo.module.scss';

const Logo = ({ src, alt }) => (
  <h1 className={styles.component}>
    <img className={styles.image} src={src} alt={alt} />
  </h1>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
