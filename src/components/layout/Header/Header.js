import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from 'data/dataStore';

import Logo from 'components/common/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
  const logoProps = {
    src: settings.header.logoSrc,
    alt: settings.header.logoAlt,
  };

  return (
    <header className={styles.component}>
      <Grid>
        <Row>
          <Col xs>
            <Logo {...logoProps} />
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

export default Header;
