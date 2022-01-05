import styled from "styled-components";
import { alertProps } from '../interfaces/index';


const AlertComponent=styled.div<{color:alertProps["color"]}>`
background:${props=>props.color};
color:#ffffff;
font-family: 'DM Sans', sans-serif;
padding:10px 20px;
margin-bottom:10px;
max-width:300px;
`

const Alert =(props:alertProps)=>{
  return (<AlertComponent color={props.color} >
      {props.message}
  </AlertComponent>)

}

export default Alert