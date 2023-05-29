import React from 'react';
import ModalPopup from 'react-modal'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";

ModalPopup.setAppElement('#root');

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Wallet name is too short")
        .required("Required"),
    total: Yup.number()
        .min(10000, "You must deposit at least 10000 VND into the wallet")
        .required("Required")
});

export const UpdateModal = ({isOpen, onClose, currentWallet}) =>{
    const dispatch = useDispatch();
    return (
        <div>
            <ModalPopup isOpen={isOpen} className='custom-modal'>
                <Formik
                    initialValues={{
                        name: currentWallet.name,
                        total: currentWallet.total || ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>{
                        dispatch(updateOneWallet(values)).then(()=>{

                            onClose()
                        })
                    }}
                >
                    {({values, setFieldValue})=>(
                        <Form>
                            <Field
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={(e)=>setFieldValue('name', e.target.value)}
                            />
                            <p style={{color:'red'}}><ErrorMessage name='name'/></p>
                            <Field
                                type="number"
                                name="total"
                                value={values.total}
                                onChange={(e)=>setFieldValue('total', e.target.value)}
                            />
                            <p style={{color:'red'}}><ErrorMessage name='total'/></p>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </ModalPopup>
        </div>
    )
}
