import PropTypes from 'prop-types';

import styles from './Section.module.scss';

const Section = ({ Content }) => (
  <section className={styles.component}>
    <Content />
  </section>
);

Section.propTypes = {
  Content: PropTypes.func.isRequired,
};

export default Section;
