import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Login() {
  const [credentials,setcredentials]=useState({password:"",USN:""})
 let navigate=useNavigate()

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:4000/api/loginuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({password:credentials.password,USN:credentials.USN})
    })
    const json=await response.json()
    console.log(json)

    if(!json.success)
    {
      alert("Enter valid credentials") 
      setcredentials({...credentials,['password']:""})
    }
    else{
      localStorage.setItem("authToken",json.authToken)
      navigate("/")
    }
       
}

const onChange=(event)=>{
     setcredentials({...credentials,[event.target.name]:event.target.value })
}

  return (
    <div>
      <section className="vh-100" style={{"backgroundColor": "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{"borderRadius": "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form className="mx-1 mx-md-4" onSubmit={handlesubmit}>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
                      <label className="form-label" htmlFor="name">Your Name</label>
                    </div>
                  </div> */}

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" className="form-control" name='USN' value={credentials.USN} onChange={onChange}/>
                      <label className="form-label" htmlFor="usn">Your USN</label>
                    </div>
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" name='email' value={credentials.email} onChange={onChange}/>
                      <label className="form-label" htmlFor="email">Your Email</label>
                    </div>
                  </div> */}

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name='password' value={credentials.password} onChange={onChange}/>
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="password">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                  <div className="d-flex  mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    <Link to='/signup' className="btn btn-primary btn-lg mx-3">Signup</Link>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}