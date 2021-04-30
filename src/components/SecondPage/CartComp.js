import React from 'react'
import './CartComp.scss'
function CartComp({ img, title, numberone, numbertwo, data, buttonone, buttontwo, stat, spanone, spantwo, spanthree}) {
    return (
        <div>
            <div className="cartCompItems-wrapper">
                <div className="up-section">
                    <div className="up-one">
                        <img src={img} alt=""/>
                        <h3>{title}</h3>
                    </div>
                

                    <div className="numbs">
                        <span>{numberone}</span> 
                      
                        <span>{numbertwo}</span>
                    </div>

                    <div className="datas">
                        <span>{data}</span>
                        <span>{data}</span>
                        <span>{data}</span>
                    </div>

                    <div className="send-button">
                        <img src="img/upgreen.svg" alt=""/>
                        <button>{buttonone}</button>
                    </div>

                    <div className="send-buttonTwo">
                         <img src="img/upblue.svg" alt=""/>
                        
                        <button>{buttontwo}</button>
                    </div>

                    <div className="more-infos">
                        <img src="img/dot.svg" alt=""/>
                        <img src="img/dot.svg" alt=""/>
                        <img src="img/dot.svg" alt=""/>
                    </div>


                </div>

                <div className="down-section">
                    <div className="bottom-links">
                    <p className="stat">
                        {stat}
                    </p>
                    <span>{spanone}</span>
                    <span>{spantwo}</span>
                    <span>{spanthree}</span>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartComp
