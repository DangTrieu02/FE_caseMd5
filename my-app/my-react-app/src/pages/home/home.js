import {Sidebar} from '../../components/sidebar';
import {Header} from '../../components/Header';
import {Outlet} from 'react-router-dom';


export function Home() {


    return (
        <>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}