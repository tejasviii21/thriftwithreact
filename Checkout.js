 import React from 'react';
 import "./Checkout.css";
 import Subtotal from "./Subtotal";
 
 function Checkout() {
   return (
     <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="https://assets.website-files.com/634681057b887c6f4830fae2/6367ddbacb0f6854d6761d26_6259f75092f8771540932252_Focus-Books-min.png"  alt=""/>
            <div>
                <h2 className="checkout_title">Your Book Basket</h2>
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
            </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>
            
        </div>
       
     </div>
   );
   
 }
 
 export default Checkout
 