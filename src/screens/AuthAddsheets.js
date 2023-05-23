import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AddSheet from './AddSheet';
import Login from './Login';

export default function AuthAddsheets() {
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
    <>
     {authenticated ? <AddSheet/> : <Login/>}
    </>
  )
}
