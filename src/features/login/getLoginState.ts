import { useAppSelector } from "../../app/hooks";

export const GetloginState=()=>{
    let loginState= useAppSelector((state)=>state.login.user)
    return loginState
}