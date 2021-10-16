import React from "react";
import CATEGORIES from "../CATEGORIES";

export default function TableCategoriesSummary(props){
    return(
        <table>
            <thead><tr><th>Note category</th><th>Active</th><th>Archived</th></tr></thead>
            <tbody>
                {props.summary.map((category, i) => 
                    <tr key={CATEGORIES[i]}><td>{CATEGORIES[i]}</td><td>{category.active}</td><td>{category.archived}</td></tr>)}
            </tbody>
        </table>
    )
}