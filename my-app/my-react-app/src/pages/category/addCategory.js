
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../services/categoryService';
import { Field, Form, Formik } from 'formik';
import { addTransaction } from '../../services/transactionService';
import { useParams } from 'react-router-dom';
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../services/firebase.js";
import {v4} from "uuid";
function AddCategory() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const onSubmit = (values) => {
        values.icon = imageUrls
        dispatch(addCategory(values))
        setShow(false)
    }
    const initialValues = {
        name: '',
        icon: null,
        transactionType: "inCome"
    }

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState('');

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
            <Button variant="primary" onClick={handleShow}>
                Create a Category
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create new Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => {
                            onSubmit(values);
                        }}
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
                                <div>
                                    <Field as="select" name="transactionType" className="form-control form-control-user">
                                            <option value="inCome">InCome</option>
                                            <option value="expense">Expense</option>
                                    </Field>
                                </div>


                                <div className="mb3">
                                {imageUrls && (
                                    <img
                                        src={imageUrls}
                                        alt="Preview"
                                        style={{width: 150, height: 150}}
                                    />)}

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
                            <button style={{margin: 10}} onClick={(event) => uploadFile(event)}> Upload</button>
                                <button
                                    className="btn btn-primary btn-user btn-block"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


export default AddCategory;
