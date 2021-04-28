import React, { Component } from 'react'
import  { Link} from 'react-router-dom'
import FormsLeft from '../FormsLeft/FormsLeft';
import './Login.scss'
export class Login extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    
    render() {
        const { values, inputChange } = this.props;

        return (
           <div className="wrapper-item-inputs">
                <div className="form-container">
               
               <h2>Ваша регистрация завершена!</h2>

                <p>Вы успешно зарегистрированы на сайте <br/> киви и ваше пароль отправлен в виде <br/> смс на ваше телефонный номер</p>
                <div className="form-group-inputs">
                        <label htmlFor="number">Введите email или номер телефона</label>
                        <input type="text"
                        className="form-control"
                        name="number"
                        onChange={inputChange('phone')}
                        value={values.phone}
                        placeholder="Enter your number"
                        />
                </div>

                <div className="form-group-inputs">
                    <label htmlFor="password">Пароль</label>
                    <input type="text"
                    className="form-control"
                    name="password"
                    onChange={inputChange('password')}
                    value={values.password}
                    placeholder="Enter your password"
                    />
                </div>
                
                <br/> 

                <div className="text-right">
                    <Link to="/chartPage" className="login-button" >Войти</Link>
                </div>

                <div className="login">
                    <div className="inputs">
                    <input className="input" type="text"/>
                    <span>или</span>
                    <input className="input" type="text"/>
                    </div>
                    <Link to="/"className="text">
                        Войдите в систему, если у вас уже есть <br/> аккаунт kivi.u
                    </Link>
                </div>

                

               
                
                   
                    
                
               
            </div>

            <FormsLeft/>
           </div>
        )
    }
}

export default Login