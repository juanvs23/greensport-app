import React from "react";
import {Helmet} from "react-helmet";
import styled from "styled-components";
import ColorThemeSelector from '../features/colorTheme/colorThemeSelectorButton'
import { AppSelectorColorTheme } from "../features/colorTheme/colorThemeSelector";
import { GetloginState } from "../features/login/getLoginState";
import { LayoutAppProps,Colors } from "../interfaces";
import SideMenu from "./sidemenu";


const LayoutStyle=styled.div<{colors:Colors}>`
background-color:${props=>props.colors.backgroundColorPrimary};
color:${props=>props.colors.textColorPrimary};
min-height:100vh;
width:100%;
@media (min-width:992px){
   main.active{
      margin-left:250px;
   }
}
`


export default function Layout({children,pageTitle}:LayoutAppProps){
    const isLogin= GetloginState()
    const colorMode =AppSelectorColorTheme()
    
    const active=isLogin?'active':''

        return(<LayoutStyle colors={colorMode.themeColor} >
        <Helmet>
                <title>
                   {pageTitle}
                </title>
            </Helmet>
       
           <main className={active} >
              <ColorThemeSelector />
           {children}
           </main>
          <SideMenu /> 
        </LayoutStyle>)
   
      
} 