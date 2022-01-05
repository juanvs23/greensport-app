import { createSlice } from '@reduxjs/toolkit'


import { ColorTheme } from '../../interfaces'
import { RootState } from '../../app/store';
import themesColor from '../../styles/styles';


const initialState:ColorTheme={
    theme:'light',
    themeColor: themesColor.light
}

 const ColorThemeSlice=createSlice({
    name:'color',
    initialState,
    reducers:{
        setLightTheme:(state)=>{
            state.theme='light'
            state.themeColor=themesColor.light
        },
        setDarkTheme:(state)=>{
            state.theme='dark'
            state.themeColor=themesColor.dark
        }
    }
})
export  const selectColorTheme=(state:RootState)=>state.colorTheme
export const { setLightTheme, setDarkTheme }=ColorThemeSlice.actions

export default ColorThemeSlice.reducer