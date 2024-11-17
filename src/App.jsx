// src/App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import SignupForm from './components/SignupForm/SignupForm';

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        { user ? (
          <Route path='/' element={<Dashboard user={user}/>} />
        ):(
          <Route path='/' element={<Landing /> } />
        )

        }
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
      
    </>
  )
}

export default App
