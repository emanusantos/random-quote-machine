import React, { useState } from 'react';
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const quotes = [{sentence: "Burn them all!", name: "Aerys Targaryen"}, 
{sentence: "That's what I do: I drink and I know things.", name: "Tyrion Lannister"},
{sentence: "Fear cuts deeper than swords.", name: "Arya Stark"}, 
{sentence: "There is only one war that matters. The Great War. And it is here.", name: "Jon Snow"},
{sentence: "A man with no motive is a man no one suspects. Always keep your foes confused.", name: "Petyr Baelish"},
{sentence: "By what right does the wolf judge the lion?", name: "Jaime Lannister"},
{sentence: "The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.", name: "Tyrion Lannister"}]

const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
  ];

export default function Wrapper() {

    const [quo, setQuo] = useState('Click to generate new quote!')

    const [auth, setAuth] = useState('Someone')

    let randomIndex = Math.floor(Math.random() * quotes.length)
    const onClickRandomButton = () => {
        setQuo(quotes[randomIndex].sentence)
        setAuth(quotes[randomIndex].name)
        document.body.style.backgroundColor = colors[randomIndex]
        document.body.style.color = colors[randomIndex]
    };

    return (
        <div className="wrapper">
            <div className="quote">
                <h1><FaQuoteLeft size=".9em" id="icon"/>{quo}</h1>
            </div>
            <div className="author">
                <h3><em>- {auth}</em></h3>
            </div>
            <div className="buttons">
            <a href="http://twitter.com" target="_blank" title="Tweet this quote!"><button><FaTwitter size="1.5em"/></button></a>
                <button onClick={onClickRandomButton}>New Quote</button>
            </div>
        </div>
    )
}