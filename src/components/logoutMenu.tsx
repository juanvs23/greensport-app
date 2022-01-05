
import  React  from 'react';
import  styled  from 'styled-components';
import { GetloginState } from '../features/login/getLoginState';
import { ReactComponent as UserImage } from '../assets/user.svg';
import { theCurrentUser,Colors } from '../interfaces';
import { AppSelectorColorTheme } from '../features/colorTheme/colorThemeSelector';
import { NavLink } from 'react-router-dom';
import signoutFunction from '../services/auth/signout';


const LogoutMenuWrapper=styled.div<{colors:Colors }>`
    display:flex;
    position:relative;
    aling-items:center;
    justify-content:center;
    ul.tooplip-menu.active{
        display:block;
    }
    ul.tooplip-menu {
        display:none;
        position: absolute;
        background:${props=>props.colors.backgroundColorSecondary};
        margin: 0;
        padding-inline-start: 0;
        border-radius: 10px;
        list-style: none;
        top: -78px;
        right:-10px;
        box-shadow: 0 0 7px 0 black;
        @media(min-width:992px){
            top: -9px;
    right: -182px;
        }
        li{
           
            width:170px;
            
            a,button{
                display:block;
                padding: 10px 25px;
                width:100%;
                border:none;
                background:none;
                font-family: 'Epilogue';
                font-size:18px;
                cursor:pointer;
    font-weight: 700;
    text-decoration: none;
    text-align:center;
                color:${props=>props.colors.textColorPrimary};
                &:hover{
                    color:${props=>props.colors.activeLinkColor};
                }
            }
        }

        
    }
   button.profile{
    appearance: none;
    border:none;
    background: none;
    display:flex;
    aling-items:center;
    justify-content:center;
    cursor:pointer;
   
    svg{
        height: 50px;
        width: 50px;
        
        fill:${props=>props.colors.textColorPrimary} !important;
        &:hover{
            fill:${props=>props.colors.activeLinkColor} !important; 
        }
        
    }
    img {
        border-radius: 50%;
        border: 3px solid ${props=>props.colors.textColorPrimary};
        height: 50px;
    width: 50px;
    object-fit:cover;
    object-position:center;
    &:hover{
        border: 3px solid ${props=>props.colors.activeLinkColor};
        
    }

    }
}
button.profile.active{
    svg{
   
            fill:${props=>props.colors.activeLinkColor} !important; 
        
   
    }
}
button.profile.active{
    img{
        border: 3px solid ${props=>props.colors.activeLinkColor};
        
    }
}
button.profile.active:after,button.profile:hover:after {
  transform:rotate(228deg);
  @media(min-width:992px){
    transform:rotate( 316deg);
}
}
button.profile:after {
    transition:0.3s;
    content: "";
    height: 7px;
    width: 7px;
    border-left: 2px solid ${props=>props.colors.textColorPrimary};
    border-top: 2px solid ${props=>props.colors.textColorPrimary};
    transform: rotate(45deg);
    margin-top: 20px;
    margin-left: 3px;
    @media(min-width:992px){
        transform: rotate(
            136deg);
    }
}
`
export default function LogoutMenu() {
    const [active,setActive]=React.useState(false)
    const colorMode =AppSelectorColorTheme ()
    const getDataProlile:theCurrentUser | null =GetloginState()
    console.log(getDataProlile)
    function activeMenu(){
         if(active){setActive(false) }else {setActive(true)}

    }
    function handlerSignOut(){
        signoutFunction()
    }
    const isActive=active?'active':''
   if(getDataProlile){
        let { photoURL,displayName,email}=getDataProlile
        let name=displayName?displayName:'user'
        let displayPhoto=photoURL?photoURL:null
        let displayEmail=email?email:'no asigned'
        return(<LogoutMenuWrapper colors={colorMode.themeColor}>
            <button className={`${isActive} profile` } onClick={activeMenu} >{photoURL?<img src={ photoURL } alt={name} />:<UserImage/>}</button>
           <ul className={`tooplip-menu ${isActive}`} >
            <li> <NavLink to='/profile' >Profile</NavLink> </li>
            <li> <button onClick={handlerSignOut}>Cerrar sesión</button> </li>
           </ul>
        </LogoutMenuWrapper>)
    
    } else{
        return(
            <div></div>
        )
    }
}