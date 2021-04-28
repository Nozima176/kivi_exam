import React from 'react'
import './Top.scss'
function Top({ img, time, price, title}) {
    return (
        <div>
            
            <div className="top-card">
                <img src={img} alt=""/>
                <h4>{title}</h4>
                <span>{time}</span>
                <h2>{price}</h2>
            </div>
        </div>
    )
}

export default Top

