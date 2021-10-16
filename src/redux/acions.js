export function addNote(note){
    return{
        type:"ADD_NOTE",
        note
    }
}

export function deleteNote(i){
    return{
        type: "DELETE_NOTE",
        i
    }
}

export function archiveNote(i){
    return{
        type: "ARCHIVE_NOTE",
        i
    }
}

export function unarchiveNote(i){
    return{
        type: "UNARCHIVE_NOTE",
        i
    }
}
export function createNote(){
    return{
        type:"CREATE_NOTE"
    }
}
export function editNote(i){
    return{
        type:"EDIT_NOTE",
        i
    }
}
export function abortEditingNote(){
    return{
        type:"ABORT_EDITING_NOTE"
    }
}

