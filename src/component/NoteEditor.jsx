import React, {useState} from "react"
import CATEGORIES from "../CATEGORIES"
import findDates from "../utils/findDates"

export default function NoteEditor(props){
    const initialNote = Object.assign(
        {category:"", name:"", content:"", created: new Date().toISOString().slice(0, 10), dates:"", archived:false},
        props.note)

    let [note, useNote] = useState(initialNote)
    
    const useContentOnInput = ({target:{value}}) => useNote({...note, content: value, dates: findDates(value)})
    const useOnChange = ({target:{name, value}}) => useNote({...note, [name]:value})
    const useOnCheck = ({target:{name, checked}}) => useNote({...note, [name]:checked})

    const useReset = event => {
        event.preventDefault()
        useNote(initialNote)
    }

    return(
        <form onSubmit={() => props.onSubmit(note)} onReset={useReset}>
            <div>
                <label>Category
                    <select name="category" value={note.category ??  ""} onChange={useOnChange} required>
                        <option disabled value="">choose category</option>
                        {CATEGORIES.map((categoryName,i) => <option value={i} key={categoryName}>{categoryName}</option>)}
                    </select>
                </label>
                <label>Name<input type="text" name="name" maxLength="20" required value={note.name} onChange={useOnChange}/>
                </label>
            </div>
            <label>Content <input type="text" name="content" value={note.content} onInput={useContentOnInput}/>
            </label>
            <div>
                <span>Created <input type="date" name="created" readOnly value={note.created}/></span>
                <span>Dates <input type="text" name="dates" readOnly value={note.dates}/></span>
                <label>Archived<input type="checkbox" name="archived" checked={note.archived} onChange={useOnCheck}/></label>
            </div>
            <div>
                <input type="submit"/>
                <input type="reset" />
                <input type="button" value="exit" onClick = {props.onAbortNoteEditing}/>
            </div>
        </form>
    )
}