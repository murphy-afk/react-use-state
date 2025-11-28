import { useState } from 'react'
import './App.css'
import { languages } from "./assets/languages"

function App() {
const [selectedIndex, setIndex] = useState(0);

  return (
    <>
      <h1>Learn web development</h1>
      <div>
        {languages.map((language, index) => (
          <button key={language.id} onClick={() => setIndex(index)}>{language.title}</button>
        ))}
        <div className='language-description-container'>
          <p>{languages[selectedIndex].description}</p>
        </div>
      </div>
    </>
  )
}

export default App
