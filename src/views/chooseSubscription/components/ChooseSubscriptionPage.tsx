import { Layout } from 'antd';
import DashboardMenu from '../../dashboard/components/DashboardMenu';
import { useContext } from 'react';
import { StoreContext } from '../../../context';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import ChooseSubscription from './ChooseSubscription';

const Wrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const ChooseSubscriptionPage = () => {
  const { auth } = useContext(StoreContext);

  console.log(auth.currentUser);
  console.log(auth.token);

  if (!auth.isLoggedIn && !auth.checkActiveUserSession())
    return <Redirect to="/login" />;

  return (
    <Wrapper>
      <Layout>
        <Layout.Sider
          breakpoint="md"
          collapsedWidth="0"
          className="full-height bg_primary"
        >
          <DashboardMenu />
        </Layout.Sider>
        <Layout.Content className="full-height">
          <ContentWrapper>
            <ChooseSubscription />
          </ContentWrapper>
        </Layout.Content>
      </Layout>
    </Wrapper>
  );
};

export default ChooseSubscriptionPage;
