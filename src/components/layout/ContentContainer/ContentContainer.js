import { Grid, Row, Col } from 'react-flexbox-grid';

import Section from 'components/common/Section/Section';
import ListWrapper from 'components/features/ListWrapper/ListWrapper';

const ContentContainer = () => {
  return (
    <main>
      <Grid>
        <Row>
          <Col xs>
            <Section
              Content={ListWrapper}
            />
          </Col>
        </Row>
      </Grid>
    </main>
  );
};

export default ContentContainer;
