import styled from 'styled-components';
import { AppSelectorColorTheme } from './colorThemeSelector';
import {Colors} from '../../interfaces'
import {ReactComponent as Sun} from '../../assets/sun.svg'
import {ReactComponent as Moon} from '../../assets/moon.svg'
import { useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from './colorSlice';



const Button=styled.button`

    appearance: none;
    border: none;
    padding: 13px 16px;
    border-radius: 18px;
    transition:0.3s;
    &:hover{
        opacity:0.8;
    }
cursor:pointer;
`
const ColorTheme=styled.div<{colors:Colors}>`
position: fixed;
    left: 25px;
    top: 25px;
    button {
       
        background:${props=>props.colors.backgroundColorSecondary};
       
    }
    @media (min-width:992px){
        left: auto;
    top: 25px;
    right: 25px;
    }
`

export default function ColorThemeSelector() {
    const colorMode =AppSelectorColorTheme ();
    const dispatch= useDispatch()
    function handlerColors(){
        if(colorMode.theme==='light'){
            dispatch(setDarkTheme())
        }else{
              dispatch (setLightTheme())
          
        }
    }
return(
    <ColorTheme colors={colorMode.themeColor} > <Button onClick={handlerColors} >{colorMode.theme==='light'?  <Sun/>:<Moon/> }</Button> </ColorTheme>
)
    
}