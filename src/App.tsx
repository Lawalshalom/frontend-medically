import { Home } from './components/home/index';
import { SignUp } from './components/signUp/index';
import { Login } from './components/login/index';
import { ContinueSignUp } from './components/continueSignUp/index';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App: React.FC = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/continue-signup" component={ContinueSignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default App;
