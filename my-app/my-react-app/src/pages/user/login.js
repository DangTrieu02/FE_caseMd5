import {Link, useNavigate} from "react-router-dom";
import {Form, Formik, Field} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../../services/userService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Login() {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = (user) => {
        dispatch(login(user)).then((data) => {
            if(data.payload === 'Username is not exits'|| data.payload ==="Password is wrong" || data.payload === "Username is wrong"){
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
            } else  {
                navigate('/');
            }
        });
    }
    return (
        <>
            <center>
                <h3>Trang Đăng Nhập</h3>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={values => {
                        submit(values);
                    }}
                >
                    <Form>
                        <Field type="text" placeholder={'Username'} name={'username'}/>
                        <Field type="password" placeholder={'Password'} name={'password'}/>
                        <Link to={'/register'}>Đăng ký ngay?</Link>
                        <button type={'submit'}>Đăng nhập</button>
                    </Form>
                </Formik>
            </center>

        </>
    )
}