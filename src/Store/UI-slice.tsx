import { createSlice } from '@reduxjs/toolkit';

const UISlice = createSlice({
  name: 'ui',
  initialState: { errorMsg: '' },
  reducers: {
    showError(state, action) {
      state.errorMsg = action.payload.errorMsg;
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice;