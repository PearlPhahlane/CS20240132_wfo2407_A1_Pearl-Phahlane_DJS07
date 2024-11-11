import React, {useState} from 'react'; //had to import to remove errors in vs code also import useState 
import trollFace from "./images/troll-face.png"; //had to import with a descriptive name
import memesData from './memesData'; //import this file to get the memes when button is clicked 

//meme component that will handle meme functionality

function Meme () {
  const [memeImage, setMemeImage] = useState(""); //state to hold meme image URL
  const [topText, setTopText] = useState(""); //state to hold top text
  const [bottomText, setBottomText] = useState(""); //state to hold bottom text

  //Button click handler
  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray);
    const url = memesArray[randomNumber].url; //get the URL of a random image
    setMemeImage(url); //update state with new image url 
  };
  return (
      <main>
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input" value={topText} onChange={ (e) =>
            setTopText(e.target.value)} //update top text on change
          ></input>
          <input type="text" placeholder="Bottom text" className="form--input" value={bottomText} onChange={ (e) =>
            setBottomText(e.target.value)} //update bottom text on change 
          ></input>

          {/* Button to trigger meme image change*/}
          <button 
          className="form--button"
          onClick={getMemeImage}
          > Get a new meme image 🖼</button>
        </div>

        {/* Display meme iamge if it exist*/}
        {memeImage && (
          <div className='meme'> 
            <img src={memeImage} alt="Meme" className='meme-image'/>
            <h2 className='meme--text top'>{topText}</h2>
            <h2 className='meme--text bottom'>{bottomText}</h2>
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
