import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import {Colors} from '../interfaces'
import { AppSelectorColorTheme } from '../features/colorTheme/colorThemeSelector'
import CardsDeck from '../components/cardsDeck'

const HomeWrapper= styled.section<{colors:Colors}>`
h1{
    width: 100%;
  text-align:center;  
}
`

export default function Home() {
    const colorMode= AppSelectorColorTheme ();
    return (
        <Layout pageTitle={'home'}>
   <HomeWrapper colors={colorMode.themeColor} >
   <h1>Select yours favorite sports</h1>
   <CardsDeck/>
   </HomeWrapper>

    </Layout>
    )
}

 
