import { useState } from 'react'
import { Navbar} from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#000]">
     <Navbar/>
    </div>
  )
}

export default App
