import { createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    scrollPosition: 0,
    cloudAppearPosition: 0,
  },
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
    setCloudAppearPosition: (state, action) => {
      state.cloudAppearPosition = action.payload;
    },
  },
});

export const { setScrollPosition, setCloudAppearPosition } = scrollSlice.actions;
export default scrollSlice.reducer;
