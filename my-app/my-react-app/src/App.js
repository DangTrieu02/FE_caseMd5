import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
