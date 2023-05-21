import './App.css';
import Bottom from './components/Bottom/Bottom';
import Coach from './components/Coach/Coach';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Coach />
      <Bottom />
    </div>
  );
}

export default App;
