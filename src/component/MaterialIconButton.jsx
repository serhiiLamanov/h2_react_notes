import React from "react"

export default function MaterialIconButton(props){
    const {action, onClick, ...otherProps} = props
    return(<button
            className= {`material-icons ${action}-btn`}
            onClick = {onClick} 
            {...otherProps}
            >{action}
            </button>)
}