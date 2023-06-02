import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTransaction } from '../../services/transactionService';
import { useParams } from 'react-router-dom';

export default function Transaction() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const transaction = useSelector(({ transactions }) => {
        return transactions
    })
    useEffect(() => {
        dispatch(getAllTransaction(id))
    }, [])

    return (
        <>
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Transaction</h1>
                <p class="mb-4"> All Wallet Transactions  </p>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {transaction && transaction.list.map((item) => (
                                        <tr>
                                            <td>{item.category.transactionType}</td>
                                            <td>{item.amount} đ</td>
                                            <td>{item.category.name}</td>
                                            <td>{item.date}</td>
                                            <td>{item.note}</td>
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
