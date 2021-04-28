import React from 'react'
import { Link} from 'react-router-dom'
import './CardS.scss'
function Card({ img, title, price, time}) {
    return (
        <div>
            <div className="card">
                
                <Link to="/single">
                   <img src={img} alt=""/>
                   <h4 className="title">{title}</h4>
                    <span className="time">{time}</span>
                    <h3 className="amount">{price}</h3>
                </Link>
                    
                

            </div>
        </div>
    )
}

export default Card
