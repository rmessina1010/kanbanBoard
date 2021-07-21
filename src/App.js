import './App.css';
import ProjectArea from './components/project';
import projects from './components/data';

function App() {
  return (
    <div className="App">
      <ProjectArea hx={2} data={projects[0]} canAppend={(index) => index < 1} render={(item, index) => item.item + ' ' + item.id} />
    </div>
  );
}

export default App;
