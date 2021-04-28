import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FormsLeft from '../../FirstPage/FormsLeft/FormsLeft'
import './FormUserDetails.scss'
export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    render() {
        const { values, inputChange } = this.props;

        return (
           
           
           <div className="wrapper">
               
                <div className="form-container">
                    <p className="titleInput">Бесплатная регистрация</p>
                    <div className="form-group">
                        {/* <label htmlFor="name">First Name</label> */}
                        <input type="text"
                        className="form-control"
                        name="name"
                        onChange={inputChange('name')}
                        value={values.name}
                        placeholder="Enter your name"
                        />
                    </div>







                        <div className="text-right">
                         <button className="btn btn-primary" onClick={this.continue}>Далее</button>
                        </div>

                        <div className="login">
                         <div className="inputs">
                         <input className="input" type="text"/>
                         <span>или</span>
                         <input className="input" type="text"/>
                         </div>
                         <Link to="/"className="text">
                             Войдите в систему, если у вас уже есть <br/> аккаунт kivi.uz

                         </Link>
                        </div>
                </div>

                <FormsLeft/>



            </div>



        )
    }
}

export default FormUserDetails

