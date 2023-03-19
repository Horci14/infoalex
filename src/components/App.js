import '../styles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import Privacy from './Privacy.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/infoalex' element ={<Home/>}/>
          <Route path='/infoalex/privacy' element ={<Privacy/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
