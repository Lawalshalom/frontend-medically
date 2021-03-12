import { Layout } from 'antd';
import DashboardMenu from '../components/DashboardMenu';
import DashboardRouter from '../dashboard-router';

const Dashboard = () => {
  return (
    <Layout>
      <Layout.Content className="full-height">
        <DashboardRouter />
      </Layout.Content>
      <Layout.Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="full-height bg_primary"
      >
        <DashboardMenu />
      </Layout.Sider>
    </Layout>
  );
};

export default Dashboard;
