// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { Header } from './components/header';
// eslint-disable-next-line no-unused-vars
import { Sidebar } from './components/sidebar';
import { Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home';
import Main from './pages/main';
import Login from './pages/user/login'
import Register from './pages/user/register'
import { Create } from './pages/home/wallet/add';
import Update from './pages/home/wallet/update';


function App() {
  let user = useSelector(({user}) => {
    return user.currentUser;
})
  return (
    <>
    <Routes>
    <Route path={'login'} element={<Login/>}/>
    <Route path={'register'} element={<Register/>}/>
                {
                    user ?
                        <>
                            <Route path={'home'} element={<Home/>}>
                              <Route path={'main'} element={<Main/>}/>
                              <Route path={'addWallet'} element={<Create/>}/>
                              <Route path={'updateWallet/:id'} element={<Update/>}/>
                            </Route>
                            <Route path={"*"} element={<Navigate to={'home'}/>}/>
                        </>
                        :
                        <>
                            <Route path={"*"} element={<Navigate to={'login'}/>}/>
                        </>
                }
        </Routes>
    </>
  );
}

export default App;
