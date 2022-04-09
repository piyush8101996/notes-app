import style from "./Addnote.module.css"
const Addnote = (props) => {


    return (
        <div className={style.addnote} >
            <textarea row="6" col="8 " placeholder="Type your notes" onChange={props.texthandler} value={props.value}/>
            {console.log(props.value.length)}
            <div className={style.addnote_footer}>
                <button className={style.btn} onClick={props.saveHandler} >AddNote</button>
            </div>
        </div>
    )
}
export default Addnote;