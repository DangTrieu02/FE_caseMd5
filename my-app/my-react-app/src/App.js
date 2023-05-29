import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Main from './pages/main';


function App() {
  return (
    <>
    <Routes>
          <Route path='/' element={<Home/>}> 
              <Route path='/main' element={<Main/>}/>

          </Route>
        </Routes>
    </>
  );
}

export default App;
