import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaPhoto from "./NasaPhoto";

function APODcard({imgUrl}, {imgDescrip}){

    const [image, setImage] = useState([]);
    const [explanation, setExplanation] = useState([]);

    useEffect(() => {
        //request info from server and add useEffect to prevent rerendering
        axios.get('https://api.nasa.gov/planetary/apod?api_key=y54CZckTolqCojW2qsO0J497f2bsh3yFgzEjyKkf&date=2012-03-14')
            //respond
            .then(response => {
                console.log(response.data);
                const imgUrl = (response.data.hdurl);
                console.log(imgUrl);
                setImage(imgUrl);
                const imgDescrip = (response.data.explanation);
                console.log(imgDescrip);
                setExplanation(imgDescrip);
            })
            //reject
            .catch(error => {
                console.log(error);
        });
    }, [])
   
    return (
        <div className = "apodCard">
            <NasaPhoto />
            <p> {explanation} </p>
        </div>
        
    )

}

export default APODcard;
