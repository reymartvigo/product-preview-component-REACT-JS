import React from "react";
import mobileImg from "./image/image-product-mobile.jpg";
import desktopImg from "./image/image-product-desktop.jpg";
import cartImg from "./image/icon-cart.svg";

const Card = () => {
  return (
    <>
      <div className="main">
        <div className="product">
          <img
            className="mobile"
            src={mobileImg}
            alt=""
            aria-hidden="true"
          ></img>
          <img
            className="desktop"
            src={desktopImg}
            alt=""
            aria-hidden="true"
          ></img>
        </div>

        <div className="item-container">
          <p className="perfum">PERFUME</p>
          <div className="product-details">
            <h1>Gabrielle Essense Eau De Perfum</h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <div className="price-container">
              <h2>$144.99</h2>
              <p>$169.99</p>
            </div>

            <button className="add-to-cart">
              <img src={cartImg} alt="" aria-hidden="true"></img>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
