import React,{useState} from "react";
import "./App.css";
import picforproject from "./images/picforproject.png";
import { FcGoogle} from "react-icons/fc";
import { FaFacebookSquare} from "react-icons/fa";


const App = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');


const handelSignup = (e) => {
    e.preventDefault();
    // validate form input
    const newError = [];
    if (!name || !email || !password || !confirmPassword){
        newError.push('All fields are mandatory');
    }

    if (password !== confirmPassword){
        newError.push('Password do not match');
    }
    setError(newError);

    // Show success message
    setSuccess('signup successful');

}

return(

    <div className = "signup-container">
        <div  className = "signup-container-left">
           <div className="text"> Find 3D Objects, Mockups <br></br>
            and llustration here  </div>
            <img src= {picforproject} alt="picforproject"/>
         </div>
       
    
        <div className = "signup-container-right">
            <h1> Create Account </h1>
            <div className="btntop"> 
                    <button> <span><FcGoogle/> </span>Sign up with Google</button>
                    <button> <span><FaFacebookSquare/></span>Sign up with Facebook</button>
            </div>

                <h3>-OR-</h3>
             
            <input 
              type="text" placeholder="Full Name" value= {name} onChange={(e) => setName(e.target.value)}/>
             
             <input
              type="email"  placeholder="Email Address" value= {email} onChange={(e) => setEmail(e.target.value)}/>
           
            <input
              type="password" placeholder="Password" value= {password} onChange= {(e) => setPassword(e.target.value)}/> 
             
            <input
              type="password" placeholder="Confirm Password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
    

            {error && <div className= "error">{error}</div>}
            {success && <div className = "success">{success}</div>}
            <button className="btn" onClick={handelSignup}>Create Account</button>
        </div>

         </div>

         


)

}

export default App;

