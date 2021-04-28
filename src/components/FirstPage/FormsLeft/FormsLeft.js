import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './FormsLeft.scss'
export class FormsLeft extends Component {
    render() {
        return (
            <div>
                <div className="img-section">
                    <img className="bgi" src="img/form-img.png" alt=""/>
                    <Link to="/form"><img className="group" src="img/Group.png" alt=""/></Link>
                    
                </div>
            </div>
        )
    }
}

export default FormsLeft
