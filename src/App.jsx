import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'

 const routes = (
  
<Router>
<Routes>

  
<Route path="/" element={<Login />} />         {/* 👈 This line fixes the issue */}

 <Route path="/dashboard" element={<Home/>}/>
 <Route path="/login" element={<Login/>}/>
 <Route path="/signup" element={<SignUp/>}/>


</Routes>
</Router>
  

 )




function App() {
  return (
    <div>

  {routes}
   

    </div>
  )
}

export default App