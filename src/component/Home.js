import React, { useEffect } from "react";
import { foodItems } from "../FoodItems/AddItems";
import {useNavigate } from "react-router-dom";
import { context } from "../Context/ContextHook";
import { useContext } from "react";

const Home = () => {


  const{cart,setCart,setCount} = useContext(context);




  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    setCart(storedCartItems);
  }, []);


  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cart));
    
  }, [cart]);

  useEffect(()=>{
    const local = JSON.parse(sessionStorage.getItem("cartItems"))
    setCount(local)
  },[cart])

  const addToCart = (product) => {
    
    const productExists = cart.find(item => item.id === product.id);

    if (productExists) {

      alert("Item already Exist")
      const updatedCartItems = cart.map(item =>
        item.id === product.id ? { ...item }  : item 
        
      );

      setCart(updatedCartItems);
    } else {
      
      alert("Item Added")
      const newCartItem = { ...product };
      setCart([...cart, newCartItem]);
      
    }
    
  };


 


  return (
    <div className="home-page">
        <main className="menu-div">
          {foodItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.src} alt="no image" className="food-img" />

              <button className="addtocart" onClick={() => addToCart(item)}>
                Add
              </button>

              <div className="menu-name">
                <p>
                  <b>{item.name}</b>
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </main>
    </div>
  );
};

export default Home;
