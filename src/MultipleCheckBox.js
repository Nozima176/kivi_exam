import React, { Component } from 'react'
import './MultipleCheckBox.scss'
export class MultipleCheckBox extends Component {

    state={
        Colornames:{
            first:false,
            second:false,
            third:false,
            four:false,
            five:false,
            six:false,
            seven:false,
            eigth:false
        }
    }
    checkBoxClick = (e) => {
        let {name, checked} = e.target;
        this.setState((e) => {
            let selectedSport=e.Colornames;
            return selectedSport[name]=checked;
        })
    }
    
    render() {

        // let displaySports=Object.keys(this.state.Colornames).filter((x)=> this.state.Colornames[x])
        return (
            <div>
                <div>
                    <h4>
                        Расположение*
                    </h4>
                    <div className="form-inputs">
                             
                        <div>
                            <input type="checkbox" name="first" id="foo" onChange={this.checkBoxClick}/>
                            <label htmlFor="foo">В городе</label>
                        </div>
                        
                        <div>
                            <input type="checkbox" name="second" id="bar" onChange={this.checkBoxClick}/>
                            <label htmlFor="bar">Вдоль трассы</label>
                        </div>
                        
                        <div>
                            <input type="checkbox" name="third" id="coo" onChange={this.checkBoxClick}/>
                            <label htmlFor="coo">В дачном массиве</label>
                        </div>
                    </div>

                    <div className="form-inputs">
                           <div>
                                <input type="checkbox" name="four" id="voo" onChange={this.checkBoxClick}/>
                            <label htmlFor="voo">В пригороде</label>
                           </div>
                            
                            <div>
                                <input type="checkbox" name="five" id="var" onChange={this.checkBoxClick}/>
                            <label htmlFor="var">Возле водоема, реки</label>
                            
                            </div>
                            <div>
                                <input type="checkbox" name="six" id="vvoo" onChange={this.checkBoxClick}/>
                            <label htmlFor="vvoo">На закрытой территории</label>
                            </div>
                    </div>

                    <div className="form-inputs">
                             
                            <input type="checkbox" name="seven" id="boo" onChange={this.checkBoxClick}/>
                            <label htmlFor="boo">В сельской местности</label>
                            
                            <input type="checkbox" name="eight" id="bcar" onChange={this.checkBoxClick}/>
                            <label htmlFor="bcar">В предгорьях</label>
                   
                    </div>
                    {/* <div style={{backgroundColor: "black", color: "cyan"}}>
                        {displaySports+" "}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default MultipleCheckBox
