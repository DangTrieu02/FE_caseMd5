import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOneTransaction, getAllTransaction, getOneTransaction } from '../../services/transactionService';
import { useParams } from 'react-router-dom';
import Example from './addTransaction';
import EditTransaction from './editTransaction';
import { getOneWallet } from '../../services/walletService';

export default function Transaction() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const removeTrans= (id) =>{
        console.log('id',id);
        if(id!==undefined){
                    dispatch(deleteOneTransaction(id))
        }
    }
    const wallet= useSelector(({wallets}) =>{
        return wallets.currentWallet
    })
    const transaction = useSelector(({ transactions }) => {
        return transactions.list
    })
    useEffect(() => {
        dispatch(getAllTransaction(id))
        dispatch(getOneWallet(id))
    }, [])
    return (
        <>
        {console.log(transaction)}
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Transaction of {wallet && wallet.name} total: { wallet && wallet.total}</h1>
                <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <Example></Example>
                </div>
                <p class="mb-4"> All Wallet  { wallet && wallet.name}  Transactions  </p>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Transactions</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Note</th>
                                        <th style={{textAlign:"center"}} colSpan={2}>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transaction && transaction.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.category && item.category.transactionType}</td>
                                            <td>{item.amount} đ</td>
                                            <td>{item.category && item.category.name}</td>
                                            <td>{item.date}</td>
                                            <td>{item.note}</td>
                                            <EditTransaction transaction={item}></EditTransaction>
                                            <td onClick={()=>removeTrans(item.id)} style={{textAlign:"center"}}>delete</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
