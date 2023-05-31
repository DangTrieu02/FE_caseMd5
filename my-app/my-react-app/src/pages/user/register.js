import { Link, useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../services/userService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export default function Register() {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = (user) => {
        dispatch(register(user)).then((data) => {
            if (data.payload === "Username already exits") {
                navigate('/register');
                MySwal.fire({
                    // title: <p>Loading...</p>,
                    didOpen: () => {
                        MySwal.showLoading()
                    },
                }).then(() => {
                    return MySwal.fire(<p>Tài khoản đã tồn tại</p>)
                })
            } else {
                navigate('/login');
                Swal.fire({
                    // title: <p>Loading...</p>,
                    didOpen: () => {
                        MySwal.showLoading()
                    },
                }).then(() => {
                    return MySwal.fire(<p>Tạo Tài Khoản Thành Công</p>)
                })
            }
        });

    }
    return (
        <>
        <center><h1>REGISTER</h1></center>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            username: '',
                                            password: '',
                                            image: 'https://th.bing.com/th?q=Beluga+Pop+Cat&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247',
                                            job: ''
                                        }}
                                        onSubmit={values => {
                                            submit(values);
                                        }}
                                    >
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
                                                <div className="form-group">
                                                    <Field type="text" placeholder={'Job'} name={'job'} className="form-control form-control-user"
                                                        id="exampleInputEmail" />
                                                </div>
                                                <button className="btn btn-primary btn-user btn-block" type={'submit'}>Register</button>
                                                <hr />
                                                <button className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </button>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </div>
                                            <hr/>
                                        </Form>
                                    </Formik>
                                    <hr />
                
                                    <div className="text-center">
                                    
                                        <a className="small" ><Link to={'/login'}>Already have an account? Login!</Link></a>
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