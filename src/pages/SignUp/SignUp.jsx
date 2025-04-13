import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';

const SignUp = () => {

  const [name,SetName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,SetError] = useState(null);

  const navigate = useNavigate();

  
 const handleSignUp = async (e) =>{
  e.preventDefault();

  if(!name){
    SetError("Please enter your name");
    return;
  }

 if(!validateEmail(email)){
  SetError("Please enter a valid email");
  return;
 }

 if(!password){
  SetError("please enter the password");
  return;
 }
 

 SetError('');

 // Sign UP API call
 try{
  const response = await axiosInstance.post("/create-account", {
    fullName : name,
    email :email,
    password : password,
  });

  // Handle Successful registration response 
  if(response.data && response.data.error){
  SetError(response.data.message)
   return

  }

  if(response.data && response.data.accessToken){
    localStorage.setItem("token",response.data.accessToken)
    navigate('/dashboard')
  }

}  catch(error){
  // Handle Login error
  if(error.response && error.response.data && error.response.data.message){
    SetError(error.response.data.message);
  } else{
    SetError("An unexpected error occured . please try again");
  }


}


   
 };




   

  return (
    <>
   
   <Navbar/>

   <div className="flex justify-center items-center mt-28">

<div className="w-96 border rounded bg-white px-7 py-10">

<form onSubmit={handleSignUp}>

<h4 className="text-2xl mb-7">SignUp</h4>

<input type="text" placeholder="Name" className="input-box" 
        
         value = {name}
         onChange={(e)=>SetName(e.target.value)}
        
        />

<input type="email" placeholder="email" className="input-box" 
        
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
       
       />
  


  <PasswordInput
           value = {password}
           onChange={(e)=>setPassword(e.target.value)}

         />


{error && <p className="text-red-500 text-xs pb-1">{error}</p>}


<button type="submit" className="btn-primary">Create Account</button>

<p className="text-sm text-center mt-4">Already have an Account{" "}<Link to="/login" className=" font-medium text-primary underline">Login</Link>
</p>



    </form>
    </div>
    </div>



    </>

  )
}

export default SignUp