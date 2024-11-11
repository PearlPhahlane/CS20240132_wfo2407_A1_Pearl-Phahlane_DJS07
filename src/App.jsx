import React, {useState, useEffect } from 'react'; //had to import to remove errors in vs code also import useState 
import trollFace from "./images/troll-face.png"; //had to import with a descriptive name

//meme component that will handle meme functionality

function Meme () {
  //using one state object to hold both text and meme image URL
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg", //initial meme image
  });

  const [allMemes, setAllMemes] = useState([]); //this is State for all meme data

  //fetch memes data from API
  useEffect(() => {
    //using asynchronous function
  
    //define an async function inside useEffect hook
    const getMemes = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setAllMemes(data.data.memes); //set memes data in state
      } catch (error) {
        console.error("Error fetching meme data:", error);
      }
    };
    //call the async function
    getMemes();
  }, []);; //empty dependancy array means this effect runs once when component mounts

  //Button click handler to get random meme image
  function getMemeImage(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url; //get the URL of a random image
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name='topText'
          value={meme.topText}
          onChange={handleChange} //update top text on change
        ></input>
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          value={meme.bottomText}
          name='bottomText'
          onChange={handleChange} //update bottom text on change
        ></input>

        {/* Button to trigger meme image change*/}
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      {/* Display meme iamge if it exist*/}
      {meme.randomImage && (
        <div className="meme">
          <img src={meme.randomImage} className="meme-image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
}

function App() {

  return (
    <>
      <header className="header">
        <img
          src={trollFace} //had to use the descriptive name from the import for image to show
          className="header--image"
          alt="Meme Generator Logo"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>

      <Meme />
    </>
  );
}

export default App
