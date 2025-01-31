import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { SingIn } from './SignUpComponents/SignIn';
import { SignUp } from './SignUpComponents/SignUp';
import bgimg from './assets/banner.jpg'
import { useEffect } from 'react';
import { Home } from './HomeCoponents/Home';

function App() {
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname === '/' || location.pathname === '/sign-up' || location.pathname === '/sign-in'){
      document.body.style.background = `url(${bgimg}) no-repeat`
    }else {
      document.body.style.background = 'none'
    }
    return () => document.body.style.background = "none"
  },[location])
  return (
    <>
          <Routes>
             <Route path='/' element={<SingIn/>}/>
             <Route path='/sign-in' element={<SingIn/>}/>
             <Route path='/sign-up' element={<SignUp/>}/>
             <Route path='/home' element={<Home/>}/>
          </Routes> 
    </>
  )
}

export default App;