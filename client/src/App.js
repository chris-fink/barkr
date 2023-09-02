import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

          <Route 
            path='/' 
            element={
              <ProtectedRouted>
                <Home />
              </ProtectedRouted>
            } 
          />
          <Route 
            path='/profile/:id' 
            element={
              <ProtectedRouted>
                <Profile />
              </ProtectedRouted>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function ProtectedRouted({ children }) {
  if (localStorage.getItem('barkr-user')) {
    return children
  } else {
    return <Navigate to='/login' />
  }
}

export default App;