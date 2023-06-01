import {ErrorMessage, Field, Form, Formik, FormikProvider, useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as Yup from 'yup';
import './addCss.css'
import { addWallet } from "../../services/walletService";

const SchemaError = Yup.object().shape({
    name: Yup.string()
        .min(2, "Wallet name is too short")
        .required("Required"),
    total: Yup.number()
        .min(100000, "You must deposit at least 100000 VND into the wallet")
        .required("Required")
});


export function Create() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            total: '',
        },
        validationSchema: SchemaError,
        onSubmit: (values) => {
            dispatch(addWallet(values))
            .then(() => {
              navigate('/home/main');
            })
        }  
        })
    return (
        <FormikProvider value={formik}>
            <Form>
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                            <h3>Welcome</h3>
                            <p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               an understanding of your financial situation in order to make the most of your
                                assets in day-to-day life and in planning for your future.</p>
                        </div>
                        <div className="col-md-9 register-right">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <h3 className="register-heading">Add a new wallet</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field type="text" className="form-control" placeholder="Name *" name='name'/>
                                                <p style={{ color: 'red' }}><ErrorMessage name="name" /></p>
                                            </div>
                                            <div className="form-group">
                                                <Field type="number" className="form-control" placeholder="Total money *" name='total' min={0} />
                                                <p style={{ color: 'red' }}><ErrorMessage name="total" /></p>
                                            </div>
                                            <button type="submit" className="btnRegister">ADD</button>
                                        </div>
                                        <div className="col-md-6">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSfKP4TsKwmxnLpBoJeCn1pD8rQtZOfVzWg&usqp=CAU"
                                                alt="description-of-your-image"
                                                className="img-style"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </FormikProvider>
    );
}
