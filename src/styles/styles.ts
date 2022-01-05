import { createGlobalStyle } from "styled-components"

import { theme } from "../interfaces"


export const GlobalStyles=createGlobalStyle`
html,body{
    over-flow-x:"hidden";
    font-size:18px;
    margin:0;
    font-family: 'Epilogue', sans-serif;
}
h1,h2,h3,h4,h5,h5{
    font-family: 'DM Sans', sans-serif;
    margin:0;
 
}
a{
    font-size:18px;
}

h1{
    font-size:2.3rem;

}
h2{
    
    font-size:1.89rem;
}
h3{
    
    font-size:1.55rem;
}
h4{
    
    font-size:1.34rem;
}
h5{
    
    font-size:1.1rem;
}
h6{
    font-size:1rem;
}

*{
    box-sizing: border-box;
  }
`




 const themesColor:theme={
 
    
        dark:{
         textColorPrimary:'#FEFEFE',   
         textColorSecondary:'#FEFEFE',   
         backgroundColorPrimary:'#181828',
         backgroundColorSecondary:'#2F2F43',
         activeLinkColor:'#fff'
        },
        light:{
          textColorPrimary:'#161617',   
         textColorSecondary:'#232232',   
         backgroundColorPrimary:'#E5E5E5',
         backgroundColorSecondary:'#ffffff',
         activeLinkColor:'#1A5BE1'
        }
   
} 
export default themesColor