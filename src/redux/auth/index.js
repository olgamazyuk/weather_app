import { createSlice } from '@reduxjs/toolkit';

import initialState, * as handlers from './handlers';

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: handlers.authenticate,
  },
});

export const { actions } = auth;

export default auth.reducer;
