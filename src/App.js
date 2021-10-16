import './App.css';
import TableNotes from './container/TableNotes';
import TableCategoriesSummary from './container/TableCategoriesSummary';
import EditorsBackdrop from './container/EditorsBackdrop';

function App() {
  return (
    <div className="App">
      <TableNotes/>
      <TableCategoriesSummary/>
      <EditorsBackdrop/>
    </div>
  );
}

export default App;
