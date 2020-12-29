import React from 'react'


function Photo(props) {
    return (<>
        <div className="img_container">
            <img src={props.src} alt="" data-original="image" />
        </div>
    </>
    )
}

export default Photo;