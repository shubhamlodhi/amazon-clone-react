import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className = "checkout">
            kya baat
            {basket?.length === 0
            ?(
                <div >
                    <h2>
                        Your basket is empty
                    </h2>
                </div>
            )
            :(
                <div>
                    {/* <h2>
                        Your Shopping basket
                    </h2> */}
                    {basket.map(item =>(
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
                )
            }

        </div>
    );
}

export default Checkout;
