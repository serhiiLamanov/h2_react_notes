import { connect } from "react-redux";
import NoteEditor from "../component/NoteEditor";
import { addNote, abortEditingNote } from "../redux/acions";

const mapStateToProps = (state) => {
    return {
        note: state.notes[state.editingNoteIndex] || {}
    }
 }
 const mapDispatchToProps = (dispatch) => {
    return {onSubmit: (note) => dispatch(addNote(note)),
        onAbortNoteEditing: () => dispatch(abortEditingNote())
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor)