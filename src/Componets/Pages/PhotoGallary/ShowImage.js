import React from 'react'

function ShowImage({ itemData }) {
    const { img } = itemData;
    return (
        <>
           
                <div className="col">
                    <div className="card rounded border-0">
                        <img src={`data:img/png;base64,${img}`} classname="card-img-top" alt="..." />
                    </div>
                </div>
            
        </>
    )
}

export default ShowImage