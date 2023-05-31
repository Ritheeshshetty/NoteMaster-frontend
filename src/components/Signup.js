import {React,useState,useContext} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import NoteContext from '../context/notes/noteContext';

const Signup = () => {
  const context = useContext(NoteContext);
    const {showAlert,host} = context;
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const {name,email,password}=credentials
      const response = await fetch(`${host}/api/auth/createuser/`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,password}), 
        });
        const json= await response.json()
        console.log(json)  
        if(json.success&&credentials.password===credentials.cpassword)
        {
          localStorage.setItem('token',json.authToken)
          navigate('/');
          showAlert("SignUp successfull🔥",'success')
      }else if(json.error){
        showAlert(json.error,'danger')
      }
      else{
        showAlert("invalid Credentials",'danger')
      }
        
    }
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const [passtype, setPasstype] = useState("password")
  const pass=()=>{
    if(passtype==='password'){
      setPasstype('text')
     }
     else{
      setPasstype('password')
     }
  }
  return (
    <>
    <div className="login">
    <div className='uplog'>
        <form action="" autoComplete="new-password">
        <p className='loginicon'><i className="fa-regular fa-user"></i></p>
        <label htmlFor="name"></label>
            <input type="text" id="name" name='name' value={credentials.name} onChange={onChange} placeholder='Enter your name'autoComplete='off' autoFocus="on"  required/>
            <label htmlFor="email"></label>
            <input type="email" id="email" name='email' value={credentials.email} onChange={onChange} placeholder='Enter your email address'  role="presentation" autoComplete="off"  required/>
            <label htmlFor="password"></label>
            <input type={passtype} id="password" name='password' value={credentials.password} onChange={onChange} placeholder='Enter your password'  autoComplete="new-password" minLength={5} required/>
            <label htmlFor="cpassword"></label>
            <i className={`fa-solid fa-${passtype==='password'?'eye-slash':'eye'}`} onClick={pass}></i>
            <input type={passtype} id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange} placeholder='confirm your entered password' autoComplete="new-password" minLength={5} required/>
            
            <input type="button" value={"Signup"} onClick={handleSubmit} disabled={credentials.name.length<2&&credentials.password.length<4?true:false} style={{backgroundColor:credentials.name.length<3||credentials.password.length<5||credentials.password!==credentials.cpassword?'#09192e':'#172b46'}}/>
            <p>Already a user? <Link to="/">click here</Link> </p>
        </form>
    </div>
    </div>
</>
  )
}

export default Signup