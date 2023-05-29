import {getWalletIncomeExpense} from "../../../services/walletService";
import {useParams} from "react-router-dom";
import {WalletData} from "./chart";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


export function walletGeneral() {
    const dispatch = useDispatch();
    let {id} = useParams()
    const walletIncomeExpense = useSelector(({wallet})=>{
        return wallet.chart
    })

    useEffect(()=>{
        dispatch(getWalletIncomeExpense(id));
    }, [dispatch, id])

    return (
       <>
           <WalletData walletIncomeExpense={walletIncomeExpense}/>

       </>
    )


}