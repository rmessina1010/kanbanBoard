import './App.css';
import ProjectArea from './components/project';
import projects from './components/data';

function App() {
  return (
    <div className="App">
      <ProjectArea htag={2} data={projects[0]} />
    </div>
  );
}

export default App;
