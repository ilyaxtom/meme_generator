import React from 'react';
import memes from '../memesData.js';

export default function Meme() {
    let url;

    function getMemeImage() {
        const memesArray = memes.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url;
        console.log(url);
    }
    return (
        <main>
            <div className="container">
                <p>{url}</p>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form-input"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form-input"
                    />
                    <button
                        className="form-button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image
                    </button>
                </div>
            </div>
        </main>
    )
}