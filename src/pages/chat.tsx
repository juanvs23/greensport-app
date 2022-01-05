import { GetloginState } from '../features/login/getLoginState';
import { theCurrentUser } from '../interfaces';
import Layout from './../components/layout';
export default function ChatPage(){
    const  isLogin:theCurrentUser |null=GetloginState ()
  
   
    let name=(isLogin)?isLogin.displayName:'user'
    return(<Layout pageTitle={`Chat's ${name}`}  >
        
    </Layout>)
}