import React, { useEffect, useState } from "react";
import { context } from "../Context/ContextHook";
import { useContext } from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { count } = useContext(context);

  const navigate = useNavigate();
  const location = useLocation();


    const toCart = () => {
      navigate("/cart");
      
    };

    const toHome=()=>{
      navigate("/");
     
    }

  

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logoname">Sri Krishna Cafe</span>
      </div>

    {location.pathname === "/" ?
        <div className="nav-cart cart" onClick={toCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 cart-img"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <span className="cart-size">
          {count.length !== 0 ? count.length : null}
        </span>
      </div> 
      :
      <div className="nav-cart home" onClick={toHome}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 cart-img"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </div> 
    
  
  }
   
      
    </nav>
  );
};

export default Nav;
