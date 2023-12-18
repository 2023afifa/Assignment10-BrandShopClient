import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>

      <div className='font-cinzel'>
        <Outlet></Outlet>
      </div>

    </>
  )
}

export default App
