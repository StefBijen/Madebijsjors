import React from 'react';
import './productData.css'


const ProductData = () => {
  return (
    <div>
      <main class="container">

        <div class="left-column">
          <img data-image="red" class="active" src="images/armbanden/Rood_hardjes.jpg" alt=""></img>
        </div>
        <div class="right-column">
          <div class="product-description">
            <span>Bracelet</span>
            <h1>Love</h1>
            <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
          </div>
          <div class="product-configuration">
            <div class="product-color">
              <label for="cars">Hand size:</label>
              <br></br>
              <select name="cars" id="cars">
                <option value="10cm">10cm</option>
                <option value="15cm">15cm</option>
                <option value="mercedes">20cm</option>
                <option value="audi">25cm</option>
              </select>
            </div>
            <div class="cable-config">
              <br></br>
            </div>
          </div>
          <div class="product-price">
            <span>€5,-</span>
            <a href="#" class="cart-btn">Add to cart</a>
          </div>
        </div>
      </main>
    </div>
  )
};
export default ProductData;