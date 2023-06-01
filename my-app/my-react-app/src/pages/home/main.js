import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { List } from './list';
import { useNavigate } from 'react-router-dom';
import { getMonthlyIncomeExpense, getTotalIncomeExpense, getWalletsIncomeExpense } from './../../services/chartService';
import { TotalData } from './totalData';
import MonthlyData from './monthlyData';
import { WalletsData } from './walletsData';

export default function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const walletsIncomeExpense = useSelector(({chartData})=>{
        return chartData.walletsIncomeExpense
    })

    const monthlyIncomeExpense = useSelector(({chartData})=>{
      console.log(chartData.monthlyIncomeExpense,333);
        return chartData.monthlyIncomeExpense
    })

    const totalIncomeExpense = useSelector(({chartData})=>{
      console.log(chartData.totalIncomeExpense,'11111')
        return chartData.totalIncomeExpense
    })

   
    useEffect(()=>{
        dispatch(getWalletsIncomeExpense());
        dispatch(getTotalIncomeExpense());
        dispatch(getMonthlyIncomeExpense());
    }, []);
      return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={()=>{
            navigate("/home/addWallet")
          }}>
            <i className="fas fa-download fa-sm text-white-50" /> Create a new Wallet
          </a>
        </div>
        <div className="row">
          {monthlyIncomeExpense && <MonthlyData monthlyIncomeExpense={monthlyIncomeExpense} ></MonthlyData>}
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-7">
            {totalIncomeExpense && <TotalData totalIncomeExpense={totalIncomeExpense}></TotalData>}
          </div>
          <div className="col-xl-4 col-lg-7">
           {walletsIncomeExpense && <WalletsData walletsIncomeExpense={walletsIncomeExpense}></WalletsData>}
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Fortune Cat : let meow save your money :3 </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <img style={{ width: "100%" }} src="https://media.giphy.com/media/o1yU8HQD3pH5m/giphy.gif" alt="" />

                </div>
                <div className="mt-4 text-center small">
                  <span className="mr-2">
                    <i className="fas fa-circle text-primary" /> Direct
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle text-success" /> Social
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle text-info" /> Referral
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center><h3>All Wallet</h3></center>
        <div className="row">
        <List></List>
        </div>
      </div>
    </>
  )
}
