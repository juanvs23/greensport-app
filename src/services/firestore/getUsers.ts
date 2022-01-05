import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../config/firebaseInit";




export  default async function getUSersData(){
    
const querySnapshot = await getDocs(collection(firestoreDB, "users"));
let Users:Array<object>=[]
querySnapshot.forEach((doc) => {
    let user={
        id:doc.id,
        data:doc.data()
    }
  Users.push(user)
});
return Users
} 