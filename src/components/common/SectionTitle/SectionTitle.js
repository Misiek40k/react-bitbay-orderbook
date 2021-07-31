import PropTypes from 'prop-types';

import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title }) => (
  <h2 className={styles.component}>{title}</h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
