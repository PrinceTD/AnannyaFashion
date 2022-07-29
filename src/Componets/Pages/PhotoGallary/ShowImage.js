import React from 'react'

function ShowImage({ itemData }) {
    const { img } = itemData;
    return (
        <>
           
                <div class="col">
                    <div class="card rounded border-0">
                        <img src={`data:img/png;base64,${img}`} class="card-img-top" alt="..." />
                    </div>
                </div>
            
        </>
    )
}

export default ShowImage