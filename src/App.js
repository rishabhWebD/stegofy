import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Third from './Components/Third';
import Second from './Components/Second';
import Fourth from './Components/Fourth';
import Fifth from './Components/Fifth'
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
     <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Footer/>
    </div>
  );
}

export default App;
