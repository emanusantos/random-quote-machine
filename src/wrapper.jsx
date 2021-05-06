import React, { useState } from 'react';
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const quotes = ["Burn them all!", 
"That's what I do: I drink and I know things.",
"Fear cuts deeper than swords.", 
"There is only one war that matters. The Great War. And it is here.",
"A man with no motive is a man no one suspects. Always keep your foes confused.",
"By what right does the wolf judge the lion?",
"The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth."]

export default function Wrapper() {
    const [quo, setQuo] = useState('Click "New Quote" to generate quote!')

    return (
        <div className="wrapper">
            <div className="quote">
                <h1><FaQuoteLeft size=".9em" id="icon"/>{quo}</h1>
            </div>
            <div className="author">
                <h3><em>- dis is autor</em></h3>
            </div>
            <div className="buttons">
            <a href="http://twitter.com" target="_blank" title="Tweet this quote!"><button><FaTwitter size="1.5em"/></button></a>
                <button onClick={() => setQuo(quotes[Math.floor(Math.random() * quotes.length)])}>New Quote</button>
            </div>
        </div>
    )
}