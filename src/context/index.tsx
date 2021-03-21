import { createContext, FC } from 'react';
import authService from './services/auth.service';
import relativeService from './services/relative.service';
import apiService from './services/api.service';

const defaultStoreValues = {
  auth: authService,
  relative: relativeService,
  api: apiService,
};

export const StoreContext = createContext(defaultStoreValues);

const StoreProvider: FC = props => {
  return (
    <StoreContext.Provider value={defaultStoreValues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
