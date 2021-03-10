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
import { Terms } from './views/terms';
import { Privacy } from './views/privacy';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
