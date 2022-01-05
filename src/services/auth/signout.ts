
import { getAuth, signOut } from 'firebase/auth';

export default async function signoutFunction(): Promise<any>{
    const auth = getAuth();

    try{
        const signOuting= await  signOut(auth)
        
        return signOuting
    }catch(error){
        return error
    }


}