import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="mobileImage.jpg" alt="mobile" />
                </div>
                <div className='text-wrapper item'>
                    <span>Iphone</span>
                    <span>Price: 1000$</span>
                </div>
                <div className='btn-wrapper item'>
                    <button  onClick={
                        ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                        }>Add to cart</button>
                         <button className='remove-cart-btn' onClick={
                        ()=>{props.removeToCartHandler()}
                        }>Remove to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home