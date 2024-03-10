import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <User user='New'/>
     <User user='Old'/>
     <User user='Updated'/>
    </div>
  );
}

export default App;
