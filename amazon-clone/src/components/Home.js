import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        
     <div className='home__container'>
        <img className='home__image'
            src=' https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt='home page image'
        >
        
        </img>
         
         
         <div className='home__row'>
             
             <Product 
               id="91645"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
               price={518}
               rating={3}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
             />
             
             <Product 
               id="89555"
               title="Bajaj GX 1 Mixer Grinder,500W Titan Motor,3 Jars,2 in 1 Function Blade,Blue"
               price={11639}
               rating={5}
              //  image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
               image="https://m.media-amazon.com/images/I/51X-amaOBHL._SX679_.jpg"
             />

         </div>
         
         <div className='home__row'>
             
            <Product
                id="4903850"
                title="Fitbit Inspire 3 Health & Fitness Tracker (Midnight Zen/Black) with 6-Month Premium Membership"
                price={8549}
                rating={4}
                // image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                image="https://m.media-amazon.com/images/I/61AeGQhwjxL._SX679_.jpg"
            />

            <Product
                title="Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Black"
                id="4909856"
                price={6999}
                rating={4}
                // image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                image="https://m.media-amazon.com/images/I/61dgl2srHDL.jpg"
            />

         </div>

         <div className='home__row'>
             
            <Product
                id="490545"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation) :"
                price={89}
                rating={2}
                image=" https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />

            <Product
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                id="4909895"
                price={99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />

         </div>

     </div>
   
    </div>
  )
}

export default Home