import './App.css';
import react from 'react'
import { useState } from 'react';

function App() {

  const [answer, setAnswer] = useState("");
  const [qrcode, setqrcode] = useState(false);

  const handleClick = ()=> {
    if(answer === "SNSReTGA dI YOe NHOSAGIAR SeTlA OSVE H ETU ZeBETe  TeO eU H i") {
      setqrcode(true);
    }
  }  

  return (
    <div className="App">
      <h1>TASK 2</h1>
     <div className="imageContainer">
      <img src='./task.jpg' className = "codeImage" alt='task'></img>
     </div>
     <br/>
     <h3>Predict the output of the given code</h3>
     <input className='answerContainer' onChange={(e) => setAnswer(e.target.value)} />
     <button className='submitButton' onClick={handleClick}>Submit</button>

     <br />
     <br />

    {qrcode && (
      <>
        <h3>Scan the QR Code for the next clue.</h3>
       <img src='qrcode.png' className = "codeImage" alt='qrcode'></img>
       </>
    )}
    </div>
  );
}

export default App;
