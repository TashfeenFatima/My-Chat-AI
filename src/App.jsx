import { useState } from 'react'
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './App.css'




function App() 
{
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  async function generateAnswer() {
      setAnswer("Loading....")
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC8eubn74cpz3bSaJ6ka2M2SwSJmdavOfg",
        method:"post",
        data: {
        
          contents: [
          
            { parts:[{text: question }]},
          ],
        },

      });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"] )

    
  }
  return (
    <>
      <div className="app-container">
  <h1 className="title">Chat AI</h1>
  <div className="search-container">
    <textarea
      className="search-input"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      cols="30"
      rows="5"
      placeholder="Ask anything to me"
    ></textarea>
    <button className="search-button" onClick={generateAnswer}>
     🔍
    </button>
  </div>
  <div className="answer-output">
        <ReactMarkdown>{answer}</ReactMarkdown>
  </div>
</div>


      
    </>
  );
}
//create anv file
export default App
