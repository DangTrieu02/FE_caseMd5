
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../services/categoryService';
import { Field, Form, Formik } from 'formik';
import { addTransaction, updateOneTransaction } from '../../services/transactionService';
import { useParams } from 'react-router-dom';


function EditTransaction(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const {id} = useParams()
    const categories = useSelector(({ category }) => {
        return category.list
    })
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const onSubmit = (values) => {
        dispatch(updateOneTransaction({  id: props.transaction.id , values }))
    }
    let initialValues
    if (props !== undefined){
            initialValues = {
            amount: props.transaction.amount,
            date: props.transaction.date,
            note: props.transaction.note,
            category: props.transaction.category.id,
            wallet: id
        }
    }
    return (
        <>
            <td variant="primary" onClick={handleShow}>
                Edit
            </td>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit </Modal.Title>
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
                                        type="number"
                                        placeholder="Amount"
                                        name="amount"
                                        className="form-control form-control-user"
                                        ariaDescribedby="emailHelp"
                                    />
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="date"
                                        placeholder="total"
                                        name="date"
                                        className="form-control form-control-user"
                                    />
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        placeholder="Note"
                                        name="note"
                                        className="form-control form-control-user"
                                    />
                                </div>
                                <div>
                                    <Field as="select" name="category" className="form-control form-control-user">
                                        {categories && categories.map((category) => (
                                            <option value={category && category.id}>{category && category.name}</option>
                                        ))}
                                    </Field>
                                </div>
                                <hr />
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


export default EditTransaction;
