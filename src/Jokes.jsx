import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import axios from "axios"
import "./Jokes.css";

export default function Jokes() {
    const [joke, setJoke] = useState("");
    useEffect(() => {
        handleClick()
        console.log("hi")
    }, [])
    const handleClick = async () => {
        let joke = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
        setJoke(joke.data.joke)
    }
    return (
        <div className="container">
            <div className="joke-container">
                <p id="joke">{joke}</p>
            </div>
            <Button variant="contained" color="primary" id="btn-fetch" onClick={handleClick} endIcon={<ArrowForwardRoundedIcon />}>fetch</Button>
        </div>
    )
}