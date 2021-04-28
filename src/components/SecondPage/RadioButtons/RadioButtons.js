import React from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap';
function RadioButtons({name}) {
    return (
        <div>
            <div className="buttonsPageWrapper">
               
                   
                   


               

                <div className="section-three">
                    <h4>Расположение*</h4>
                    <div className="checkbox-buttons">
                        <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                    </div>



                    <div className="checkbox-buttons">
                        <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                    </div>


                    <div className="checkbox-buttons">
                        <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         
                    </div>
                    
                </div>

                <div className="section-four">
                    <div>
                        <label htmlFor="high"> Этажность дома*</label>
                        <input type="text" name="high" id="high"/>
                    </div>
                    <div>
                        <label htmlFor="height">Высота потолков</label>
                        <input type="text" name="height" id="height"/>
                    </div>

                     <div>
                         <label htmlFor="width">Площадь участка*</label>
                        <input type="text" name="width" id="width"/>
                    </div>
                </div>

                <div className="section-five">
                    <h4>
                        Состояние дома
                    </h4>

                    <div className="sectionFive-inner">

                        <div className="checkbox-buttons">
                            <div className="chButtons-one">
                                <input type="checkbox" name="check"/>
                                <label htmlFor="check"></label>
                            </div>
                            <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                            </div>
                            <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                            </div>
                        </div>



                        <div className="checkbox-buttons">
                        <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                     </div>


                        <div className="checkbox-buttons">
                        <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         
                        </div>
                    
                    </div>
                </div>



                <div className="section-six">
                    <div>
                        <DropdownButton id="dropdown-basic-button" title="Любая категория" className="dropDownWrapper">
                             <h2>
                             Сум
                             </h2>
                            <div className="drop">
                              <Dropdown.Item href="#/action-1" className="drop__item">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2" className="drop__item">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3" className="drop__item">Something else</Dropdown.Item>
                            </div>
                        </DropdownButton>
                    </div>


                    <div>
                        <DropdownButton id="dropdown-basic-button" title="Любая категория" className="dropDownWrapper">
                             <h2>
                             Сум
                             </h2>
                            <div className="drop">
                              <Dropdown.Item href="#/action-1" className="drop__item">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2" className="drop__item">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3" className="drop__item">Something else</Dropdown.Item>
                            </div>
                        </DropdownButton>
                    </div>

                </div>


                <div className="section-seven">
                    <h4>
                        Состояние дома
                    </h4>

                    <div className="sectionSeven-inner">

                        <div className="checkbox-buttons">
                            <div className="chButtons-one">
                                <input type="checkbox" name="check"/>
                                <label htmlFor="check"></label>
                            </div>
                            <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                            </div>
                            <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                            </div>
                        </div>



                        <div className="checkbox-buttons">
                        <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         
                     </div>


                        <div className="checkbox-buttons">
                        <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         <div className="chButtons-one">
                            <input type="checkbox" name="check"/>
                            <label htmlFor="check"></label>
                        </div>
                         
                        </div>
                    
                    </div>
                </div>

                <div className="section-eight">
                    <div>
                        <span>Электричество</span>
                        <p>Есть возможность подключения</p>
                    </div>
                </div>


                .section 

            </div> 
        </div>
    )
}

export default RadioButtons
