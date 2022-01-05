import styled  from 'styled-components';
import { AppSelectorColorTheme } from '../features/colorTheme/colorThemeSelector';
import { GetloginState } from '../features/login/getLoginState';
import {ReactComponent as House} from '../assets/house-simple-fill 1.svg'
import {ReactComponent as History} from '../assets/timer-fill 1.svg'
import {ReactComponent as Rocket} from '../assets/rocket-launch-fill 1.svg'
import {ReactComponent as NotePad} from '../assets/notepad-fill 1.svg'
import { Colors } from '../interfaces';
import { NavLink } from 'react-router-dom';
import LogoutMenu from './logoutMenu';

const Header = styled.header<{colors:Colors}>`
position:fixed;
box-shadow: 0 0 8px 3px #0000293d;
nav{
    a,a:visited{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:59px;
        transition:0.3s;
        color:${props=>props.colors.textColorPrimary};
        svg path{
           fill:${props=>props.colors.textColorPrimary} !important;  
        }
    }
    a.active,a:hover{
        background:${props=>props.colors.backgroundColorPrimary};
        color:${props=>props.colors.activeLinkColor};
        border-radius:16px;
       
        svg path{

            fill:${props=>props.colors.activeLinkColor} !important;
        }
    }
}

background:${props=>props.colors.backgroundColorSecondary};
@media(max-width:991px){
    height:85px;
    bottom:20px;
    left:20px;
    right:20px;
    border-radius:24px;
    display:flex;
    padding: 15px;
    justify-content: space-evenly;
    align-items: center;
    nav{
        display: grid;
    grid-template-columns: repeat(4,auto);
    gap: 5px;
    width: 100%;
        a{
           
            span{
                display:none;
            }
           
        }
        a.active{
            background:${props=>props.colors.backgroundColorPrimary};
            height:59px;
            border-radius:16px;
            svg path{
                fill:${props=>props.colors.activeLinkColor} !important;
            }
        }
    }
}
@media (min-width:992px){
    width: 240px;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    flex-flow: column;
    gap: 11px;
    padding: 10px;
    justify-content: center;
    nav{
        height:80%;
        display:flex;
        flex-flow: column;
        justify-content: center;
        gap: 11px;
        a{
            font-family: 'Epilogue';
    font-weight: 700;
    text-decoration: none;
 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

        }
        a.active{
            font-family: 'Epilogue';
            font-weight: 700;
            text-decoration: none;
        }
    }
}
`

export default function SideMenu(){
    const colorMode =AppSelectorColorTheme()
    const isLogin= GetloginState()
  
   if (isLogin) {
    return(  
        <Header colors={colorMode.themeColor}>
            <nav className="nav-wrapper">
                <NavLink to="/" className="sidemenu"  > <House/> <span>Home</span></NavLink>
                <NavLink to="/history" className="sidemenu"  > <History/> <span>history</span></NavLink>
                <NavLink to="/chat" className="sidemenu"  > <Rocket/> <span>Chat</span></NavLink>
                <NavLink to="/notePad" className="sidemenu"  > <NotePad/> <span>Notes</span></NavLink>
               
            </nav>
            <LogoutMenu />
        </Header>
    )
   } else {
     return null  
   }

}