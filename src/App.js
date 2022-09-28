import React,{useEffect, useState} from 'react';
import './styles.css';

function App() {
  const initialVal = { username:"", email:"", password:"" };
  const[input, setInput] = useState(initialVal);
  const[inputError, setInputError] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);


const handleChange = (e) => {
   const {name, value} = e.target;
   setInput({...input, [name]: value});
   console.log(input)
}

const handleSubmit = (e) => {
   e.preventDefault();
   setInputError(validate(input));
   setIsSubmit(true);
}

useEffect(() =>{
  console.log(inputError)
  if(Object.keys(inputError).length === 0 && isSubmit){
    console.log(inputError)
  }
},[inputError])


const validate = (values) => {
   const error = {};
   const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
   if(!values.username){
     error.username = "Username is required!"
   }
   else if(!regex.test(values.email)){
    error.email = "invalid email credentials!"
   }
   if(!values.email){
    error.email = "email is required!"
  }
   if(!values.password){
    error.password = "password is required!"
  }
    else if(values.password.length < 4){
    error.password = "invalid password credentials!"
   }
   return error;
}

  return (
     <div>

     {Object.keys(inputError).length === 0 && isSubmit ?  
        (<div>Signed in Successfully</div>) : 
        ( <pre>{JSON.stringify(input, undefined, 3)}</pre>)   
      }       
       <form onSubmit={handleSubmit}>
       <h3>Login form </h3>
       <div>
       <span>Username:</span>
       <input type='text' name='username' value={input.username} 
       onChange={handleChange}
       /><br/>
       </div>
       <p>{inputError.username}</p>
       <div>
       <span>Email id:-  </span>
       <input type='text' name='email' value={input.email} 
       onChange={handleChange}
       /><br/>
       </div>
       <p>{inputError.email}</p>
       <div>
       <span>Password:- </span>
       <input type='text' name='password' value={input.password} 
       onChange={handleChange}
       />
       </div>
       <p>{inputError.password}</p>
       
       <button >submit</button>
       </form>
     </div>
  )
}

export default App;