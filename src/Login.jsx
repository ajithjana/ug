
import React , {useState} from "react";
import { Link } from 'react-router-dom'



export const Login = (props) => {
    const [email,setEmail] = useState('');
const [pass,setPass] = useState('');
 const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(email);

   }  
    return (
        <div className="container mt-3 pt-2">
        <h2 className="text-center">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="email">email</label>
            <input className="form-control" value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input className="form-control" value = {pass} onChange = {(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="btn btn-success">Login</button>
        </form>
      <Link to ='/Register'>
      
   <button className="btn">Don't have an account ? Register.</button>
      </Link>
        
       
        </div>
    )
}

export default Login