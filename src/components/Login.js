import React from "react";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
    var nav = useNavigate();
    const handleOnSubmit = () =>{
        nav("/home")
    }
    return (
        <div className="loginContainer">
            <form onSubmit={handleOnSubmit}>
                <div className="wrapper">
                    <div className="heading">
                        <h2>Welcome!</h2>
                        <p>Sign In to your account</p>
                    </div>
                    <div className="input-group">
                        <input type="text" id="username" className="input-field" placeholder="Username" />
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" className="input-field" placeholder="Password" />
                    </div>
                    <div className="input-group row">
                        <div className="row">
                            <a href="#" target="_blank" id="forgetPassword">Forgot password?</a>
                        </div>
                    </div>
                    <div className="input-group">
                        <button className="btn-purple">Login <i className="fa-solid fa-arrow-right" /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}