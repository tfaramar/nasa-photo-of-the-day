import React from "react";

function NasaPhoto({imgUrl}){
    return (
        <div className="photo-of-day">
            <h2>Photo of the Day will go here</h2>
            <img src={imgUrl} style={{ maxWidth: "500px" }} alt={'NASA Photo of the Day'} />
        </div>
    );
}

export default NasaPhoto;