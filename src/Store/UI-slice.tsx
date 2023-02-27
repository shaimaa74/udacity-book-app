import { createSlice } from '@reduxjs/toolkit';

const initialState = { errorMsg: '' };
const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showError(state, action) {
      state.errorMsg = action.payload.errorMsg;
    },
    resetError: () => initialState
  },
});

export const UIActions = UISlice.actions;

export default UISlice;