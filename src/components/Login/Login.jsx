import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../firebase/firebase.config';
import { Link } from "react-router-dom";

const Login = () => {
       const [loginerror, setLoginerror] = useState('') ;
       const emailRef =  useRef(null) ;
    const handleLogin =(e) =>{
        e.preventDefault() ;
        setLoginerror('') ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;
       
        signInWithEmailAndPassword(auth , email , password)
        .then( result => {
            console.log(result.user)
            if(result.user.emailVerified){
              setLoginerror('login successfully')
            }
            else{
              alert("please verify your email account") ;
            }
            
        })
        .catch(error => {
          console.error(error)
          setLoginerror(error.message) ;
        })

    }
    const handleforgetPassword = ()=>{
      const email  = emailRef.current.value ;
      console.log('send reset email' ) ;

      sendPasswordResetEmail(auth , email)
     .then(()=>{
      alert("Please check your email") ;
     })
     .catch(error =>{
      console.log(error) ;
     })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                 name='email'
                 ref={emailRef}
                placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name='password'
                placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a onClick={handleforgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
              
            </form>
            {loginerror} ;
            <p>New to this website please <Link to='/register'>Register</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;