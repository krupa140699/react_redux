import React from 'react'

function Header(props) {
    return (
        <div>
            <div className='add-to-cart'>
                <span className="cart-count">{props.data.length}</span>

                <img alt='cart' src='cartImage.png' />
            </div>
        </div>
    )
}

export default Header