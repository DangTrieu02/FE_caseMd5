import React from 'react'
import { Link } from 'react-router-dom'

export function Sidebar() {
    return (
        <>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Save Ur Money<sup></sup></div>
                </a>

                <hr class="sidebar-divider my-0" />

                <li class="nav-item active">
                    <Link to={"main"}>
                    <a class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                        </Link>
                </li>

                <hr class="sidebar-divider" />

                <div class="sidebar-heading">
                    Interface
                </div>

                <li class="nav-item">
                <Link to={"wallet"}>
                    <a class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Wallet</span></a>
                        </Link>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Components:</h6>
                            <a class="collapse-item" href="buttons.html">Buttons</a>
                            <a class="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <Link to={"category"}>
                        <a className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Category</span></a>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                         data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <Link to={"transaction"}>
                        <a className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Transaction</span></a>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                         data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>

                <hr class="sidebar-divider" />

                <div class="sidebar-heading">

                </div>


                <li class="nav-item">
                    <Link to={"logout"}>
                    <a class="nav-link">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>Log Out</span></a>
                    </Link>
                </li>

                <hr class="sidebar-divider d-none d-md-block" />
            </ul>
        </>
    )
}
