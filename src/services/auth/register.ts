import {app} from '../../config/firebaseInit'
import {newUser} from '../../interfaces/index'
import { getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { getFirestore,doc, setDoc } from "firebase/firestore";



export default async function registerUser(user:newUser) {

    const Auth=getAuth(app)
    const db=getFirestore(app)
    try {
        const createUser=await createUserWithEmailAndPassword(Auth,user.email,user.password)

            let userRegistred=createUser.user.uid
            
         await setDoc(doc(db, "users",  userRegistred), {
                mode: "light",
                like: [],
                dislike: []
              });

        if (Auth.currentUser) {
             await updateProfile(Auth.currentUser, {
                 displayName: "User", photoURL: ""
               })
            }
        return {color:'#34bc81',info:['Register success']}   
    } catch (error:any) {
          let errors:string[]=[]
       console.log(error.code)
        if(error.code==='auth/email-already-in-use'){
            errors.push('Email already in use')
        }
        
        return {color:'#e24f4f',info:errors}
    }
}