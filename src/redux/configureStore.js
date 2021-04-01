import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const configure = initialState =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    ...(initialState ? { initialState } : {}),
  });

export default configure;
