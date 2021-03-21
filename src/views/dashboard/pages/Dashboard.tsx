import { Modal, Layout, } from 'antd';
import DashboardMenu from '../components/DashboardMenu';
import Onboarding from '../components/OnboardingModal';
import DashboardRouter from '../dashboard-router';
import { useContext, useState } from 'react';
import { StoreContext } from '../../../context';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { pathNames } from '../../../constants';

const Wrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden
`;


const ContentWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;

  @media screen and (max-width: 500px){
    width: 100vw;
  }
`;

const Dashboard = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const hideOnboardingScreen = () => setShowOnboarding(false);

  const { auth } = useContext(StoreContext);

  if (!auth.isLoggedIn && !auth.checkActiveUserSession()) {
    return <Redirect to={pathNames.login} />
  };

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
        <Layout.Content
          className="full-height"
        >
          <ContentWrapper>
            <DashboardRouter />
          </ContentWrapper>
        </Layout.Content>
      </Layout>
      <Modal visible={showOnboarding} closable={false} footer={null}>
        <Onboarding hideOnboardingScreen={hideOnboardingScreen} />
      </Modal>
    </Wrapper>
  )
}

export default Dashboard;
