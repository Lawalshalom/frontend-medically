import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InstantConsultPage from './pages/InstantConsult';
import QuickAccess from './pages/QuickAccess';

const DashboardRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact component={QuickAccess} />
      <Route path={`${path}/instant-consult`} component={InstantConsultPage} />
    </Switch>
  );
};

export default DashboardRouter;
