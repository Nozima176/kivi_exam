import React from 'react'
import { useState} from 'react'
import { Link} from 'react-router-dom'
// import SearchIcon from "@material-ui/icons/Search";
import './Search.scss'

function Search() {
    const [ inputSearch, setInputSearch ] = useState("")
    return (
        <div className="topHeader-wrapper">
            <div className="header_middle">

                <Link to={`/search/${inputSearch}`}>
                    {/* <SearchIcon className="header_inputButton"/> */}
                    <img src="img/search.svg" alt=""/>
                </Link>
                <input
                value={inputSearch}
                type="text"
                placeholder="Введите название обявления или  выберите из списка"
                onChange={e => setInputSearch(e.target.value)}
                
                />
               
                
            </div>

            <div className="topHeader-buttons">
                <div>
                    <button>Интерсное</button>
                    <button>Топ</button>
                    <button>Отличные предложение</button>
                    <button>Супер цена</button>
                    <button>г.Ташкент <img src="img/pin.svg" alt=""/></button>
                    <button>г.Термез <img src="img/pin.svg" alt=""/></button>
                    <button> г.Самарканд<img src="img/pin.svg" alt=""/></button>
                </div>
            </div>


            <div className="inputRange">
                <form class="multi-range-field my-5 pb-5">
              <input id="multi25" class="multi-range" type="range" />
             </form>
            </div>
        </div>
    )
}

export default Search
