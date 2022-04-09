import style from "./Note.module.css"
import { MdDeleteForever } from "react-icons/md"
const Note = (props) => {
    const noteslist = props.notelist.map((list, index) => {
        return (
            <div className={style.note} key ={index}>
                <p>{list.text}</p>
                <div className={style.note_footer}>
                    <small> {list.date} </small>
                    <MdDeleteForever onClick={()=>{
                        props.onDeleteHandler(index)
                    }}/>
                </div>
            </div>
        )
    })
    return (
        <>
        {noteslist}
        </>
    )
}

export default Note;