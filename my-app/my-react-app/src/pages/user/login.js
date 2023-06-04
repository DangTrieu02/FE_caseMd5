import { Link, useNavigate } from "react-router-dom";
import {Form, Formik, Field, setIn} from "formik";
import { useDispatch } from "react-redux";
import {googleLogin, login} from "../../services/userService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import {useState} from "react";


export default function Login() {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();
    const navigate = useNavigate();



    // const fetchAuthUser = async () => {
    //     const response = await axios
    //         .get("http://localhost:5000/api/v1/auth/user", { withCredentials: true })
    //         .catch((err) => {
    //             console.log("Not properly authenticated");
    //             dispatch(setIsAuthenticated(false));
    //             dispatch(setAuthUser(null));
    //             history.push("/login/error");
    //         });
    //
    //     if (response && response.data) {
    //         console.log("User: ", response.data);
    //         dispatch(setIsAuthenticated(true));
    //         dispatch(setAuthUser(response.data));
    //         history.push("/welcome");
    //     }
    // };


    // const redirectToGoogleSSO = async () => {
    //     let timer: NodeJS.Timeout | null = null;
    //     const googleLoginURL = "http://localhost:3001/auth/google";
    //     const newWindow = window.open(
    //         googleLoginURL,
    //         "_blank",
    //         "width=500,height=600"
    //     );
    //     if (newWindow) {
    //         timer = setInterval(() => {
    //             if (newWindow.closed) {
    //                 console.log("Yay we're authenticated");
    //                 // fetchAuthUser();
    //                 if (timer) clearInterval(timer);
    //             }
    //         }, 500);
    //     }
    // };







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


    const googleAuth = () => {
        window.open(
            `http://localhost:3001/auth/google`,
            "_self"
        );
    };

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
                                                    <button className="btn btn-google btn-user btn-block" onClick={() => googleAuth()}>
                                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                                    </button>
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