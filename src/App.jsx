import React from 'react'; //had to import to remove errors in vs code
import trollFace from "./images/troll-face.png"; //had to import with a descriptive name

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

      {/*Form with two input fields and a button, also change form to div so button can get new image 
      we are not gathering data and submitting it somewhere*/}
      <main>
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input"></input>
          <input type="text" placeholder="Bottom text" className="form--input"></input>
          <button className="form--button"> Get a new meme image 🖼</button>
        </div>
      </main>
    </>
  );
}

export default App
