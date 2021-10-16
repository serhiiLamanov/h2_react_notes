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