import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Jobs  from './pages/Jobs';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route  exact path ="/feed" element = {<Home/>}/>
          <Route exact path="/jobs" element = {<Jobs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
