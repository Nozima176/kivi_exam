import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FormsLeft from '../../FirstPage/FormsLeft/FormsLeft'
import './FormPassword.scss'
export class FormPassword extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    
    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="wrapper-form-items">
                <div className="form-fields">
               <h2>Бесплатная регистрация</h2>
               <p>Код отправлен в виде смс на указанный <br/> номер телефона</p>
                <label htmlFor="phone">Введите email или номер телефона</label>
                <div className="form-items">
                   
                    <input type="text" className="form-num" name="phone" onChange={inputChange('phone')} value={values.phone}
                    placeholder="998 97 772 13 44"/>
                     <input type="text" className="form-sss" name="sss" onChange={inputChange('name')} value={values.name}
                     placeholder="90s"/>
                </div>
                <div className="form-item">
                    <input type="text" className="form-pass" name="password" onChange={inputChange('password')}
                    value={values.password}
                    placeholder="Введите код подтверждения"
                    />
                </div>
                <br/> 

                

               
                <div className="row2">
                   
                    <div className="text-right">
                         <button className="btn btn-primary" onClick={this.continue}>Далее</button>
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
               
            </div>

            <FormsLeft/>
            </div>
        )
    }
}

export default FormPassword