import { Link, useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../services/userService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Login() {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (user) => {
        dispatch(login(user)).then((data) => {
            if (data.payload === 'Username is not exits' || data.payload === "Password is wrong" || data.payload === "Username is wrong") {
                localStorage.clear();
                navigate('/login');
                MySwal.fire({
                    // title: <p>Loading...</p>,
                    didOpen: () => {
                        MySwal.showLoading()
                    },
                }).then(() => {
                    return MySwal.fire(<p>Sai tên đăng nhập hoặc mật khẩu</p>)
                })
            } else {
                navigate('/');
            }
        });
    }
    return (
        <>
<center><h3>Login</h3></center>

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
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <Formik
                                             initialValues={{
                                                username: '',
                                                password: ''
                                            }}
                                            onSubmit={values => {
                                                submit(values);
                                            }}>
                                                    <Form>
                                                <div className="user">
                                                    <div className="form-group">
                                                        <Field type="text" placeholder={'Username'} name={'username'} className="form-control form-control-user"
                                                            id="exampleInputEmail" ariaDescribedby="emailHelp" />
                                                    </div>
                                                    <div className="form-group">
                                                        <Field type="password" placeholder={'Password'} name={'password'} className="form-control form-control-user"
                                                            id="exampleInputPassword" />
                                                    </div>
                                                    <button className="btn btn-primary btn-user btn-block" type={'submit'}>Login</button>
                                                    <hr />
                                                    <a href="index.html" className="btn btn-google btn-user btn-block">
                                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                                    </a>
                                                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                    </a>
                                                </div>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                                </div>
                                                <div className="text-center">
                                                    <a className="small" > <Link to={'/register'}>Create an Account!</Link></a>
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

            </div>
        </>
    )
}