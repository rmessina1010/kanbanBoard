import './App.css';
import AddItem from './components/additem';

function App() {
  return (
    <div className="App"><AddItem update={e => alert(e)} /></div>
  );
}

export default App;
