import React from 'react'
import { Link } from 'react-router-dom'
import './Links.scss'
function Links() {
    return (
        <div>
            <div className="links-wrapper">
                <Link>Объявления</Link> /
                <Link>Ташкент Недвижимость </Link> /
                <Link>Ташкент Квартиры</Link> /
                <Link>Ташкент Продажа</Link> /
                <Link>Новостройки Ташкент</Link>
            </div>
        </div>
    )
}

export default Links
