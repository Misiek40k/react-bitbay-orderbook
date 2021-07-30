import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from '../../data/dataStore';
import logo from '../../assets/logo.svg';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.component}>
      <Grid>
        <Row>
          <Col xs>
            <picture className={styles.logo}>
              <img
                className={styles.image}
                src={logo}
                alt={settings.logoIconAlt}
              />
            </picture>
          </Col>
        </Row>
      </Grid>
    </header>
  );
}
