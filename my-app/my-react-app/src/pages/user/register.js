import {Link} from "react-router-dom";

export default function Register() {
    return (
        <>
            <center>
                <h3>Trang Đăng Ký</h3>
                <input type="text" placeholder={'Username'} name={'username'}/>
                <input type="text" placeholder={'Password'} name={'password'}/>
                <Link to={'/login'}>Đăng nhập ngay?</Link>
                <button>Đăng ký</button>
            </center>

        </>
    )
}