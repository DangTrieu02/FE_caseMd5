import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneCategory, updateCategory } from '../../services/categoryService';
import { useNavigate, useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/firebase.js";
import { v4 } from "uuid";


export default function EditCategory() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate= useNavigate()
    
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState('');
   


    const submit = (values) => {
        values.icon = imageUrls
        console.log(values)
        dispatch(updateCategory({id:id, values:values}))
        setTimeout(()=> {navigate('/home/category')}, 500)
    }

    let category = useSelector(({ category }) => {
        return category.currentCategory
    })
    useEffect(() => {
        dispatch(getOneCategory(id))
    }, [])


    let initialValues
    if (category!== {}){
            initialValues = {
            name: category.name,
            icon: category.icon,
            transactionType: category.transactionType
        }
    }

    const uploadFile = (event) => {
        event.preventDefault();
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                setImageUrls(url);
            });
        });
    };

    return (
        <>
        {console.log(category)}
            <section class="vh-100" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card" style={{ borderRadius: "1rem" }}>
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">

                                        {imageUrls ? (
                                            <img
                                                src={imageUrls}
                                                alt="Preview"
                                                style={{ width: 350, height: 350 }}
                                            />) : <img src={category.icon} style={{ width: 350, height: 350 }}
                                                alt="login form" class="img-fluid" />}

                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">
                                            <Formik
                                                initialValues={{
                                                        name: initialValues.name,
                                                        icon: initialValues.icon,
                                                        transactionType: initialValues.transactionType
                                                    }}
                                                onSubmit={values => {
                                                    submit(values);
                                                }}
                                                enableReinitialize={true} 
                                                >
                                                <Form>
                                                    <div class="d-flex align-items-center mb-3 pb-1">
                                                        <i class="fas fa-cubes fa-2x me-3" ></i>
                                                        <span class="h1 fw-bold mb-0"></span>
                                                    </div>

                                                    <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Edit Category</h5>

                                                    <div class="form-outline mb-4">
                                                        <Field type="text" name="name" placeholder="name" id="form2Example17" class="form-control form-control-lg" />

                                                    </div>

                                                    <div className="mb3">
                                                        <label htmlFor="arquivo">Upload Image:</label>
                                                        <input
                                                            id="exampleInput"
                                                            type="file"
                                                            className="form-control"
                                                            name='icon'
                                                            onChange={(event) => {
                                                                setImageUpload(event.target.files[0]);
                                                            }}
                                                        />
                                                    </div>
                                                    <button style={{ margin: 10 }} onClick={(event) => uploadFile(event)}> Upload</button>
                                                    <Field as="select" name="transactionType" className="form-control form-control-user">
                                                        <option value="inCome">InCome</option>
                                                        <option value="expense">Expense</option>
                                                    </Field>

                                                    <div class="pt-1 mb-4">
                                                        <button class="btn btn-dark btn-lg btn-block" type="submit">SAVE</button>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
