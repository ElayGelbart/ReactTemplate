import { useEffect, useState } from "react"
import QuoteJSON from "../assets/quotes.json"
export default function App() {
  const [QuoteText, setQuoteText] = useState(null);
  const [QuoteAuthor, setQuoteAuthor] = useState(null);

  useEffect(() => {
    randomQuote()
  }, [])

  function randomQuote() {
    const quoteOBJ = QuoteJSON.quotes;
    const length = quoteOBJ.length;
    const ranNumber = Math.floor(Math.random() * length);
    console.log(ranNumber);
    const selectedQuote = quoteOBJ[ranNumber];
    setQuoteText(selectedQuote.quote)
    setQuoteAuthor(selectedQuote.author)
  }

  return <div id="quote-box">
    <div id="text">{QuoteText}</div>
    <div id="author">{QuoteAuthor}</div>
    <div id="new-quote" onClick={() => { randomQuote() }}>new</div>
    <a id="tweet-quote" href="twitter.com/intent/tweet">Something</a>
  </div>
}