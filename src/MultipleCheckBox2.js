import React, { Component } from 'react'
import './MultipleCheckBox.scss'

export class MultipleCheckBox2 extends Component {

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
                        Состояние дома
                    </h4>
                    <div className="form-inputs">
                             
                           <div>
                                <input type="checkbox" name="qqq" id="qqq" onChange={this.checkClick}/>
                            <label htmlFor="qqq">Авторский проект</label>
                           </div>
                            
                            <div>
                                <input type="checkbox" name="second" id="www" onChange={this.checkClick}/>
                            <label htmlFor="www">Требует ремонта</label>
                            </div>
                            
                            <div>
                                <input type="checkbox" name="third" id="eee" onChange={this.checkClick}/>
                            <label htmlFor="eee">Черновая отделка</label>
                            </div>
                    </div>

                    <div className="form-inputs">
                            
                    <div>
                        <input type="checkbox" name="four" id="rrr" onChange={this.checkClick}/>
                     <label htmlFor="rrr">Средний ремонт</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" name="five" id="ttt" onChange={this.checkClick}/>
                    <label htmlFor="ttt">Предчистовая отделка</label>
                    </div>
                    
                   <div>
                        <input type="checkbox" name="six" id="yyy" onChange={this.checkClick}/>
                    <label htmlFor="yyy">Под снос</label>
                   </div>
                    </div>

                    <div className="form-inputs">
                             
                    <div>
                        <input type="checkbox" name="seven" id="uuu" onChange={this.checkClick}/>
                    <label htmlFor="uuu">Евроремонт</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" name="eight" id="iii" onChange={this.checkClick}/>
                    <label htmlFor="iii">Не достроен</label>
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

export default MultipleCheckBox2;
