import {Link }from 'react-router-dom'
import styled from 'styled-components'
import { AppSelectorColorTheme } from '../features/colorTheme/colorThemeSelector'
import { Colors } from '../interfaces/index';

const ButtonsWrapper=styled.div<{colors:Colors}>` 

    display: flex;
    gap: 20px;
  align-items:center;
  button{
    appearance: none;
    border: none;
    font-size: 18px;
    padding: 20px 32px;
    border-radius: 25px;
    color:white;
    font-family: 'DM Sans', sans-serif;
    background: rgb(13,78,211);
    background: linear-gradient(246deg, rgba(13,78,211,1) 63%, rgba(35,107,254,1) 93%);
    transition:0.5s;
    cursor:pointer;
    &:hover{
        box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
        background:rgba(35,107,254,1);
    }
  }
  a{
    font-family: 'DM Sans', sans-serif;
    text-decoration:none;
    padding: 20px 32px;
    color:${props=>props.colors.textColorPrimary};
  }
`
interface ToAction{
    actionButton:()=>void,
    textButton:string,
    textLink:string,
    toUrl:string
}

export default function ButtonLogins(props:ToAction){
    const {actionButton,
        textButton,
        textLink,
        toUrl}=props
    const colorMode =AppSelectorColorTheme ()
    const handlerButton=()=>{
        actionButton()
    }
    return(<ButtonsWrapper colors={colorMode.themeColor} className="buttonsWrapper">
    <button onClick={  handlerButton }>{textButton}</button> 
            <Link to={toUrl}>{textLink}</Link>
    </ButtonsWrapper>)
}