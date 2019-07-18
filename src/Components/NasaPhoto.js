import React from "react";

function NasaPhoto({imgUrl}){
    console.log(imgUrl)
    return (
        <div className="photo-of-day">
            <img src={imgUrl} style={{ maxWidth: "700px" }} alt={'NASA Photo of the Day'} />
        </div>
    );
}

export default NasaPhoto; 