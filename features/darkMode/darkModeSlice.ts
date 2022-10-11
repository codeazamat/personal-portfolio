import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface DarkModeState {
  isDarkMode: boolean
}

const initialState: DarkModeState = {
  isDarkMode: false
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    }
  }
})

export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer
