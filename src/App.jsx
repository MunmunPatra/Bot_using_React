import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] =useState("");

   async function generateAnswer(){
    setAnswer("loading...")
     const response = await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCjL25R7mRAsyK9sk61heqkFfOx6fNmwvw",
        method:"POST",
        data:{
          contents:[
            {parts: [{text :question}]},
        ],
      },
      });
      
        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])

      
   }

  return (
    <>
     <h1> Chat Bot</h1>
     <textarea 
     value={question}  
     onChange={(e)=>setQuestion(e.target.value)} 
     cols="30" 
     rows="10"
     ></textarea>
     <button onClick={generateAnswer}>Generate Answer</button>

     <pre> {answer}</pre>
    </>
  );
}

export default App;
