import React from 'react'
import DropDown from './DropDown';
import DropDown2 from './DropDown2';
import DropDown3 from './DropDown3';
import DropsButton from './DropsButton'
import './Drops.scss';

function Drops() {
    return (
        <div>
           <div className="drops-container">
                <div className="drops-inner">
                    <DropDown/>
                    <DropDown2/>
                    <DropDown3/>
                    <DropsButton/>
                </div>

           </div>
        </div>
    )
}

export default Drops
