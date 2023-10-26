

import React , {useState} from "react";
import { Link } from 'react-router-dom'
export const Register = (props) => {

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    const [registernumber,setRegisternumber] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [confirmpass,setConfirmpass] = useState('');
     const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(email);
    
       }  
    return (
        <>
            <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input  value = {name} onChange = {(e) => setName(e.target.value)}type="text"  name="name" id="name"/>
            <label htmlFor="registernumber">Vehicle Number</label>
            <input  value = {registernumber} onChange = {(e) => setRegisternumber(e.target.value)}type="number" name="registernumber" id="registernumber" />
            <label htmlFor="phonenumber">Phone Number</label>
            <input  value = {phonenumber} onChange = {(e) => setPhonenumber(e.target.value)}type="number" name="phonenumber" id="phonenumber" />
            <label htmlFor="email">email</label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="confirmpassword">Confirm password</label>
            <input value = {confirmpass} onChange = {(e) => setConfirmpass(e.target.value)} type="password" placeholder="********" id="confirmpassword" name="confirmpassword" />
            <button type="submit">Register</button>
        </form>
        <Link to ='/Login'>
      
      <button>Already have an account ? Login here.</button>
         </Link>
         </>
       
    )
}

export default Register