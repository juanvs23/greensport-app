import {app} from '../../config/firebaseInit'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { User } from 'firebase/auth';





export default async function loginServices(user:User){
   
  
    const db=getFirestore(app)
    try {
        const userRef = doc(db,'users',user.uid)
        const docSnap = await getDoc(userRef)
       
        if (docSnap.exists()) {
            const {displayName,photoURL,email,uid}=user
            const {like,dislike,mode}=docSnap.data()
           const loginUser={
               displayName,
               photoURL,
               email,
               uid,
               like,
               dislike,
               mode
           }
        return  loginUser;
        }
    } catch (error) {
        
    }
}
