
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import View from './components/View'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view' element={<View/>}/>

    </Routes>
    </>
  )
}

export default App
