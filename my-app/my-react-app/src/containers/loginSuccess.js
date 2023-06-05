import {useEffect} from "react";
import {googleLogin} from "../services/userService";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export function LoginSuccess() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(googleLogin()).then(()=>{
            navigate('home')
        })
    }, []);

    return <div>Thanks for logging in!</div>;
}