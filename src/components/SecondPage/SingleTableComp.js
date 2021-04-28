import React from 'react'

function SingleTableComp({ title, number}) {
    return (
        <div>
            <div className="table-part">
                <p className="tablePart-text">
                    {title}
                </p>
                <span className="tablePart-number">
                    {number}
                </span>
            </div>
            
        </div>
    )
}

export default SingleTableComp
