const reducer = (state, action) =>{
    console.log(action)
    switch(action.type){
        case "ADD_NOTE": 
            {let notes = state.notes.slice()
            notes.push(action.note)
            return {notes}}
        case "DELETE_NOTE": 
            {let notes = state.notes.slice()
            notes.splice(action.i, 1)
            return {notes}}
        case "ARCHIVE_NOTE": 
            {let notes = state.notes.slice()
            notes[action.i].archived = true
            return {notes}}
        case "UNARCHIVE_NOTE": 
            {let notes = state.notes.slice()
            notes[action.i].archived = false
            return {notes}}
        default: return state
    }
}
export default reducer