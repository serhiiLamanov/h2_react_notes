import React from "react"

export default function EditorsBackdrop(Editor){
    return function({display}){
        return(display ? <div className={"editorsBackdrop"}>{<Editor/>}</div> : null)
    }
}