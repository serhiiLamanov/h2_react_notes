import { connect } from "react-redux"
import EditorsBackdrop from "../component/EditorsBackdrop"
import NoteEditor from "./NoteEditor"

const mapStateToProps = (state) => {
    return {
        display: state.isNoteEditing
    }
 }

 export default connect(mapStateToProps)(EditorsBackdrop(NoteEditor))