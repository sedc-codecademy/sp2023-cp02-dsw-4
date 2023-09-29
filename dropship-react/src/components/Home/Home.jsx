import React from 'react'
import Stars from '../Stars/Stars'

function Home() {
    return (
        <div>
            <Stars id="uniqueid1" initialRating={.5} />
            <hr />
            <Stars id="uniqueid2" initialRating={4.5} />
        </div>
    )
}

export default Home