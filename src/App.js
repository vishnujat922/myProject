//1.Import Area
import logo from './logo.svg';
import './App.css';

//1.1 Import{ Some Named Import} from somelocation/somelibrary;

//1.2 Import someDefaultImport from somelocation/ somelibrary;
import CompA from './Components/CompA';
import CompB from './CompB';
function App() {
  return (
    <div className="App">
      <CompA address="From Neemuch"/>
      <CompA address="From Manasa near Village Pawati"/>
      <CompB/ >
    </div>
  );
}

export default App;
