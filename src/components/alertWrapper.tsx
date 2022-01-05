import Alert from "./alert";
import { alertMessageObject } from '../interfaces/index';
import styled from "styled-components";

const Wrapper=styled.div`
position:fixed;
top:20px;
right:20px;
`

 const AlertWrapper=(props:alertMessageObject)=> {
 
   return(<Wrapper>
       {
          props.info?  props.info.map((alert,i)=>{
              const text:(string|boolean)= alert 
           if (typeof text==='string' ) {
            return <Alert key={i} color={props.color} message={text} />
           }
          }):null
       }
   </Wrapper>)
}
export default AlertWrapper