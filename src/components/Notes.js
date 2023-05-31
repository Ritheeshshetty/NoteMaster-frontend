import React,{useContext,useEffect,useState} from 'react'
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes,getNotes,editNote} = context;
    let navigate = useNavigate();
  
    useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes();
      }
      else{
        navigate('/');
      }
      // eslint-disable-next-line 
    }, [])

    const [note, setNote] = useState({id:'',etitle:'',edescription:'',etag:''});
    const handleSubmit=(e)=>{
      console.log(`updating the note!...`,note)
        e.preventDefault();
        editNote(note.id,note.etitle,note.edescription,note.etag)
        close()
        // showAlert("Your note is updated!",'success')
        // console.log(note.etitle)
       //  addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const updateNote=(currentNote)=>{
      // open()
      modal.showModal();
      setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    }   
    
    const modal=document.querySelector('#modal');
    // const openModal=document.querySelector('.open-button');
    // const closeModal=document.querySelector('.close-button');
    // const open=()=>{
    //   modal.showModal();
    // }
     const close=()=>{
      modal.close()
     }

  return (
    <>
    <AddNote/>
    {/* <button className="button open-button" onClick={open}>click</button> */}
    
    <dialog className="modal" id="modal" >
    <button className="button close-button" onClick={close}><i className="fa-solid fa-circle-xmark fa-2xl"></i></button>
    <form action="">
        <label htmlFor="title">Title</label>
        <input type="text"  id='title' name='etitle' value={note.etitle} onChange={onChange} minLength={5} required/>
        <label htmlFor="description">Description</label>
        <input type="text"  id='description' name='edescription' value={note.edescription} onChange={onChange} minLength={5} required/>
        <label htmlFor="tag">Tag</label>
        <input type="text"  id='tag' name='etag' value={note.etag} onChange={onChange}/>
        <input type="button" value="Update note" className="btn" onClick={handleSubmit} disabled={note.etitle.length>4&&note.edescription.length>4?false:true} style={{backgroundColor:note.etitle.length>4&&note.edescription.length>4?'#172b46':'#09192e'}}/>
      </form>
      </dialog>
    <div className="your_note">
      <h1>Your notes</h1>
      {notes.length===0&& <h4>No notes to display</h4>}
      {notes.map((note)=>{
        return <NoteItem key={note._id} updateNote={updateNote} note={note}/>
      })}
    </div>
    </>
  )
}

export default Notes