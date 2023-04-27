import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://iili.io/H8Wjr6N.jpg"
          alt="By The Minute"
        />

        <div className="home__row">
          <Product
            id="49530909"
            title="Plantegg's-Plant-Based Egg Protein in Masala Omelette Form "
            price={350}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Pv+JTcIRL._SX679_.jpg"
          />
          <Product
            id="49530934"
            title="Fortune Oil, 1 L Pouch Premium Kachi Ghani Pure Mustard"
            price={135}
            rating={3}
            image="https://m.media-amazon.com/images/I/51+KKothPzL.jpg"
          />
          <Product
            id="49530956"
            title="Eatopia 100% Pure Litchi Natural Honey from Himalayas NMR Tested Honey - 500 g"
            price={549}
            rating={4}
            image="https://m.media-amazon.com/images/I/61FvoEZJxJL._SX679_.jpg"
          />
          <Product
            id="49530951"
            title="Quaker Oats 1kg, Rolled Oats Natural Wholegrain, Nutritious Breakfast Cereals, Dalia Porridge, Easy to Cook"
            price={174}
            rating={4}
            image="https://m.media-amazon.com/images/I/51gfDSwFBwL._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49530922"
            title="Fresh Produce Sprouts Mixed 200 g Pack"
            price={174}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NVeN5bvzL._SX679_.jpg"
          />
          <Product
            id="49530956"
            title="Fresh Potato, 1kg"
            price={22}
            rating={4}
            image="https://m.media-amazon.com/images/I/313dtY-LOEL.jpg"
          />
          <Product
            id="49530956"
            title="Fresh Beans French, 250g"
            price={19}
            rating={3}
            image="https://m.media-amazon.com/images/I/71xBN6MxBJL._SX679_.jpg"
          />
          <Product
            id="49530959"
            title="Fresh Onion, 1kg"
            price={23}
            rating={3}
            image="https://m.media-amazon.com/images/I/619D1OTIYnL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49530921"
            title="Amul Buttery Spread - Garlic and Herbs, 100g Pack"
            price={54}
            rating={4}
            image="https://m.media-amazon.com/images/I/81-H33-YstL._SX679_.jpg"
          />
          <Product
            id="49530954"
            title="Fresh Produce Sweet Corn Peeled 200 g Pack"
            price={120}
            rating={4}
            image="https://m.media-amazon.com/images/I/71KJ3S5TYYL._SX679_.jpg"
          />
          <Product
            id="49530967"
            title="Tata Salt Lite | 15% Low Sodium Salt | Reduce Sodium For Active Health | Lite Namak | 1kg Pouch"
            price={44}
            rating={3}
            image="https://m.media-amazon.com/images/I/61GHekNSesL._SX679_.jpg"
          />
          <Product
            id="49530999"
            title="Kellogg's Corn Flakes Original | Power of 5: Energy, Protein, Iron, Calcium, Vitamins B1, B2, B3 & C| Corn Flakes, Breakfast Cereal"
            price={310}
            rating={3}
            image="https://m.media-amazon.com/images/I/71C21Qn5HUL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?₹300x400_retinamobilex2₹"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903823"
            title="Tygot 10 Inches Big LED Ring Light for Camera, Phone tiktok YouTube Video Shooting and Makeup Lightweight Tripod Stand"
            price={649}
            rating={3}
            image="https://m.media-amazon.com/images/I/61YAs1cH9xL.SX679.jpg"
          />
          <Product
            id="23445945"
            title="Samsung Galaxy M14 5G (Berry Blue, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | 12GB RAM with RAM Plus | Android 13 | Without Charger"
            price={16500}
            rating={5}
            image="https://m.media-amazon.com/images/I/91HRACirFrL.SX679.jpg"
          />
          <Product
            id="3254354465"
            title="Fire-Boltt Visionary  AMOLED Bluetooth Calling Smartwatch Sports Mode, TWS Connection, Voice Assistance"
            price={3799}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t7akoVjzL.SX569.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4905423"
            title="Boult Audio Truebuds with 30H Playtime, IPX7 Waterproof, Made in India, Type C Fast Charging (10Min=100Mins), Rich Bass, Pro+ Calling HD Mic, IPX5 Airbass Bluetooth True Wireless Earbuds (Grey)"
            price={1099}
            rating={3}
            image="https://m.media-amazon.com/images/I/31bUanm+oRL.SY300_SX300.jpg"
          />
          <Product
            id="23445995"
            title="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling"
            price={1799}
            rating={5}
            image="https://m.media-amazon.com/images/I/61y2VVWcGBL.SX569.jpg"
          />
          <Product
            id="3254354875"
            title="pTron Studio Pixel Over-Ear Wireless Gaming Headphones with 30ms Low Latency, 40Hrs Playtime, 40mm Drivers, Punchy Bass, BT5.3, with Mic HD with ENC & Type-C Fast Charging (Black)"
            price={1099}
            rating={4}
            image="https://m.media-amazon.com/images/I/51Y7SIK68KL.SX569.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={20099}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL.AC_SX450.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
