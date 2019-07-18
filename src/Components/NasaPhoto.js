import React from "react";


function NasaPhoto({imgUrl}){
    return (
        <div className="photo-of-day">
            <img src={imgUrl} style={{ maxWidth: "100%" }} alt={'Beautiful views from outer space'} />
        </div>
    );
}

export default NasaPhoto; 