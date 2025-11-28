import { useState } from 'react'
import './App.css'
import { languages } from "./assets/languages"

function App() {


  return (
    <>
      <h1>Learn web development</h1>
      <div>
        {languages.map((language) => (
          <button key={language.id} >{language.title}</button>
        ))}
        <div className='language-description-container'>
          <p>{languages[0].description}</p>
        </div>
      </div>
    </>
  )
}

export default App
