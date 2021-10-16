import { connect } from "react-redux";
import TableNotes from "../component/TableNotes";
import { deleteNote, archiveNote, unarchiveNote } from "../redux/acions";


const mapStateToProps = (state) => {
    return {
        notes: state.notes
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {createNote: () => console.log('createNote'),
        handler:{
            editNote: (i) => console.log('editNote ',i),
            archiveNote: (i) => dispatch(archiveNote(i)),
            unarchiveNote: (i) => dispatch(unarchiveNote(i)),
            deleteNote: (i) => dispatch(deleteNote(i)),
        }
       
        // reset: () => dispatch(reset())
    };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(TableNotes)