import React from 'react'
import {Link} from 'react-router-dom'
import NumberButton from '../../SecondPage/NumberButton/NumberButton';
import BlueButtons from '../../SecondPage/BlueButtons/BlueButtons'
import './Table.scss'
function Table() {
    return (
        <div>
            <div className="tabel-wrapper">
                <div className="top">
                    <div className="span-links">
                        <span>Артикул: 4418970 </span>
                        <span>обновлено: 28.04.17 добавлено: 28.04.17</span>
                                                                            
                    </div>
                    <div className="top-price">
                        <p>70 000 у.е.</p>
                    </div>

                    <Link className="top-links">
                    Ташкент, Ташкентская область, Юнусабадский район 
                    </Link>

                    <div className="top-buttons">
                        <NumberButton/>
                        <NumberButton/>
                    </div>
                    <div className="author">
                        <span>Автор обьявлении:</span>
                         <p>Зухриддин Темиров</p>
                    </div>
                    <div className="author-link">
                        <BlueButtons/>
                    </div>
                    
                </div>

                <div className="bottom">
                    <div className="tabel-bottom">

                    </div>
                    <div className="text-bottom">
                        <p>
                            Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. <br/>
                            Новостройка Голден Хаус жылой комплекс Етти Чинор Очень <br/>
                            качественный и дорогой ремонт. Комнаты полнастю разделные <br/>
                            болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт <br/>
                            шыкарный обсалютно новый. 
                        </p>

                        <p>
                            Ремонт делолся из очень дорогова материяла. Дорогая класическая <br/>
                            кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие <br/>
                            люстры вовсех комнатах решодки на окнах. Теретория охранается. <br/>
                            Всё предусмотренно для детей деские площядки качели итд. Торг <br/>
                            наместе. Торопитесь продаю нужны денги. Первый золотой этаж и <br/>
                            паследний в этом коплексе. Торопитесь.

                        </p>

                        <div className="watch-number">
                            <span>Просмотры:10958</span>
                            <span> Пожаловатся </span>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Table
