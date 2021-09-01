import { Grid, Row, Col } from 'react-flexbox-grid';
import { data } from 'data/dataStore';

import Logo from 'components/common/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
  const logoProps = {
    src: data.header.logoSrc,
    alt: data.header.logoAlt,
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
