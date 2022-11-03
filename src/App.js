import './App.css';
import Pump from './Components/Pump/Pump';
import About from './Components/About/About';
import Techno from './Components/Techno/Techno';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { ValProvider } from './context/context';
function App() {
  return (
    <div className="App">
      Holis
      <ValProvider>
      <Pump/>
      <About/>
      <Techno/>
      <Projects/>
      <Contact/>
      </ValProvider>
    </div>
  );
}

export default App;
