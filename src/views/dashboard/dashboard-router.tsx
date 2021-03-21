import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { dashBoardPaths } from "../../constants";
import InstantConsultPage from "./pages/InstantConsult";
import QuickAccess from "./pages/QuickAccess";

const DashboardRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact component={QuickAccess} />
      <Route path={`${path + dashBoardPaths.INSTANT_CONSULT}`} component={InstantConsultPage} />
    </Switch>
  )
}

export default DashboardRouter;
