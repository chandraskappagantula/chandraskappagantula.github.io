import { useState } from 'react'
import { Intro } from "./components/Intro"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Intro />
    </main>
  )
}

export default App
