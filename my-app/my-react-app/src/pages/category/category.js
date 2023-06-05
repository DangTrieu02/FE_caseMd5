import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, removeCategory } from '../../services/categoryService'
import AddCategory from './addCategory'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';


export default function Category() {
    const dispatch = useDispatch()
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                dispatch(removeCategory())
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            })
        } else {
            swal("Your imaginary file is safe!");
        }
        });
    };
   
    
    const categories = useSelector(({ category }) => {
        console.log(category);
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
                                            <td><img style={{ width: 75, height: 75 }} src={item.icon} alt="icon" /></td>
                                            <td>{item.transactionType}</td>
                                            <td style={{ textAlign: "center" }}><Link to={`/home/category/${item.id}`}> Edit</Link> </td>
                                                <td onClick={() => handleDelete(item.id)}>Delete</td>
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
