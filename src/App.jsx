import { useState } from 'react'
import './App.css'
import { languages } from "./assets/languages"

function App() {
  const [selectedIndex, setIndex] = useState(null);
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
        <h2 className='description-title'>{selectedIndex != null ? languages[selectedIndex].title : ""}</h2>
        <p className='description'>{selectedIndex != null ? languages[selectedIndex].description : "nessun linguaggio selezionato"}</p>
      </div>
    </>
  )
}

export default App
