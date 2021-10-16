import React from "react"

export default function EditorsSelect(props){
    const {name,value,onChange, options, ...other} = props
    return(
        <select name={name} value={value} onChange={onChange} {...other}>
            
        </select>
    )
}