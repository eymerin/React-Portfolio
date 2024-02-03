// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
