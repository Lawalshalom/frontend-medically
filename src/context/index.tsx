import { createContext, FC } from 'react';
import authService from './services/auth.service';
import relativeService from './services/relative.service';


const defaultStoreValues = {
  auth: authService,
  relative: relativeService
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
