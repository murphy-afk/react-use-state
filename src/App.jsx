import { useState } from 'react'
import './App.css'
import { languages } from "./assets/languages"

function App() {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <>
      <h1 className='title'>Learn web development</h1>
      <div className='btn-container'>
        {languages.map((language, index) => (
          <button
            key={language.id}
            onClick={() => setIndex(index)}
            className={`${index === selectedIndex ? "selected" : "not-selected"} btn`}>
            {language.title}</button>
        ))}
      </div>
      <div className='language-description-container'>
        <h2 className='description-title'>{languages[selectedIndex].title}</h2>
        <p className='description'>{languages[selectedIndex].description}</p>
      </div>
    </>
  )
}

export default App
