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
    const [btn, setBtn] = useState({ backgroundColor: 'rgb(255,99,71)' })

    let randomIndex = Math.floor(Math.random() * quotes.length)


    const onClickRandomButton = () => {

        document.getElementById('quo').animate({ opacity: 0 }, 700)
        document.getElementById('auth').animate({ opacity: 0 }, 700)
        document.getElementById('btn').animate({ opacity: 0 }, 700)
        setQuo(quotes[randomIndex].sentence)
        setAuth(quotes[randomIndex].name)
        setBtn({ backgroundColor: colors[randomIndex] })
        document.body.style.backgroundColor = colors[randomIndex]
        document.body.style.color = colors[randomIndex]
    };

    return (
        <div className="wrapper">
            <div className="quote" id="quo">
                <h1><FaQuoteLeft size=".9em" id="icon"/>{quo}</h1>
            </div>
            <div className="author" id="auth">
                <h3><em>- {auth}</em></h3>
            </div>
            <div className="buttons" id="btn">
            <a href="http://twitter.com" target="_blank" title="Tweet this quote!"><button style={btn}><FaTwitter size="1.5em"/></button></a>
                <button style={btn} onClick={onClickRandomButton}>New Quote</button>
            </div>
        </div>
    )
}