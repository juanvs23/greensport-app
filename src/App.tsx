import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

import Home from './pages/home';
import About from './pages/About';
import LoginPage from './pages/auth/loginPage';
import RegisterPage from './pages/auth/registerPage';
import OnboardingPage from './pages/auth/onboardingPage';

import { GetloginState } from './features/login/getLoginState';
import { app } from './config/firebaseInit';
import loginServices from './services/auth/login';
import { useAppDispatch } from './app/hooks';
import { loginState, logoutState } from './features/login/loginSlice';
import { setDarkTheme, setLightTheme } from './features/colorTheme/colorSlice';
import HistoryPage from './pages/history';
import NotesPage from './pages/notes';
import ChatPage from './pages/chat';
import ProfilePage from './pages/profile';




function App() {
  const [loading,setLoading]=React.useState(false)
  const  isLogin=GetloginState()
  const auth = getAuth(app)
  const dispatch= useAppDispatch()
  const navigate=useNavigate()
  React.useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    setLoading(true)
    if(user){
    console.log(user);

    loginServices(user).then(res=>{
     
      if (typeof res ==='object'){
        setLoading(false)
        dispatch(loginState(res))
        if(res.mode==='light'){
          dispatch(setLightTheme())
        }else{
        dispatch(setDarkTheme())
        
      }
      }
    })
  }else{
    setLoading(false)
    dispatch(setLightTheme())
    dispatch(logoutState ()) 
    navigate('/',{replace:true})
  } 
   })
 // eslint-disable-next-line react-hooks/exhaustive-deps
 return()=>{
  setLoading(false)
 }
 },[dispatch,auth])
 
 

  return (
   
    <Routes>
      {isLogin? <Route path="/" element={<Home/>} />:  <Route path="/" element={<OnboardingPage/>} /> }
     {isLogin? <Route path="/about" element={<About/>} />:null }
     {isLogin? <Route path="/history" element={<HistoryPage/>} />:null }
     {isLogin? <Route path="/profile" element={<ProfilePage />} />:null }
     {isLogin? <Route path="/notepad" element={<NotesPage />} />:null }
     {isLogin? <Route path="/chat" element={< ChatPage />} />:null }
     
     {isLogin===null? 
      <Route path="/auth/register" element={<RegisterPage/>} />:null}

{isLogin===null? <Route path="/auth/login" element={<LoginPage/>} />:null}
      
      
    </Routes>
  
 );
}






export default App;
