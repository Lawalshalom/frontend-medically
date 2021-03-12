import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from './views/dashboard';
// import { Home } from './views/home';
import { Login } from './views/login';
import { Register } from './views/register';
import { About } from './views/about';
import { Contact } from './views/contact';
import { Terms } from './views/terms';
import { Privacy } from './views/privacy';
import { ChooseSubscription } from './views/chooseSubscription';
import { AddRelative } from './views/addRelative';
import { DoctorDetails } from './views/doctorDetails';

import { pathNames } from './constants';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={pathNames.home} exact>
          <Redirect to={pathNames.login} />
        </Route>
        <Route path={pathNames.register}>
          <Register />
        </Route>
        <Route path={pathNames.login}>
          <Login />
        </Route>
        <Route path={pathNames.dashboard}>
          <Dashboard />
        </Route>
        <Route path={pathNames.about}>
          <About />
        </Route>
        <Route path={pathNames.contact}>
          <Contact />
        </Route>
        <Route path={pathNames.terms}>
          <Terms />
        </Route>
        <Route path={pathNames.privacy}>
          <Privacy />
        </Route>
        <Route path={pathNames.addRelative}>
          <AddRelative />
        </Route>
        <Route path={pathNames.chooseSubscription}>
          <ChooseSubscription />
        </Route>
        <Route path={pathNames.doctorDetails}>
          <DoctorDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
