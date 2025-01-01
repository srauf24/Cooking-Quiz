import './App.css';
import butterChicken from './butter_chicken.jpeg';
import chai from './Chai.jpeg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chai} alt="Chai" className="Chai" />
        <h1>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </header>
    </div>
  );
}

export default App;
