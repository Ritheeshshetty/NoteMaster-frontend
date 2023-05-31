import React,{useContext} from "react";
import NoteContext from '../context/notes/noteContext';


function Alert() {
  const context = useContext(NoteContext);
  const {alert}=context;
  // const{message,type}=alert;
  const color=(type)=>{
    if (type==='success')
    {
      return 'green'
    }
    else if(type==='danger'){
      return 'red'
    }
  }
  const icon=(type)=>{
    if(type==='success'){
      return 'check'
    }
    else if(type==='danger'){
      return 'xmark'
    }
   
  }
  
  // const handle_close=()=>{
  // document.getElementById("document.getElementById(at746427)").style.display="none"
  // }
  return (
    <>
    <div className="alert" style={{backgroundColor:color(alert.type),display:alert===""?'none':''}}>
    <i className={`fa-regular fa-circle-${icon(alert.type)} fa-2xl`} style={{color:"white"}}></i>{alert.message}
    </div>
    
   {/* <div>
      
       <div className="AT-alert-card" id="document.getElementById(at746427)">
        <div
          className="AT-alert-card-close"
          onClick={handle_close}
        >
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
          </svg>
        </div>
        <div className="text-component">
          <div className="text-layer">
            <svg aria-hidden="true" className="iconsvg" viewBox="0 0 48 48">
              <path
                d="M46.019,38.447,26.566,6.309a3,3,0,0,0-5.132,0L1.982,38.447A3,3,0,0,0,4.548,43h38.9a3,3,0,0,0,2.568-4.553Z"
                fill="#ffd633"
                opacity="0.5"
              />
              <g fill="#222">
                <polygon points="25.757 16.182 25.481 31.725 22.53 31.725 22.252 16.182 25.757 16.182" />
                <circle cx="24" cy="36" r="2" />
              </g>
            </svg>
            <span>{props.message}</span>
          </div>
          <p className="sub-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            accusantium maxime voluptatem praesentium neque consectetur delectus
            debitis quibusdam quisquam at?
          </p>

          <div className="flex">
            <a className="btn--subtle" href="/">
              Yes
            </a>
            <a className="btn--primary" href="/">
              No
            </a>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Alert;
