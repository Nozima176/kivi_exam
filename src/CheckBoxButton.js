import React, {useState} from 'react'
// import CheckBox from './components/SecondPage/CheckBox'
// import RadioButtons from './components/SecondPage/RadioButtons/RadioButtons'
import MultipleCheckBox from './MultipleCheckBox'
import MultipleCheckBox2 from './MultipleCheckBox2'
import MultipleCheckBox3 from './MultipleCheckBox3'
import './CheckBoxButton.scss'
function CheckBoxButton() {
    const [dropdown, setDropdown] = useState("Сум");
    const [dropdownTwo, setDropdownTwo] = useState("Сум");
    const [dropdownThree, setDropdownThree] = useState("Сум");
    const [isChecked, setIsChecked] = useState("false");
    const[inputName, setInputName] = useState(" ");
    const[sectionTwo, setSectionTwo] = useState(" ")
    const[sectionThree, setSectionThree] = useState(" ")
    const[sectionFour, setSectionFour] = useState(" ")
    const[sectionFive, setSectionFive] = useState(" ")
    const[sectionSix, setSectionSix] = useState(" ")
    const[sectionSeven, setSectionSeven] = useState(" ")
    // const [radio, setRadio] = useState("apple");

    function handleData(e) {
        e.preventDefault();
        alert("hello")
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

                    




                </form>
            </div>
        </div>
    )
}

export default CheckBoxButton
