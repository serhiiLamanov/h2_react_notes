import { connect } from "react-redux";
import TableCategoriesSummary from "../component/TableCategoriesSummary";

const mapStateToProps = (state) => {
    const A = new Array(4)
    for(let i=0; i<A.length; i++){
        A[i] = {active:0, archived:0}
    }
    return {
        summary:state.notes.reduce((acc, curr) => ++acc[curr.category][curr.archived ? "archived" : "active"] && acc, A)
    };
 };

 export default connect(mapStateToProps, null)(TableCategoriesSummary)