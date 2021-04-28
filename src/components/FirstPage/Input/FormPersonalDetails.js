import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FormsLeft from '../../FirstPage/FormsLeft/FormsLeft'
import './FormPersonalDetails.scss'
export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-wrapper">
                <div className="form">
                <h2>Бесплатная регистрация</h2>
                <div className="form-input">
                    <label htmlFor="email">Введите ваш email</label>
                    <input type="text"
                    className="form-control" name="email"
                    onChange={inputChange('email')}
                    value={values.email}
                    placeholder="Enter you email address"
                    
                    />
                </div>
                 <label className="label" htmlFor="phone">Введите ваш номер телефона</label>
                <div className="form-phone">
                   
                    <input type="text"
                    className="pair-one"
                    name="phone" onChange={inputChange('phone')}
                    value={values.phone}
                    placeholder="998"
                    
                    />
                   
                    <input type="text" className="form-control"
                    name="number" onChange={inputChange('phone')}
                    value={values.phone}
                    placeholder="97 772 13 44"
                    />
                </div>

               

                <p>
                     Нажимая на кнопку «Получить доступ», я даю согласие <br/> на обработку персональных данных и соглашаюсь c
                     условиями  <span>договора-оферты и политикой <br/> конфиденциальности</span> 
                </p>

                

               
                <div className="row">
                    <div className="col-6">
                         <button className="button" onClick={this.back}>
                             <img src="img/back.svg" alt=""/>
                         </button>
                    </div>
                    <div className="col-6">
                         <button className="button-two" onClick={this.continue}>Получить доступ</button>
                    </div>
                </div>

                <div className="login">
                     <div className="inputs">
                     <input type="text"/>
                     <span>или</span>
                     <input type="text"/>
                     </div>
                     <Link to="/"className="text-bottom">
                         Войдите в систему, если у вас уже есть <br/> аккаунт kivi.u    
                     </Link>
                </div>
               
            </div>
            <FormsLeft/>

            </div>




        )
    }
}

export default FormPersonalDetails

