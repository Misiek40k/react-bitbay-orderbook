import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import Logo from '../../common/Logo/Logo';
import logoSrc from '../../../assets/logo.svg';

import styles from './Header.module.scss';

const Header = () =>{

  const logoProps = {
    src: logoSrc,
    alt: settings.logoIconAlt,
  };

  return (
    <header className={styles.component}>
      <Grid>
        <Row>
          <Col xs>
            <Logo {...logoProps}/>
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

export default Header;
