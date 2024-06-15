import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);//We created one context and initialized with null
//This context is saved in ShopContext that we are exporting

//Now we will create shopContext provider 

const ShopContextProvider = (props) => {
    const contextValue = {
        //here we will insert any data and functions that will be provided in the ShopContextProvider as a vale 
        //using that we can access these functions and values in any component 
        all_product
    }
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