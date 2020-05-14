import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';

import Search from './Search';
import Favourites from './Favourites';

const TabContainer = styled.div`
  padding-top: 1em;
`;

function Home() {
  return (
    <Container>
      <Tabs defaultActiveKey="search" id="uncontrolled-tab-example">
        <Tab eventKey="search" title="Search">
          <TabContainer>
            <Search />
          </TabContainer>
        </Tab>
        <Tab eventKey="favourites" title="Favourites">
          <TabContainer>
            <Favourites />
          </TabContainer>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Home;
