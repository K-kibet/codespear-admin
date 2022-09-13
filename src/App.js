import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { useAuth } from './firebase'; 
import Home from './pages/Home';
import Error from './pages/Error';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Topbar } from './components/Topbar';
import PostCourse from './pages/PostCourse';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  overflow-x: hidden;
`

function App() {
  const signedUser = useAuth();
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(signedUser);
  }, [signedUser]);
  return (
    <Container>
      <Topbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='post' element={<PostCourse />} />
          <Route path='register' element={!user ? <Register /> : () => {return}} />
          <Route path='login' element={!user ? <Login /> : () => {return}} /> 
          <Route path="*"  element={<Error />} />
         
      </Routes>
    </Container>
  );
}

export default App;
