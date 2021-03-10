import { Layout, } from 'antd';
import { useHistory } from 'react-router';
import DashboardMenu from './DashboardMenu';

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
        content
      </Layout.Content>
    </Layout>
  )
}

export default Dashboard;
