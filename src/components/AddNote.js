import React,{useContext,useState} from 'react'
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:'',description:'',tag:''})
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(note.title)
        addNote(note.title,note.description,note.tag);
        setNote({title:'',description:'',tag:''})
        // showAlert("Your note is added!",'success')
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="add_note">
      <h1>Add a note</h1>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" onChange={onChange} id='title' name='title' value={note.title} minLength={5} required/>
        <label htmlFor="description">Description</label>
        <input type="text" onChange={onChange} id='description' name='description' value={note.description} minLength={5} required/>
        <label htmlFor="tag">Tag</label>
        <input type="text" onChange={onChange} id='tag' name='tag' value={note.tag}/>
        <input type="button" value="Add note" className="btn" onClick={handleSubmit} disabled={note.title.length>4&&note.description.length>4?false:true } style={{backgroundColor:note.title.length>4&&note.description.length>4?'#172b46':'#09192e'}}/>
      </form>
    </div>
  );
};

export default AddNote;
