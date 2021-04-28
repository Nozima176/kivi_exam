import React, { Component } from 'react'

export class Success extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    render() {
      
        
        return (
            <div>
                <h1 className="text-white"> Your Account created Successfully! <br/>
                Good Job Man!(claps)</h1>

                <div className="row">
                   
                    <div className="col-6">
                         <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Success
