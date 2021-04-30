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
                    <table>
 
 <tr>
   <td>Количество комнат:
       <div>6</div>
   </td>
   <td>Общая площадь:
       <div>40 м2</div>
   </td>
   <td>Этаж:
       <div>32</div>
   </td>
 </tr>
 <tr>
 <td>Этажность дома:
       <div>6</div>
   </td>
   <td>Состояние квартиры:
       <div>Первая сдача </div>
   </td>
   <td>Этаж:
       <div>32</div>
   </td>
 </tr>
 <tr>
 <td>Планировка
       <div className="bluee">Раздельная</div>
   </td>
   <td>Год постройки/сдачи
       <div className="bluee">Сдача в 2017</div>
   </td>
   <td>Ремонт
       <div>Авторский проект</div>
   </td>
 </tr>
 <tr>
 <td>Санузел
       <div  className="bluee">2 санузла и более</div>
   </td>
   <td>Меблирована
       <div className="bluee">Да</div>
   </td>
   <td>Высота потолков
       <div>32</div>
   </td>
 </tr>

 <tr>
   <td colspan="3">Рядом есть
   <div className="bluee">Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	 </div>
   </td>
  
 </tr>
</table>
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
