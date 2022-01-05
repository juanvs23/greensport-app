import React from "react"
import getCards from "../services/cards/getCards"

export default function CardsDeck() {

    React.useEffect(()=>{
        let cards= getCards()
        cards.then(res=>console.log(res))
        
    })
    return(<section>
    
    </section>)
}