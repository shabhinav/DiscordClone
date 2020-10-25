import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName:null,
  },
  reducers: {
    setChannelId: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.app +=action.payload;
    },
  },
});

export const { setChannelId} = appSlice.actions;

export const selectChannelId = state => state.app.channelId;
export const selectChannelName=state=>state.app.channelName

export default appSlice.reducer;
