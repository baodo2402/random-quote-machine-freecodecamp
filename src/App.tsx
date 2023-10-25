import { useState } from 'react'
import './App.css'
import quotes from "./assets/quotes.json"
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

interface Quote {
  quote: string;
  author: string;
}
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]

};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  
  return `rgb(${red}, ${green}, ${blue})`
}



function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())
  const changeQuote = () => {
    setQuote(getRandomQuote())
    setRandomColor(getRandomColor())
  };

  return <div className='background' style={{backgroundColor: randomColor, transition: "all 1s"}}>
    <div id='quote-box'>
      <div className='quote-content' style={{color: randomColor, transition: "all 1s"}}>
        <FaQuoteLeft size = "30" style={{ marginRight: "10px", transition: "all 1s" }} />
        <h2 id='text'>{quote.quote}</h2>
        
        <h4 id='author'>- {quote.author}</h4>
      </div>

      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=${quote.quote}`}
        id='tweet-quote'
        style={{
          background: randomColor,
          marginRight: "10px",
          transition: "all 1s"
        }}>
          <FaTwitter color="white" />
        </a>

        <button id="new-quote"
        onClick={changeQuote}
        style={{backgroundColor: randomColor,
                position: "relative",
                left: "20em"}}
        >New Quote</button>
    </div>
    </div>
    
  </div>
}

export default App
