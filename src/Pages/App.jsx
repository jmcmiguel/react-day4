import React, { Component } from 'react'
import { Routes,  Route} from "react-router-dom";
import AppBar from '../Components/Appbar'
import SignUpPage from '../Pages/SignUp'
import Home from '../Pages/Home'
import ContactPage from '../Pages/Contact'
import About from '../Pages/About'

export default class App extends Component {
  render() {
    return (
      <div>

        <AppBar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    )
  }
}
