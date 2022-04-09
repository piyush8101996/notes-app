import { useEffect, useState } from "react";
import Addnote from "../addnote/Addnote";
import Note from "../note/Note";
import style from "./Notesapp.module.css"

const Notesapp = () => {
    const [note,setNote]=useState([])
    const [text,setText]=useState('')
    const charvalue=200;
       
    const textchangeHandler=(e)=>{
        if(charvalue-e.target.value.length>=0)
        setText(e.target.value)
    }
    console.log(text.length)
 
    // useEffect(()=>{
    //     const notes = JSON.stringify(note);   
    //     localStorage.setItem('noteslist',notes);// setting data to local storage
    // }, [note]);
    

    useEffect (()=>{
        const noteslist=localStorage.getItem('noteslist')
        if(noteslist){
            const notes=JSON.parse(noteslist)
            setNote(notes)
        }
    },[])


    const savedataHandler =()=>{
        if(text.trim()){
            const notes=[...note]
            const date = new Date()
            notes.push({
                text:text,
                date:date.toLocaleDateString()
            })
            setNote(notes)
            localStorage.setItem('noteslist',notes)
            setText(" ")
        }
       
    }

    const deletehandler = (index) =>{
        const notes=[...note]
        notes.splice(index,1);
        setNote(notes)

    } 

    return (
        <div className={style.notesapp}>
            <Note notelist={note} onDeleteHandler={deletehandler}/>
            <Addnote value={text} texthandler={textchangeHandler}
            saveHandler={savedataHandler}/>
        </div>
    )
}
export default Notesapp;