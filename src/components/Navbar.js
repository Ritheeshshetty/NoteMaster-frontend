import React,{useEffect} from 'react'
import { Link,useLocation,useNavigate} from 'react-router-dom'

const Navbar = () => {
  let location=useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location]);

  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <>
        <ol className='navbar'>
            <p className="navtitle"><i className="fa-regular fa-note-sticky fa-xl"></i>Notemaster</p>
            {localStorage.getItem('token')?<li className="item1" ><Link to="/home" style={{"color":`${location.pathname==='/home'?'white':''}`}}>Home</Link> </li>:<p className="navtitle navmob"><i className="fa-regular fa-note-sticky fa-xl"></i>Notemaster</p>}
            <li className="item2"><Link to="/about" style={{"color":`${location.pathname==='/about'?'white':''}`}}>About</Link></li>
            {!localStorage.getItem('token')?<li className='item3'><Link to="/"><button className='button button2'>Login</button></Link></li>:<span></span>}
            {!localStorage.getItem('token')?<li className='item4'><Link to="/signup"><button className='button'>Sign Up</button></Link></li>:<li className='item3 item5'><Link to="/"><button className='button' onClick={handleLogout}>Logout<i className="fa-solid fa-arrow-right-from-bracket"></i></button></Link></li>}
        </ol>
    </>
  )
}

export default Navbar