import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import Modal from 'react-modal'
// import CheckBox from './components/SecondPage/CheckBox'
// import RadioButtons from './components/SecondPage/RadioButtons/RadioButtons'
import MultipleCheckBox from './MultipleCheckBox'
import MultipleCheckBox2 from './MultipleCheckBox2'
import MultipleCheckBox3 from './MultipleCheckBox3'
import './CheckBoxButton.scss'
function CheckBoxButton() {

    const [modalIsOpen, setIsModalOpen] = useState(false)

    const [dropdown, setDropdown] = useState("Сум");
    const [dropdownTwo, setDropdownTwo] = useState("Сум");
    const [dropdownThree, setDropdownThree] = useState("Сум");
    const [dropdownFour, setDropdownFour] = useState("Ташкент");
    const [dropdownFive, setDropdownFive] = useState("Мирза Улугбекский район");
    const [isChecked, setIsChecked] = useState("Договорная");
    const[inputName, setInputName] = useState(" ");
    const[sectionTwo, setSectionTwo] = useState(" ")
    const[sectionThree, setSectionThree] = useState(" ")
    const[sectionFour, setSectionFour] = useState(" ")
    const[sectionFive, setSectionFive] = useState(" ")
    const[sectionSix, setSectionSix] = useState(" ")
    const[sectionSeven, setSectionSeven] = useState(" ")

    const[sectionEight, setSectionEight] = useState(" ")
    const[sectionNine, setSectionNine] = useState(" ")
    const[sectionTen, setSectionTen] = useState(" ")
    // const [radio, setRadio] = useState("apple");

    function handleData(e) {
        e.preventDefault();
        
    }
    return (
        <div className="checkbox-wrapper">
             {/* <form  onSubmit={handleData}>
                <h1>{dropdown}</h1>
                <h1>{isChecked ? "Договорная" : " " }</h1>
                <h1>{radio}</h1>
                <div>
                    <input type="text" onChange={(e)=>setInputName(e.target.value)}
                    value={inputName}/>
                    <button>submit</button>
                </div>

                <select value={dropdown} onChange={(e) => {setDropdown(e.target.value)} } >
                    <option value="Сум">Сум</option>
                    <option value="Euro">Euro</option>
                    <option value="CY">CYN</option>
                    <option value="Dollar">Dollar</option>
                    <option value="Rubl">Rubl</option>
                    <option value="Dinar">Dinar</option>
                </select>
                <br/>
                    <h6>..............................</h6>
                <label htmlFor="check">coo</label>
                <input type="checkbox" name="" id="check"
                checked={isChecked}
                onChange={(e)=> {setIsChecked(e.target.checked)}}/>
                <br/>

                
                <h5>............................</h5>

                <label htmlFor="app">apple</label>
                <input type="radio" name="app" id="app"
                checked={radio === "apple"}
                value="apple"
                onChange={(e) => {setRadio(e.target.value)}}/>

                 <br/>


                <label htmlFor="ban">banana</label>
                <input type="radio" name="ban" id="ban"
                checked={radio === "banana"}
                value="banana"
                onChange={(e) => {setRadio(e.target.value)}}/>

                 <br/>


                <label htmlFor="org">orange</label>
                <input type="radio" name="org" id="org"
                checked={radio === "orange"}
                value="orange"
                onChange={(e) => {setRadio(e.target.value)}}/> */}
            {/* </form>  */}

























            <div className="buttonsPageWrapper">
                <form  onSubmit={handleData}>

                    <div className="section-one">
                        <div className="sectionOne-input">
                            <label htmlFor="sOne">Цена</label>
                            <input type="text" id="sOne" onChange={(e)=>setInputName(e.target.value)}
                            value={inputName}/>
                        </div>

                        <div>
                            <select value={dropdown} onChange={(e) => {setDropdown(e.target.value)} } >
                            <option value="Сум">Сум</option>
                            <option value="Euro">Euro</option>
                            <option value="CY">CYN</option>
                            <option value="Dollar">Dollar</option>
                            <option value="Rubl">Rubl</option>
                            <option value="Dinar">Dinar</option>
                            </select>
                         
                        </div>

                        <div className="radioButton">
                           
                            <input type="checkbox" name="" id="check"
                            checked={isChecked}
                            onChange={(e)=> {setIsChecked(e.target.checked)}}/>
                            <label htmlFor="check">Договорная</label>
                        </div>


                    </div>



                    <div className="section-two">
                        <div className="three-inputs">
                            <label htmlFor="room">Количество комнат*</label>
                           <input type="text" onChange={(e)=>setSectionTwo(e.target.value)}
                            value={sectionTwo}/>
                        </div>
                        <div>
                            <input type="text" onChange={(e)=>setSectionThree(e.target.value)}
                            value={sectionThree}/>
                        </div>

                        <div>
                            <input type="text" onChange={(e)=>setSectionFour(e.target.value)}
                            value={sectionFour}/>
                        </div>
                    </div>


                    <MultipleCheckBox/>


                    <div className="section-three">
                        <div >
                            <label htmlFor="room">Этажность дома*</label>
                           <input type="text" onChange={(e)=>setSectionFive(e.target.value)}
                            value={sectionFive}/>
                        </div>
                        <div>
                            <label htmlFor="room"> Высота потолков</label>
                            <input type="text" onChange={(e)=>setSectionSix(e.target.value)}
                            value={sectionSix}/>
                        </div>

                        <div>
                            <label htmlFor="room">Площадь участка*</label>
                            <input type="text" onChange={(e)=>setSectionSeven(e.target.value)}
                            value={sectionSeven}/>
                        </div>
                    </div>
                   <MultipleCheckBox2/>

                    <div className="section-four">
                        <div className="fourOne">
                            <div>
                                <span>
                                    Тип дома
                                </span>
                            </div>
                            <select value={dropdownTwo} onChange={(e) => {setDropdownTwo(e.target.value)} } >
                            <option value="Сум">Коттедж</option>
                            <option value="Euro">Euro</option>
                            <option value="CY">CYN</option>
                            <option value="Dollar">Dollar</option>
                            <option value="Rubl">Rubl</option>
                            <option value="Dinar">Dinar</option>
                            </select>
                         
                        </div>
                        <div className="fourTwo">
                            <div>
                                <span>
                                    Электричество
                                </span>
                            </div>
                            <select value={dropdownThree} onChange={(e) => {setDropdownThree(e.target.value)} } >
                            <option value="Сум">Есть возможность подключения</option>
                            <option value="Euro">Euro</option>
                            <option value="CY">CYN</option>
                            <option value="Dollar">Dollar</option>
                            <option value="Rubl">Rubl</option>
                            <option value="Dinar">Dinar</option>
                            </select>
                         
                        </div>
                    </div>

                    <MultipleCheckBox3/>


                    <div className="section-five">
                        <span className="span-one">
                            Электричество
                        </span>
                        <p className="p-five">Есть возможность подключения</p>

                        <span className="sighn">
                            9000 знаков осталос
                        </span>

                        <div className="sectionFiveImages">
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                           
                        </div>

                        <div className="sectionFiveImages">
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                            <img src="img/copy.png" alt=""/>
                           
                        </div>

                        
                       
                    </div>

                    <div className="section-six">
                        <p className="section-six-title">Местоположение объекта</p>

                        <div className="sectionSixInputs">
                            <div className="sixOne">
                                <div>
                                    <span>
                                        Регион
                                    </span>
                                </div>
                                <select value={dropdownFour} onChange={(e) => {setDropdownFour(e.target.value)} } >
                                <option value="Сум">Ташкент</option>
                                <option value="Euro">Euro</option>
                                <option value="CY">CYN</option>
                                <option value="Dollar">Dollar</option>
                                <option value="Rubl">Rubl</option>
                                <option value="Dinar">Dinar</option>
                                </select>
                         
                            </div>


                            <div className="sixOne">
                                <div>
                                    <span>
                                        Город / Район
                                    </span>
                                </div>
                                <select value={dropdownFive} onChange={(e) => {setDropdownFive(e.target.value)} } >
                                <option value="Сум">Мирза Улугбекский район</option>
                                <option value="Euro">Euro</option>
                                <option value="CY">CYN</option>
                                <option value="Dollar">Dollar</option>
                                <option value="Rubl">Rubl</option>
                                <option value="Dinar">Dinar</option>
                                </select>
                         
                            </div>


                        </div>


                        <div className="chart-img">
                            <img src="img/karta.svg" alt=""/>
                        </div>

                        <div className="section-seven">
                            <div >
                                <label htmlFor="room">Этажность дома*</label>
                               <input type="text" onChange={(e)=>setSectionEight(e.target.value)}
                                value={sectionEight}/>
                            </div>
                            <div>
                                <label htmlFor="room"> Высота потолков</label>
                                <input type="text" onChange={(e)=>setSectionNine(e.target.value)}
                                value={sectionNine}/>
                            </div>

                            <div>
                                <label htmlFor="room">Площадь участка*</label>
                                <input type="text" onChange={(e)=>setSectionTen(e.target.value)}
                                value={sectionTen}/>
                            </div>
                        </div>


                        <div className="adding-button">
                            <button onClick={ () =>  setIsModalOpen(true) }>Добавить обьявления бесплатно</button>

                            <Modal className="modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setIsModalOpen(false)}
                                style={
                                    {
                                        overlay: {
                                            width:'100vw',
                                            height: '100vh',
                                            color: 'lightblue',
                                            backgroundColor: 'rgba(255, 255, 255, 0.784618)',
                                            zIndex: '20001'
                                        }
                                    }
                                }>
                                
                                   <div className="contentAdding">
                                        <div className="div1">
                                           <p className="div1-price"> Your Price: </p>
                                            <div className="div1-inner">
                                                <p>{inputName}</p> <p> {dropdown}</p> <p>  {isChecked}</p>
                                            </div>

                                        </div>

                                       

                                        <div className="div1">
                                           <p className="div1-price">Количество комнат* : </p>
                                            <div className="div1-inner">
                                                <p>{sectionTwo}</p> <p> {sectionThree}</p> <p>  {sectionFour}</p>
                                            </div>

                                        </div>

                                       

                                        <div className="div1">
                                           <p className="div1-price"> Этажность дома*: </p>
                                            <div className="div1-inner">
                                                <p>{sectionFive}</p> 
                                            </div>

                                        </div>

                                        <div className="div1">
                                           <p className="div1-price"> Высота потолков : </p>
                                            <div className="div1-inner">
                                                <p> {sectionSix}</p> 
                                            </div>

                                        </div>

                                        <div className="div1">
                                           <p className="div1-price"> Площадь участка* : </p>
                                            <div className="div1-inner">
                                                <p>  {sectionSeven}</p> 
                                            </div>

                                        </div>

                                        

                                        <div className="div1">
                                           <p className="div1-price"> Тип дома: : </p>
                                            <div className="div1-inner">
                                                <p>  {dropdownTwo}</p> 
                                            </div>

                                        </div>

                                        <div className="div1">
                                           <p className="div1-price"> Электричество: </p>
                                            <div className="div1-inner">
                                                <p>   {dropdownThree}</p> 
                                            </div>
                                        </div>



                                    

                                          <div className="div1">
                                           <p className="div1-price">  Регион:: </p>
                                            <div className="div1-inner">
                                                <p>   {dropdownFour}</p> 
                                            </div>
                                        </div>

                                         <div className="div1">
                                           <p className="div1-price">   Город / Район </p>
                                            <div className="div1-inner">
                                                <p>   {dropdownFive}</p> 
                                            </div>
                                        </div>


                                       

                                        <div className="div1">
                                           <p className="div1-price">  Телефонный номер</p>
                                            <div className="div1-inner">
                                                <p>   {sectionEight}</p> 
                                            </div>
                                        </div>

                                         <div className="div1">
                                           <p className="div1-price">  Email-адрес:</p>
                                            <div className="div1-inner">
                                                <p>   {sectionNine}</p> 
                                            </div>
                                        </div>

                                        <div className="div1">
                                           <p className="div1-price">  Контактный лицо </p>
                                            <div className="div1-inner">
                                                <p>   {sectionTen}</p> 
                                            </div>
                                        </div>


                                        <div className="overlay-buttons">
                                            <div className="back-button">
                                                 <button onClick={() => setIsModalOpen(false)}>
                                                 back
                                             </button>
                                            </div>
                                            <Link to="/chart" className="overlay-next">next</Link>
                                        </div>
                                   </div>
                                   
                                </Modal>
                            <Link to="/">Предпросмотр</Link>
                        </div>
                    </div>

                    




                </form>
            </div>
        </div>
    )
}

export default CheckBoxButton
