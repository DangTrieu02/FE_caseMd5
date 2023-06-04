
import { Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/home';
import Main from './pages/home/main';
import Login from './pages/user/login'
import Register from './pages/user/register'
import { Create } from './pages/home/add';
import Update from './pages/wallet/update';
import Transaction from './pages/transaction/transaction';
import {LoginSuccess} from "./containers/loginSuccess";
import {LoginError} from "./containers/loginError";


function App() {
  let user = useSelector(({user}) => {
    return user.currentUser;
})



  return (
    <>
    <Routes>
    <Route path={'login'} element={<Login/>}/>
    <Route path={'register'} element={<Register/>}/>
    <Route path={'auth/login/success'} element={<LoginSuccess/>}/>
    <Route path={'auth/login/error'} element={<LoginError/>}/>
                {
                    user ?
                        <>
                            <Route path={'home'} element={<Home/>}>
                              <Route path={'main'} element={<Main/>}/>
                              <Route path={'addWallet'} element={<Create/>}/>
                              <Route path={'updateWallet/:id'} element={<Update/>}/>
                              <Route path={'transaction/:id'} element={<Transaction/>}/>
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
