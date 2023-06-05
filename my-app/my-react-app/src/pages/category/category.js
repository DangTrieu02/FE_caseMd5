import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, removeCategory } from '../../services/categoryService'
import AddCategory from './addCategory'
import { Link } from 'react-router-dom'

export default function Category() {
    const dispatch = useDispatch()
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const handleDelete = (id) => {
        setDeleteConfirmation(true);
        setDeleteItemId(id);
    };
    const handleCancelDelete = () => {
        setDeleteConfirmation(false);
        setDeleteItemId(null);
    };
    const handleConfirmDelete = () => {
        dispatch(removeCategory(deleteItemId));

        setDeleteConfirmation(false);
        setDeleteItemId(null);
    };
    const categories = useSelector(({ category }) => {
        return category.list
    })
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])





    return (
        <>
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800"></h1>
                <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <AddCategory></AddCategory>
                </div>
                <p class="mb-4"> All Category </p>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Categories</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Icon</th>
                                        <th>Type</th>
                                        <th style={{ textAlign: "center" }} colSpan={2}>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories && categories.map((item) => (
                                        <tr key={item.id}>
                                            <td >{item.name}</td>
                                            <td><img style={{ width: 75, height: 75 }} src={item.icon} alt="icon"/></td>
                                            <td>{item.transactionType}</td>
                                            <td style={{ textAlign: "center" }}><Link to={`/home/category/${item.id}`}> Edit</Link> </td>

                                            {deleteConfirmation ? (
                                                <div>
                                                    <p>Are you sure you want to delete?</p>
                                                    <p>delete category also delete all transaction use this category ?</p>
                                                    <button onClick={handleConfirmDelete}>Delete</button>
                                                    <button onClick={handleCancelDelete}>Cancel</button>
                                                </div>
                                            ) : (
                                                <td onClick={() => handleDelete(item.id)}>Delete</td>
                                            )}
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
