import React, {useState} from 'react'; //had to import to remove errors in vs code also import useState 
import trollFace from "./images/troll-face.png"; //had to import with a descriptive name
import memesData from './memesData'; //import this file to get the memes when button is clicked 

//meme component that will handle meme functionality

function Meme () {
  //using one state object to hold both text and meme image URL
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "",
  });

  //Button click handler to get random meme image
  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url; //get the URL of a random image
    setMeme (prevMeme => ({
      ...prevMeme,
      memeImage: url
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]:value
    }));
  }


  return (
      <main>
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input" value={meme.topText} onChange={handleChange} //update top text on change
          ></input>
          <input type="text" placeholder="Bottom text" className="form--input" value={meme.bottomText} onChange={handleChange} //update bottom text on change 
          ></input>

          {/* Button to trigger meme image change*/}
          <button 
          className="form--button"
          onClick={getMemeImage}
          > Get a new meme image 🖼</button>
        </div>

        {/* Display meme iamge if it exist*/}
        {meme.memeImage && (
          <div className='meme'> 
            <img src={meme.memeImage} alt="Meme" className='meme-image'/>
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
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
