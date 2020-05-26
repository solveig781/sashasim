import React from 'react';
import styled from 'styled-components';

import { Col } from 'components';

const MyPage = styled(Col)`
  width: 100%;
  height: 100%;

  background: blue;
`;

function Index() {
  return <MyPage>Puk!</MyPage>;
}

export default Index;
