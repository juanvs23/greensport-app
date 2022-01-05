import { app } from "../../config/firebaseInit";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import { getFirestore,  getDoc,setDoc, doc} from "firebase/firestore";



const googleProvider=async():Promise<any>=>{
    const auth= getAuth(app)
    const db=getFirestore(app)
    const provider= new GoogleAuthProvider()
  try {
    const logining=await signInWithPopup(auth,provider)
    let userRegistred=logining.user.uid
     if (userRegistred) {
        const userRegistredRef = doc(db,'users',userRegistred)
        const docSnap = await getDoc(userRegistredRef)
      if (docSnap.exists()) {
          return {color:'#34bc81',info:['login success']}  
      } else {
        await setDoc(doc(db, "users",  userRegistred), {
            mode: "light",
            like: [],
            dislike: []
          });
          return {color:'#34bc81',info:['Register success']}  
      }
     }
     
  } catch (error:any) {
      
      if (error.code) {
        return  {color:'#e24f4f',info:error.code}
      }
  }
}
export default googleProvider

