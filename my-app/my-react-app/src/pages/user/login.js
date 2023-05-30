import {Link, useNavigate} from "react-router-dom";
import {Form, Formik, Field} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../../services/userService";


export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = (user) => {
        dispatch(login(user)).then((data) => {
            console.log(data)
            if(data.payload === "User is not exist"){
                localStorage.clear();
                navigate('/login');
            } else {
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
                        <Field type="text" placeholder={'Password'} name={'password'}/>
                        <Link to={'/register'}>Đăng ký ngay?</Link>
                        <button type={'submit'}>Đăng nhập</button>
                    </Form>
                </Formik>
            </center>

        </>
    )
}