import React from 'react'


import Body from '../../containers/Body/Body'

import Car from '../../Car'
import Car2 from '../../Car2'
function HomePage() {
    return (
        <div>
            <div className="header">
                <Car2/>
                <Body/>
                <Car/>
               
            </div>
        </div>
    )
}

export default HomePage
