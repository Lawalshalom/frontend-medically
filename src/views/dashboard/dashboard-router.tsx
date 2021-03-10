import {
  Switch,
  Route,
} from "react-router-dom";
import QuickAccess from "./pages/QuickAccess";

const DashboardRouter = () => {
  return (
    <Switch>
      <Route path="/">
        <QuickAccess />
      </Route>
    </Switch>
  )
}

export default DashboardRouter;
