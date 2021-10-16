import { connect } from "react-redux";
import TableNotes from "../component/TableNotes";
import { deleteNote, archiveNote, unarchiveNote, editNote,createNote  } from "../redux/acions";


const mapStateToProps = (state) => {
    return {
        notes: state.notes
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {createNote: () => dispatch(createNote()),
        handler:{
            editNote: (i) => dispatch(editNote(i)),
            archiveNote: (i) => dispatch(archiveNote(i)),
            unarchiveNote: (i) => dispatch(unarchiveNote(i)),
            deleteNote: (i) => dispatch(deleteNote(i)),
        }
    }
 };

 export default connect(mapStateToProps, mapDispatchToProps)(TableNotes)