import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext';

function NoteItem(props) {
  const context = useContext(NoteContext);
  const {deleteNote}=context
  const {note,updateNote}=props

  return (
    <>
   <div className='card-con'>
        <div className="card">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <p>{note.tag}</p>
            <div className="icon">
            <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-solid fa-file-pen" onClick={()=>{updateNote(note)}}></i>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default NoteItem