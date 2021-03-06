import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaPhoto from "./NasaPhoto";
import DatePicker from "./DatePicker";
import styled from "styled-components";


const WrapperDiv = styled.div`
  color: #142834;
  margin: 10px 30px 10px 30px;
  text-align: left;
`
const BottomDiv = styled.div`
    display: flex;
    margin: 20px 0 70px 0;
`
const Title = styled.h2`
    width: 23%;
    margin: 5px;
    font-size: 2rem;
`
const Descrip = styled.p`
    width: 75%;
    padding: 10px;
    margin: 5px;
    font-size: 1.5rem;
    border-left: solid 1px #ddab52;
`
const Footer = styled.p`
    font-size: 1rem;
    text-align: center;
`

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
        <WrapperDiv>
            <DatePicker setDate={setDate}/>
            <NasaPhoto imgUrl={image}/>
            <BottomDiv>
                <Title> {title} </Title>
                <Descrip> {explanation} </Descrip>
            </BottomDiv>
            <Footer>
                <p> Data provided by the National Aeronautics and Space Administration.</p>
            </Footer>
        </WrapperDiv>
        
    )
}

export default APODcard;

