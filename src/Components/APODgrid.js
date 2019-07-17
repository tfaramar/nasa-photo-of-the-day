import React, { useEffect, useState } from "react";
import axios from "axios";
import APOD from "./APOD";
import { thisExpression } from "@babel/types";

function APODgrid(){

    //add useEffect to prevent handle rerendering

    const [file, setFile] = useState();

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=y54CZckTolqCojW2qsO0J497f2bsh3yFgzEjyKkf')
        .then(response => {
            const 
        })
    })
    

}

export default APODgrid;
