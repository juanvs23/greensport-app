import React from 'react'


import Layout from './../../components/layout';
import  styled  from 'styled-components';

import {Colors,alertMessageObject} from '../../interfaces'
import { AppSelectorColorTheme } from '../../features/colorTheme/colorThemeSelector';
import { useNavigate } from 'react-router-dom';
import ButtonLogins from '../../components/buttonlogins';
import { checkInfo } from '../../services/helpers/validate';
import AlertWrapper from '../../components/alertWrapper';
import signInLoginUser from '../../services/auth/singIn';
import Providers from '../../components/providersLogin';


const LoginSection= styled.section<{colors:Colors }>`

width:100%;
height:100vh;
display:flex;
justify-content: center;
align-items:center;
.text-content {
    text-align: center;
}
.wraper{
    padding: 32px;
    max-width:390px;
    border-radius:26px;
    @media(min-width:768px){
        background:${props=>props.colors.backgroundColorSecondary};
      
    box-shadow: 0 2px 5px 0px rgb(0 0 0);
        .form-item{
            position: relative;
            margin-bottom: 15px;
            background-color:${props=>props.colors.backgroundColorPrimary};
            color:${props=>props.colors.textColorPrimary};
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius:18px;
            border: 1px solid #ccc;

          }
    }
}
.form-item{
    position: relative;
    margin-bottom: 15px;
    background-color:${props=>props.colors.backgroundColorSecondary};
    color:${props=>props.colors.textColorPrimary};
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius:18px;
  }
  .form-item input{
    display: block;
    width: 100%;
    height: 60px;
    background: transparent;
    border: none;
    transition: all .3s ease;
    padding: 20px 15px 10px 15px;
    border-radius:18px;
    font-size:18px;
  }
  .form-item input:focus{
    border-color: 
  }
  .form-item label{
    position: absolute;
    cursor: text;
    z-index: 2;
    top: 6px;
    left: 10px;
    font-size: 14px;
    font-weight: bold;
   opacity:0.4;
    padding: 0 5px;
    color:${props=>props.colors.textColorSecondary};
    transition: all .3s ease;
  }
  .form-item input:focus + label,
  .form-item input:valid + label{
    font-size: 11px;
    
    
  }
  
  .form-item .input + label{
    color:${props=>props.colors.textColorSecondary};
   
  }
  .form-item input:focus-visible{
        outline:none;
  }
`

export default function LoginPage() {
    let navigate = useNavigate ();
    const colorMode =AppSelectorColorTheme ();
    const emailRef=React.useRef<HTMLInputElement>(null);
    const passRef=React.useRef<HTMLInputElement>(null);
    const [errors,setError]=React.useState<alertMessageObject>({})

    const register=async()=>{
      const email= emailRef.current?.value
      const password=passRef.current?.value

     let info:object={
        email,
        password
     }
     let validate=await checkInfo(info)
      if (typeof validate[0]==='string' || typeof validate[1]==='string') {
        setError({color:'#e24f4f',info:validate})

    
      }else{
          if (typeof email==='string' && typeof password==='string') {
              const registering:alertMessageObject|void =await signInLoginUser({email,password})  
              console.log(registering);
             if (registering) {
                setError(registering)
                if (registering.color==='#34bc81') {
                 setTimeout(()=>{
                    navigate('/',{replace:true})
                 },3000)
                } 
             }
        } 
      }
     setTimeout(()=>{
        setError({})
    },4000) 
    }
    

    
    return (
        <Layout pageTitle='Login | Green Sports'>
         <LoginSection colors={colorMode.themeColor} >

             <div className="wraper">
             <div className="text-content">
                 <h1>
                 Welcome
                 </h1>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 </p>
             </div>
             <div className="form">
             <div className="form-item">
                 {errors.info?<AlertWrapper color={errors.color} info={errors.info} />:''}
    <input type="email" id="correo"  ref={emailRef}  required/>
    <label htmlFor="correo">Email</label>
  </div> 
             <div className="form-item">
                <input type="password" ref={passRef} id="password" autoComplete="off" required/>
                <label htmlFor="password">Password</label> 

            </div>
          

             </div>
         <ButtonLogins 
         actionButton={register}
         textButton='Login'
         textLink='Sign in'
         toUrl='/auth/register'
         />
         <Providers 
         googleText={'Sing in'} 
         google={true}
         />
         </div>
         </LoginSection>
        </Layout>
    )
}


