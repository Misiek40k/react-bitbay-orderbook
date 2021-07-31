import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from 'data/dataStore';

import Section from 'components/common/Section/Section';
import ListWrapper from 'components/features/ListWrapper/ListWrapper';

const ContentContainer = () => {
  return (
    <main>
      <Grid>
        <Row>
          <Col xs>
            <Section
              title={settings.contentContainer.title}
              Content={ListWrapper}
            />
          </Col>
        </Row>
      </Grid>
    </main>
  );
};

export default ContentContainer;
