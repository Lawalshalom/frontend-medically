
import StoreProvider from "./context";
import MainRouter from "./router";

const App = () => (
  <StoreProvider>
    <MainRouter />
  </StoreProvider>
);

export default App;
