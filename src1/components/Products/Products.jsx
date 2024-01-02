import React, { useEffect, useState } from 'react'

const Products = () => {
    const [data, setData] = useState([])
    
    useEffect(()=> {
        fetch("htt ps://fakestoreapi.com/products")
            .then(res => res.json())
            .then()
    })
  return (
    <>
    
    </>
  )
}

export default Products