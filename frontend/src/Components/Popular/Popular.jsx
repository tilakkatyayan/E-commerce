import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'/*Imports the product data from a local file. This data is assumed to be an array of objects, where each object represents a product. */
import Item from '../Item/Item'/**Imports the Item component, which is used to display individual product details. */
const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {/** data_product.map((item, i) => { ... }): Iterates over the data_product array using the map function. 
                 * For each item in the array, it returns an Item component.*/}
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                })}
            </div>
        </div>
    )
}

export default Popular
