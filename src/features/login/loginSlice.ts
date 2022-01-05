import { createSlice, PayloadAction } from '@reduxjs/toolkit'


import { userLogin } from '../../interfaces'



const loginInitialState:userLogin={
     user: null
}

export const loginSlice=createSlice({
    name:'login',
    initialState:loginInitialState,
    reducers:{
        loginState:(state,action: PayloadAction<object>)=>{
            state.user=action.payload        
        },
        logoutState:(state)=>{
            state.user=null
        }
    }
})

export const  {loginState, logoutState } = loginSlice.actions




export default loginSlice.reducer