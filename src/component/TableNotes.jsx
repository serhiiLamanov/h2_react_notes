import React, { useState } from "react";
import MaterialIconButton from "./MaterialIconButton";
import RowNote from "./RowNote";

export default function TableNotes(props){
    let [showArchived, useShowArchived] = useState(false)
    const useShowHideArhivedNotes = () => useShowArchived(showArchived = !showArchived)
    // console.log(props.handler)
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th><th>Created</th><th>Category</th><th>Content</th><th>Dates</th>
                    <th>
                        <MaterialIconButton action="archive" onClick={useShowHideArhivedNotes} />
                        <MaterialIconButton action="delete" />
                    </th>
                </tr>
            </thead>
            <tbody className={showArchived ? 'showArchived': null}>
                {props.notes.map((note,i) => <RowNote note={note} actionsHandler={props.handler} key={i+1}/>)}
            </tbody>
            <tfoot>
                <tr><td colSpan="6"><button onClick={props.createNote}>Create note</button></td></tr>
            </tfoot>
        </table>
    )
}