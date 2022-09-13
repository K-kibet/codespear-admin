import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserImage from '../assets/person.png';
import { Outlet, NavLink, Link } from "react-router-dom";
import { logOut, useAuth } from '../firebase';
import { Logout } from '@mui/icons-material';


const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 5px;
    background-color: #C5B4E3;
    position: fixed;
    top: 0;
    padding: 0 20px;
    z-index: 100;
    
`

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`

const SearchContainer = styled.div`
    width: 230px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 5px 0px;
    border-radius: 10px;
    overflow: hidden;
`

const Input = styled.input`
    border: none;
    padding-left: 8px;
    outline: none;
    flex: 7;
    height: inherit;
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

`

const Item = styled.div`
  margin-left: 20px;
  font-weight: 600;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:hsl(51.1,50%, 95%);
  transition:all 250ms ease-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
    text-shadow: 5px 5px 2.3px #89388e;
    
  }

`
const UserContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-right: 20px;
`

const User = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

const Button = styled.button`
    width: 120px;
    height: 38px;
    border-radius: 5px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    margin-right: 20px;
    background-color: ${props => props.bg};
    cursor: pointer;
`

export const Topbar = () => {
  const signedUser = useAuth();
  const [user, setUser] = useState('');

  const handleSignOut = () => {
    logOut();
  }



useEffect(() => {
  setUser(signedUser);
}, [signedUser]);

  return (
    <Container >
      <Navigation>
        
        <Item><NavLink to='/' className='link' style={({ isActive }) => {
              return {
                color: isActive ? "#68478D" : "",
              };
            }}>Home</NavLink></Item>
        <Item><NavLink to='/post' className='link' style={({ isActive }) => {
              return {
                color: isActive ? "#68478D" : "",
              };
            }}>Post</NavLink></Item>
            

      </Navigation>
        {user && <Button bg='#ED1D24' onClick={handleSignOut} style={{
          position: 'fixed',
          right: 0,
          top: '102px',
          zIndex: 100
        }}>
          Log out 
          <Logout  style={{
              marginLeft: '10px',
              
            }}/>
        </Button>}
        {user && <User src={user.photoURL ? user.photoURL : UserImage} />}
        {!user && <UserContainer>
            <Button bg='teal'><Link to='login' className='link' >LOGIN</Link></Button>
            <Button bg='black'><Link to='register' className='link' >REGISTER</Link></Button>
          </UserContainer>
        }
      <Outlet />
    </Container>
  )
}
