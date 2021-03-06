import { createContext, FC } from 'react';
import authService from './services/auth.service';


const defaultStoreValues = {
  auth: authService,
}

export const StoreContext = createContext(defaultStoreValues);

const StoreProvider: FC = (props) => {
  return (
    <StoreContext.Provider value={defaultStoreValues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
