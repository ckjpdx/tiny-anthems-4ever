import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Tiny Anthems (sharpie logo)</p>
        <p>Pic/gif of Vommy</p>
        <p>If you've ever wanted to hear what a loved one's theme song would sound like, you have reached the correct website.</p>
        <p>For over a decade, Tiny Anthems has been composing and recording songs that reflect the person they are about. You tell us about someone you know, we give you their song.</p>
        <p>For inquiries contact:</p>
        <p>Tinyanthems@gmail.com</p>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
