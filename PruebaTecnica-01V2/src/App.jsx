import { useState } from 'react'
import './styles/water.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1>OMDb Movies</h1>
          <form>
            <input></input>
            <button type='submit'>Buscar</button>
          </form>
        </header>
        <main>

        </main>
      </div>
    </>
  )
}

export default App
