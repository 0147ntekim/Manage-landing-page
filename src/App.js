import './App.css';
import Header from './header';
import About from './description';
import Simplify from './simplify';
import Footer from './components/footer';
import Testimonials from './slider';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <About/>
        <Testimonials/>
        <Simplify/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
