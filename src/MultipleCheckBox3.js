import React, { Component } from 'react'
import './MultipleCheckBox.scss'
export class MultipleCheckBox3 extends Component {

    state={
        Colornames:{
            qqq:false,
            second:false,
            third:false,
            four:false,
            five:false,
            six:false,
            seven:false,
            eigth:false
        }
    }
    checkClick = (e) => {
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
                        Отопление
                    </h4>
                    <div className="form-inputs" >
                             
                            <div>
                                <input type="checkbox" name="ooo" id="ooo" onChange={this.checkClick}/>
                            <label htmlFor="ooo">Центральное</label>
                            </div>
                            
                           <div>
                                <input type="checkbox" name="second" id="ppp" onChange={this.checkClick}/>
                            <label htmlFor="ppp">На жидком топлив</label>
                           </div>
                            <div>
                                
                            <input type="checkbox" name="third" id="aaa" onChange={this.checkClick}/>
                            <label htmlFor="aaa">Без отопления</label>
                            </div>
                    </div>

                    <div className="form-inputs">
                            
                            <div>
                                <input type="checkbox" name="four" id="ddd" onChange={this.checkClick}/>
                            <label htmlFor="sss">На газе</label>
                            
                            </div>
                            <div>
                                <input type="checkbox" name="five" id="fff" onChange={this.checkClick}/>
                            <label htmlFor="fff">Электрическое</label>
                            </div>
                            
                    </div>

                    <div className="form-inputs">
                             
                           <div>
                                <input type="checkbox" name="seven" id="hhh" onChange={this.checkClick}/>
                            <label htmlFor="hhh">На твердом топливе</label>
                           </div>
                            
                           <div>
                                <input type="checkbox" name="eight" id="jjj" onChange={this.checkClick}/>
                            <label htmlFor="jjj">Смешанное</label>
                           </div>
                   
                    </div>
                    {/* <div style={{backgroundColor: "black", color: "cyan"}}>
                        {displaySports+" "}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default MultipleCheckBox3;
