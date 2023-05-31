import React,{useState} from "react";
import NoteContext from "./noteContext";


const NoteState=(props)=>{
    const host="https://notemasterbackend.onrender.com"
    const notesInitial=[]
    const [notes, setNotes] = useState(notesInitial)


    const [alert, setAlert] = useState("");
    const showAlert=(message,type)=>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(() => {
        setAlert("");
      }, 1800);
    }

    // Get all note
    const getNotes=async()=>{
      // API call
      // showAlert("Your notes is loading",'')
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      });
      const json= await response.json();
      console.log(json)
      setNotes(json)
    }

    // ADD note
    const addNote=async(title,description,tag)=>{
      // API call
      const response = await fetch(`${host}/api/notes/addnote/`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
        body: JSON.stringify({title,description,tag}), 
      });
      const note=await response.json();

      
      console.log("Adding a new note")
      setNotes(notes.concat(note))
      showAlert("Your notes is added",'success')

    }
    // DELETE note
    const deleteNote=async(id)=>{
       // API call
       const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        }
      });
      const json= response.json();
      console.log(json)
    

      console.log("Deleting the note"+id)
      const newNotes=notes.filter((note)=>{
        return note._id!==id
      })
      setNotes(newNotes)
      showAlert("Your notes is deleted!",'danger')
    }
    // EDIT note
    const editNote=async(id,title,description,tag)=>{
      // API call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({id,title,description,tag}), 
      });
      const json=await response.json();
      console.log(json)
    
      let newNotes=JSON.parse(JSON.stringify(notes))
      // logic to edit in client side
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id===id){
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
        
      }
      setNotes(newNotes)
      showAlert("Your note is updated!",'success')
    }
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes,alert,showAlert,setAlert,host}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;