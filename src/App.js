import './App.css';
import chai from './Chai.jpeg';
import BaristaForm from './Components/BaristaForm';


function App() {
  return (
    <div className="App">
     <div className="title">
         <h1>
         On my grind
        </h1>
         <p> So you think you can barista? Let's put that to the test..</p>
     </div>
        <BaristaForm />
    </div>
  );
}

export default App;
