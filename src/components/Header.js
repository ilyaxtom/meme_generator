import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img
                    className="logo-img"
                    alt="logo"
                    src="./img/troll-face.png"
                />
            </div>
            <h1 className="header-title">Meme Generator</h1>
        </header>
    )
}