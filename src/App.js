import './App.css';
import chai from './Chai.jpeg';
import BaristaForm from './Components/BaristaForm';
import AudioPlayer from './Components/AudioPlayer'; // Import the AudioPlayer

function App() {
  return (
      <div className="App">
          <div className="title">
              <img src={chai} alt="Chai" className="Chai"/>
              <h1>On My Grind</h1>
              <AudioPlayer/> {/* Include the AudioPlayer here */}
          </div>
          <p className="subtitle">So you think you can barista? Let's put that to the test...</p>

          <BaristaForm/>
      </div>
  );
}

export default App;
