import React from 'react'

import ProductList from '../Product/ProductList/ProductList'
// import Stars from '../Stars/Stars'

function Home() {
    return (
        <>
            <div>Home</div>
            {/* <Stars initialRating={2} id={"jk312bjk3"}></Stars>
            <Stars initialRating={3.5} id={"jk312bjjfgk3"}></Stars> */}
            <ProductList></ProductList>
        </>
    )
}

export default Home