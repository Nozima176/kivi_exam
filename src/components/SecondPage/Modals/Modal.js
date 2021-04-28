import React from 'react'
import './Modal.scss'
function Modal() {
    return (
        <div>
            <div className="container-slider">
                <ul className="slider">
                    <li id="slide1"><img src="img/img1.svg" alt=""/></li>
                    <li id="slide2"><img src="img/img2.svg" alt=""/></li>
                    <li id="slide3"><img src="img/img3.svg" alt=""/></li>
                    <li id="slide4"><img src="img/img4.svg" alt=""/></li>
                    <li id="slide5"><img src="img/img5.svg" alt=""/></li>
                    {/* <li id="slide6"><img src="img/slide6.png" alt=""/></li> */}
                </ul>

                <ul className="thmbnails">
                    <li>
                        <a href="#slide1"> <img src="img/img1.svg" alt=""/></a>
                    </li>
                     <li>
                        <a href="#slide2"> <img src="img/img2.svg" alt=""/></a>
                    </li>
                     <li>
                        <a href="#slide3"> <img src="img/img3.svg" alt=""/></a>
                    </li>
                     <li>
                        <a href="#slide4"> <img src="img/img4.svg" alt=""/></a>
                    </li>
                     <li>
                        <a href="#slide5"> <img src="img/img5.svg" alt=""/></a>
                    </li>
                    {/* <li>
                        <a href="#slide6"> <img src="img/slide6.png" alt=""/></a>
                    </li>
                     */}

                </ul>   
            </div>
        </div>
    )
}

export default Modal
