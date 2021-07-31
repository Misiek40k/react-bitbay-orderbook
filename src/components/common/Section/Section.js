import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './Section.module.scss';

const Section = ({ title, Content }) => (
  <section className={styles.component}>
    <SectionTitle title={title} />
    <Content />
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  Content: PropTypes.func,
};

export default Section;
