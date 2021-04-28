import React from 'react'

function CheckBox({inputCheck, labelCheck}) {
    return (
        <div>
            <div className="checkbox-button">
                {inputCheck} {labelCheck}
            </div>
            
        </div>
    )
}

export default CheckBox
