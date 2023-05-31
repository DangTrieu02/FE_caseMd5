import {Link, useNavigate} from "react-router-dom";
import {Form, Formik, Field} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../../services/userService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export default function Register() {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = (user) => {
        dispatch(register(user)).then((data) => {
            if(data.payload === "Username already exits"){
                navigate('/register');
                MySwal.fire({
                    title: <p>Loading...</p>,
                    didOpen: () => {
                      MySwal.showLoading()
                    },
                  }).then(() => {
                    return MySwal.fire(<p>Tài khoản đã tồn tại</p>)
                  })              
            } else  {
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
           
           <center>
           <h3>Trang Đăng Ký</h3>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        image:'',
                        job: ''
                    }}
                    onSubmit={values => {
                        
                        submit(values);
                        console.log(values)
                    }}
                >
                    <Form>
                        <Field type="text" placeholder={'Username'} name={'username'}/>
                        <Field type="password" placeholder={'Password'} name={'password'}/>
                        <Field type="text" placeholder={'image'} name={'image'}/>

                        <Field type="job" placeholder={'job'} name={'job'}/>
                        <Link to={'/login'}>Đăng Nhập ngay?</Link>
                        <button type={'submit'}>Đăng Ký</button>
                    </Form>
                </Formik>
            </center>

        </>
    )
}