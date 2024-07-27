import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';


export const context = createContext();

const ContextHook = ({children}) => {

    const [cart, setCart] = useState([]);
    const[count,setCount] = useState(0)

    const sessionStorageValue=JSON.parse(sessionStorage.getItem("cartItems"))
   

    
 
    const content ={
        cart,
        setCart,
        sessionStorageValue,
        count,
        setCount
    }

  return <>
    <context.Provider value={content} >
        {children}
    </context.Provider>
    </>
}

export default ContextHook