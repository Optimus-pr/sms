import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AddMarks from './AddMarks';
import Login from './Login'

export default function AuthAddmarks() {
    const navigate=useNavigate()
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            {
                const user=localStorage.getItem('user')
                if(user==="admin")
                    setAuthenticated(true)
            }
        };
    
        checkAuth();
      }, [navigate]);
  return (
    <> {authenticated ? <AddMarks/> : <Login/>}</>
   
  )
}
