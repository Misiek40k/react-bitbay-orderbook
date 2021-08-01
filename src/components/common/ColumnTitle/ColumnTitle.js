import PropTypes from 'prop-types';

import styles from './ColumnTitle.module.scss';

const SectionTitle = ({ title }) => (
  <h2 className={[styles.component, styles[title]].join(' ')}>{title}</h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
