import { Layout, } from 'antd';
import { useHistory } from 'react-router';
import DashboardMenu from '../components/DashboardMenu';
import DashboardRouter from '../dashboard-router';

const Dashboard = () => {
  const history = useHistory();

  return (
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
        <DashboardRouter />
      </Layout.Content>
    </Layout>
  )
}

export default Dashboard;
