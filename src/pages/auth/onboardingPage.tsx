import React from 'react'
import CardsDeck from '../../components/cardsDeck'
import  styled  from 'styled-components';

import Layout from '../../components/layout';
import {Colors} from '../../interfaces'
import { AppSelectorColorTheme } from '../../features/colorTheme/colorThemeSelector';
import { useNavigate } from 'react-router-dom';
import ButtonLogins from '../../components/buttonlogins';


const OnboardingWrapper= styled.div<{colors:Colors }>`
width:100%;
height:100vh;
display:flex;
justify-content:center;

.calltoaction {
  
    min-height: 346px;
    border-radius: 36px;
    background: white;
    padding: 32px;
    max-width:390px;
    background-color:${props=>props.colors.backgroundColorSecondary};
    color:${props=>props.colors.textColorPrimary};
    @media (min-width:768px){
            
    }
   
}
`
export default  function OnboardingPage() {
    let navigate = useNavigate();
    const colorMode =AppSelectorColorTheme ()
    function toLogin(){
        navigate('/auth/login',{replace:true})
    }

    return (
        <Layout pageTitle={'Green Sport | unete a nuestra red social'}>
            <OnboardingWrapper colors={colorMode.themeColor}>
         <div className="wrap">
         <CardsDeck/>
         <div className='calltoaction'>
             <h2>Discover Your Best
Sport With Us</h2>
<p className="text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

         <ButtonLogins 
         actionButton={toLogin}
         textButton='Login'
         textLink='Sign in'
         toUrl='/auth/register'
         />
         </div>
         </div>
        </OnboardingWrapper>
        </Layout>
    )
}


