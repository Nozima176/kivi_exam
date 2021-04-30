import React from 'react'
import './FormTop.scss'
function FormTop() {
    return (
        <div className="form-top-container">

            <div className="form-title">
                <h3>Добавить обьявления бесплатно</h3>
                <p>Для добавления вашего обьявлении вы должны выбрать категорию</p>
            </div>

            <div className="form-top-imgs">
                <img src="img/f10.svg" alt=""/>
                <img src="img/f2.svg" alt=""/>
                <img src="img/f3.svg" alt=""/>
                <img src="img/f4.svg" alt=""/>
                <img src="img/f5.svg" alt=""/>
                <img src="img/f6.svg" alt=""/>
                <img src="img/f7.svg" alt=""/>
                <img src="img/f8.svg" alt=""/>
                <img src="img/f9.svg" alt=""/>
            </div>

            <div className="choosen">
            

                <span className="choose">Вы выбрали:</span>
                <span>Недвижимость   »</span>
                <span>Дома   »</span>
                <span>Аренда долгосрочная</span>

                <div className="edit">
                    <img src="img/pen.svg" alt=""/>
                    <button>Изменить</button>
                </div>
            </div>
            
        </div>
    )
}

export default FormTop
