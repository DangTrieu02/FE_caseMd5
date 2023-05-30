import React, {useEffect} from "react";
import {TotalData} from './totalData'
import {MonthlyData} from "./monthlyData";
import {WalletsData} from "./walletsData";
import {getMonthlyIncomeExpense, getTotalIncomeExpense, getWalletsIncomeExpense} from "../../../services/chartService";
import {useDispatch, useSelector} from "react-redux";
import {getWallets} from "../../../services/walletService";
import {List} from "./list";
import './general.css'


export function General() {
    const dispatch = useDispatch();
    const walletsIncomeExpense = useSelector(({chartData})=>{
        return chartData.walletsIncomeExpense
    })

    const monthlyIncomeExpense = useSelector(({chartData})=>{
        return chartData.monthlyIncomeExpense
    })

    const totalIncomeExpense = useSelector(({chartData})=>{
        return chartData.totalIncomeExpense
    })

    const wallets = useSelector(({wallet})=>{
        return wallet.list
    })


    useEffect(()=>{
        dispatch(getWalletsIncomeExpense());
        dispatch(getTotalIncomeExpense());
        dispatch(getMonthlyIncomeExpense());
        dispatch(getWallets())
    }, [])



    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1>General Dashboard</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <MonthlyData monthlyIncomeExpense={monthlyIncomeExpense}/>
                    </div>
                    <div className="col-md-6">
                        <TotalData totalIncomeExpense={totalIncomeExpense}/>
                        <WalletsData walletsIncomeExpense={walletsIncomeExpense} />
                    </div>
                    <div className="col-md-6">
                        <List list={wallets}/>
                    </div>
                </div>
            </div>

        </div>
    )


}