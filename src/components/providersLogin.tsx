import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppSelectorColorTheme } from "../features/colorTheme/colorThemeSelector"
import {providers,Colors} from '../interfaces/index'
import googleProvider from "../services/auth/googleProvider"


const ProvidersWrapper=styled.div <{colors:Colors }>`

    margin-top: 20px;
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap:10px;
    button{
        appearance: none;
    font-family: 'DM Sans';
    border: 2px solid ${props=>props.colors.textColorPrimary};
    padding: 6px;
    font-size: 1rem;
    border-radius:10px;
    color:${props=>props.colors.textColorPrimary};
    background:${props=>props.colors.backgroundColorPrimary};
    transition:0.3s;
    &:hover{
        color:${props=>props.colors.backgroundColorSecondary};
        background:${props=>props.colors.activeLinkColor};
    }
    cursor:pointer;
    }

`

const GoogleButton=styled.button<{colors:Colors }>`

    
   i{
    background:linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
   }
`
export default function Providers(props:providers) {
    let navigate = useNavigate();
    const colorMode =AppSelectorColorTheme();
    
    const providerByGoogle=async()=>{
        const  login =await  googleProvider()
   
        
        if(login.info[0]==='login success' || login.info[0]==='Register success'  ){
         setTimeout(()=>{
        
           navigate('/',{replace:true})
        },3000)
        }
     
       }
   
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
       
  
    return(<>
    <ProvidersWrapper  colors={colorMode.themeColor}>
   {props.google?  <GoogleButton 
                    colors={colorMode.themeColor} 
                    onClick={ providerByGoogle}> 
                        <i className="bi-google"></i>  
                    &nbsp;&nbsp;
                        {props.googleText}
                    </GoogleButton>:''
    }
    </ProvidersWrapper>
    </>)
}