
import './App.css';

import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom'
import Login from './screens/Login';
import Signup from './screens/Signup'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Student from './screens/Student';
import Admin from './screens/Admin';




import AuthTeacher from './screens/AuthTeacher';
import AuthAddStudent from './screens/AuthAddStudent';
import AuthTakeAttendance from './screens/AuthTakeAttendance';
import AuthAddsheets from './screens/AuthAddsheets';
import AuthAddmarks from './screens/AuthAddmarks';
import AuthStudent from './screens/AuthStudent';


function App() {
 
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/teacher' element={<AuthTeacher/>}></Route>
        
        <Route exact path='/student' element={<AuthStudent/>}></Route>
        {/* <Route exact path='/admin' element={<Admin/>}></Route> */}
        <Route exact path='/addstudent' element={<AuthAddStudent/>}></Route>
        <Route exact path='/takeattendance' element={<AuthTakeAttendance/>}></Route>
        <Route exact path='/addsheet' element={<AuthAddsheets/>}></Route>
        <Route exact path='/addmarks' element={<AuthAddmarks/>}></Route>
      </Routes>
      
    </div>
   </Router>
  );
}

export default App;
