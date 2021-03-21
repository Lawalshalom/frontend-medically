import { FC } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const LoaderWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #00000094;
`;

const FullScreenLoadingIndicator: FC = () => {
  return (
    <LoaderWrapper>
      <Spin />
    </LoaderWrapper>
  );
}

export default FullScreenLoadingIndicator;
