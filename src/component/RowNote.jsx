import React from "react";
import MaterialIconButton from "./MaterialIconButton";
import CATEGORIES from "../CATEGORIES"
import formatISOStringDate from "../utils/formatISOStringDate"

export default function RowNote(props){
    const NOTE_ACTIONS = ["edit", "archive", "unarchive", "delete"]
    const {name, created, category, content, dates, archived} = props.note

    const getIndex = el => [...el.closest("tbody").rows].indexOf(el.closest("tr"))
    
    return(
        <tr className={archived ? 'archived' : null}>
            <td>{name}</td>
            <td>{formatISOStringDate(created)}</td>
            <td>{CATEGORIES[category]}</td>
            <td>{content}</td>
            <td>{dates}</td>
            <td>{NOTE_ACTIONS.map(action => 
            <MaterialIconButton action={action} onClick={({target})=>props.actionsHandler[action+'Note'](getIndex(target))} key={action}/>)}</td>
        </tr>
    )

}