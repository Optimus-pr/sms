import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Student from './Student';
import Login from './Login';

export default function AuthStudent() {
    const navigate=useNavigate()
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            {
                const user=localStorage.getItem('user')
                if(user==="user")
                    setAuthenticated(true)
            }
        };
    
        checkAuth();
      }, [authenticated]);
  return (
    <>
     {authenticated ? <Student/> : <Login/>}
    </>
  )
}
