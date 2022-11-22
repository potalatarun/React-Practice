import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Welcome1 from './components/Welcome1';
import Greet from './components/Greet';
import Counter from './components/Counter';
// welcome.js says about the props concept using the functional componeents
// welcome1.js saya about the props concept using the class components
// Greet.js say about the state concept 

function App() {
  return (
    <div className="App">
      {/* <Welcome name="tarun" father_name="satya">
        <p>Hello this was the example of props</p>
      </Welcome>
      <Welcome1 name="tarun" father_name="satya">Hellp</Welcome1> */}
      {/* <Greet></Greet> */}

      <Counter/>
    </div>
  );
}

export default App;
