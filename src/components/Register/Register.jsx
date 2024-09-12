import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from 'react';
const Register = () => {
    const [registerError , setregisterError] = useState('') ;
    const [success, setSuccess]= useState('') ;
    const [showpass, setShowpass] = useState(false) ;
   
    
    const handleregister = e =>{
        e.preventDefault() ;
         setregisterError("") ;
         setSuccess('') ;
         const name = e.target.name.value
         const email =  e.target.email.value 
         const password = e.target.password.value 


         createUserWithEmailAndPassword(auth , email , password) 
         .then( result => {
            console.log(result.user) ;
            sendEmailVerification(auth.currentUser)
            .then(()=>{
                alert("Please check your email and verify your account") ;
            })
            updateProfile(auth.currentUser,{
                displayName:name 
            })
            setSuccess('your registes is complete') ;
         })
         .catch( error => {
           setregisterError(error.message) ;
         })
    }
    return (
        <div>
            <h3 className='font-bold m-2'>Please Register</h3>
            <form onSubmit={handleregister}>
            <input
                 className='border-black bg-gray-100 rounded-lg px-2 py-1 w-3/4 mb-2' 
                 type="text" 
                 name="name" 
                
                 id=""placeholder='your name'/>
                <br />
                <input
                 className='border-black bg-gray-100 rounded-lg px-2 py-1 w-3/4 mb-2' 
                 type="email" 
                 name="email" 
                
                 id=""placeholder='Email addres'/>
                <br />

                <div>
                <input className='border-black bg-gray-100 rounded-lg px-2 py-1 w-3/4 mb-2 relative' type={  showpass? "text" :    "password"} name="password" id="" placeholder='password' />
                <span className='absolute mt-2' onClick={()=>{
                    setShowpass(!showpass) ;
                }}> { showpass ? <FaEyeSlash />  : <FaEye />}</span>
                </div>
                
                <br />
                <input className='btn btn-secondary w-3/4' type="submit" value="submit" />
            </form>
            {registerError}
            {success}
            <p>Already have a account . Please <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;