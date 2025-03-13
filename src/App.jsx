import { useState } from 'react' 
import './App.css'
import Pages from './page/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pages/>
    </>
  )
}

export default App;
