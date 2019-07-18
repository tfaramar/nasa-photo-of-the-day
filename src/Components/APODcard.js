import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaPhoto from "./NasaPhoto";
import DatePicker from "./DatePicker";

function APODcard(){

    const [image, setImage] = useState("");
    const [explanation, setExplanation] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    

    useEffect(() => {
        //request info from server and add useEffect to prevent rerendering
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=y54CZckTolqCojW2qsO0J497f2bsh3yFgzEjyKkf&date=${date}`)
            .then(response => {
                console.log(response.data);
                const imgUrl = (response.data.hdurl);
                console.log(imgUrl);
                setImage(imgUrl);
                const imgDescrip = (response.data.explanation);
                console.log(imgDescrip);
                setExplanation(imgDescrip);
                const title = (response.data.title);
                setTitle(title);
            })
            .catch(error => {
                console.log(error);
        })
    }, [date]);
   
    return (
        <div className = "apodCard">
            <DatePicker setDate={setDate}/>
            <NasaPhoto imgUrl={image}/>
            <h2> {title} </h2>
            <p> {explanation} </p>
        </div>
        
    )
}

export default APODcard;
