import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState } from "react";
import { getOneWallet, updateWallet } from "../../services/walletService";
import axios from "axios";


export default function Update() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const wallet = useSelector(({wallets})=>{
        return wallets.currentWallet
    })
    useEffect(() => {
      dispatch(getOneWallet(id))
    }, [])

    const submit = (values) => {
        console.log(values)
        dispatch(updateWallet({id,values}))
        navigate('/home/main')
    }
    return (
        <>

            <center><h3>UPDATE WALLET</h3></center>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4"></h1>
                                            </div>
                                            <Formik
                                               initialValues={wallet}
                                                onSubmit={values => {
                                                    submit(values);
                                                }}
                                                enableReinitialize={true} 
                                            >
                                                <Form>
                                                    <div className="user">
                                                        <div className="form-group">
                                                            <Field
                                                                type="text"
                                                                placeholder="name"
                                                                name="name"
                                                                className="form-control form-control-user"
                                                                ariaDescribedby="emailHelp"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <Field
                                                                type="number"
                                                                placeholder="total"
                                                                name="total"
                                                                className="form-control form-control-user"
                                                            />
                                                        </div>
                                                        <button
                                                            className="btn btn-primary btn-user btn-block"
                                                            type="submit"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                    <hr />
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}