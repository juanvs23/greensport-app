import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../config/firebaseInit';
import { newUser } from '../../interfaces';


export default async function signInLoginUser(user:newUser){

    const Auth=getAuth (app)

    
    try {

      const signIn=await signInWithEmailAndPassword(Auth,user.email,user.password)
        if(signIn){
            return {color:'#34bc81',info:['Login success']}       
        }

        
    } catch (error:any) {
          let errors:string[]=[]
      console.log(error.code)
        if(error.code==='auth/wrong-password'){
            errors.push('Password is incorrect')
        }
        if(error.code==='auth/user-not-found'){
            errors.push('User not found')
        }
        
        return {color:'#e24f4f',info:errors}
    }
}