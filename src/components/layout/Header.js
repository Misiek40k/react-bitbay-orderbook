import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from '../../data/dataStore';
import logo from '../../assets/logo.svg';

import styles from './Header.module.scss';

const Header = () => (
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

export default Header;
