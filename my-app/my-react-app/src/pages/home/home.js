import { Header } from "../../components/header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";


export default function Home() {



    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Header></Header>
                        <Outlet></Outlet>

                    </div>
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Khum Copyright © Your Website 2020</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}