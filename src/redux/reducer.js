const reducer = (state, action) =>{
    switch(action.type){
        case "ADD_NOTE": 
            {let notes = state.notes.slice()
            state.editingNoteIndex === null ? notes.push(action.note) : notes[state.editingNoteIndex] = action.note
            return {...state, notes, editingNoteIndex: null, isNoteEditing: false}}
        case "DELETE_NOTE": 
            {let notes = state.notes.slice()
            notes.splice(action.i, 1)
            return {...state, notes}}
        case "ARCHIVE_NOTE": 
            {let notes = state.notes.slice()
            notes[action.i].archived = true
            return {...state, notes}}
        case "UNARCHIVE_NOTE": 
            {let notes = state.notes.slice()
            notes[action.i].archived = false
            return {...state, notes}}
        case "CREATE_NOTE":
            return{...state, isNoteEditing: true}
        case "EDIT_NOTE":
            return{...state, editingNoteIndex: action.i, isNoteEditing: true}
        case "ABORT_EDITING_NOTE":
            return{...state, editingNoteIndex: null, isNoteEditing: false}
        default: return state
    }
}
export default reducer