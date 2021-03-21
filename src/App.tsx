import StoreProvider from './context';
import MainRouter from './router';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <StoreProvider>
    <MainRouter />
  </StoreProvider>
);

export default App;

serviceWorker.register();
