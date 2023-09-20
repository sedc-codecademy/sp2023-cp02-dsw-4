import React from 'react';
import { useSelector } from "react-redux";

import {  selectProducts } from '../../../store/selectors/productSelector';
import ProductCard from '../ProductCard/ProductCard';
function BestSelers() {
    const allProducts = useSelector(selectProducts);

    const bestSelers = allProducts.filter(product => product.rating.rate>=4); 
    
    // // Define the styles for the ProductCard

    return (
        <>
        <h2 style={{textAlign:'center'}}>Best Selers</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-evenly'  }}>
            {bestSelers.map((product)=>(
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </>
    );
}

export default BestSelers;