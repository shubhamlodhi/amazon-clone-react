import React from 'react';
import './Home.css';
import Product from "./Product";
function Home(){
    return (
        <div className="home">
            

            <img 
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg" 
            alt="" 
            />

            {/* Product ID, Product title, price , rating, image */}
            <div className="home__row">
            <Product
            id="12321341"
            title="The Lean Start Up"
            price="11.96"
            rating= {5}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            />
            <Product
            id="12321341"
            title="The Lean Start Up"
            price="11.96"
            rating= {5}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            />
            
            </div>
            {/* Product */}

            <div className="home__row">
            <Product
            id="12321341"
            title="The Lean Start Up"
            price="11.96"
            rating= {5}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            />
            <Product
            id="12321341"
            title="The Lean Start Up"
            price="11.96"
            rating= {5}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            />
            <Product
            id="12321341"
            title="The Lean Start Up"
            price="11.96"
            rating= {5}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            />
            </div>

            <div className="home__row">
            <Product
            id="12321341"
            title="The Lean Start Up"
            price="11.96"
            rating= {5}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            />
            
            </div>
            



        </div>
    );
}

export default Home;
