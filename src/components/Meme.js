import React from 'react';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="container">
                <div className="form">
                    <input
                        name="topText"
                        type="text"
                        placeholder="Top text"
                        className="form-input"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        name="bottomText"
                        type="text"
                        placeholder="Bottom text"
                        className="form-input"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button
                        className="form-button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image
                    </button>
                </div>
                <div className="meme">
                    <img className="meme-image" src={meme.randomImage}/>
                    <h2 className="text top-text">{meme.topText}</h2>
                    <h2 className="text bottom-text">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}