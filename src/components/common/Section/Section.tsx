import { FunctionComponent } from 'react';

import styles from './Section.module.scss';

type Props = {
  Content: FunctionComponent
}

const Section: FunctionComponent<Props> = ({ Content }) => (
  <section className={styles.component}>
    <Content />
  </section>
);

export default Section;
