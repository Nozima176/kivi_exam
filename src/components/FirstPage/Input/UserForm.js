
import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import FormPassword from './FormPassword';
import Login from './Login';
export class UserForm extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        password: '',
        
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({step: step + 1});
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1});
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }
    render() {
        const { step } = this.state;
        const { name, last, age, email, phone, password, city, occopation, instagram } = this.state;
        const values = { name, last, age, email, phone, password, city, occopation, instagram };
        switch(step) {
            case 1:
                return(
                    <FormUserDetails
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                
                        //name
                    />
                )
            case 2:
                return(
                   <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                     values={values}
                   
                        //email phone
                   /> 
                ) 
            case 3: 
                return(
                    <FormPassword
                        nextStep={this.nextStep}
                       
                        inputChange={this.inputChange}
                        values={values}
                        //phone password
                    
                    />
                )
            case 4: 
                return(
                    <Login
                         nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                   
                    />  
                    
                )


           
            default:
        }
       
    }
}

export default UserForm
