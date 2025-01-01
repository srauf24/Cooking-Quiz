import './App.css';
import butterChicken from './butter_chicken.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={butterChicken} alt="Butter Chicken" className="ButterChicken" />
        <h1>On My Grind</h1>
        <p>So you think you can cook Pakistani food? Let's put that to the test...</p>
      </header>
    </div>
  );
}

export default App;
