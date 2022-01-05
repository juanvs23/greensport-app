import {setLightTheme, setDarkTheme,selectColorTheme} from './colorSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks';


export const AppSelectorColorTheme=()=>{
return useAppSelector(selectColorTheme)
}

export default function ColorThemeSelector(mode:string){
   const dispatch=useAppDispatch()
  
    if(AppSelectorColorTheme().theme==='light'){
        dispatch(setDarkTheme())
    }else{
        dispatch(setLightTheme())
    }
}




