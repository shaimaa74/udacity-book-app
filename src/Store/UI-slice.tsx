import { createSlice } from '@reduxjs/toolkit';

const UISlice = createSlice({
  name: 'ui',
  initialState: { error: {errorMsg: ''} },
  reducers: {
    showError(state, action) {
      state.error = {
        errorMsg: action.payload.errorMsg
      };
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice;