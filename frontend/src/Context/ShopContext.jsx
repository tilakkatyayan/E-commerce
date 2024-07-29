import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);//We created one context and initialized with null
//This context is saved in ShopContext that we are exporting


//function of empty cart items
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

//Now we will create shopContext provider 
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart());
    
    //console.log(cartItems)
const addToCart=(itemId)=>{
     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))//... it is spread operator ,setcartitems spreaded the previous state by incrementing cartitems
    //...prev it will copy all key value from existing cart data and then second parameter will increment the value of particular itemid
    //console.log(cartItems);
}

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       }

      const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){//here item is representing key in cart items which is nothing but product id
            if(cartItems[item]>0){ //if quantity of that key(product) is greater than 0
                let itemInfo=all_product.find((product)=>product.id===Number(item)) //this will find that product with the help of key
                totalAmount+=itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
      }

     const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
     }


       const contextValue = {
        //here we will insert any data and functions that will be provided in the ShopContextProvider as a vale 
        //using that we can access these functions and values in any component 
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
             {/**Wraps its children with ShopContext.Provider and passes the contextValue as the value. 
              * This makes the context available to all child components. */}
              {/**Using this we provide ShopContext data to all pages */}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;