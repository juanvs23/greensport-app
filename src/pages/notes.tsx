
import { GetloginState } from '../features/login/getLoginState';
import { theCurrentUser } from '../interfaces';

import Layout from './../components/layout';
export default function NotesPage(  ) {
    const  isLogin:theCurrentUser|null=GetloginState ()
   
    let name=(isLogin)?isLogin.displayName:'user'
    return(<Layout pageTitle={`Note's ${name}`} >


    </Layout>)
}