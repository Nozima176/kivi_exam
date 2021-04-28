import React, { Component } from 'react'
import './FormPersonalDetails.scss'
export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
        const { values: {name, last, age, phone, email, city, occopation, password}
        
        } = this.props;

        return (
            <div className="form-container">
                <ul className="list-group">
                    <li className="list-group-item">First Name: {name}</li>
                    <li className="list-group-item">Last Name: {last}</li>
                    <li className="list-group-item">Age: {age}</li>
                    <li className="list-group-item">Number: {phone}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Password: {password}</li>
                    <li className="list-group-item">City: {city}</li>
                    <li className="list-group-item">Occupation: {occopation}</li>
                </ul>
                <br/>
                <div className="row">
                    <div className="col-6">
                         <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6">
                         <button className="btn btn-primary" onClick={this.continue}>Confirm</button>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Confirm;