import React from "react";
import './login.css'; 
import Form from './Form/form'
import logo from './1.png'
import icon from './2.png'

function Login(props){
    return(
        <div className = "login">
            <div className = "main-page">
                <div className = "page-left">
                    <div className = "header">
                        <img className = "logo" src = {logo} alt = "logo"/>
                    </div>
                    <div className = "welcome">
                        <h2> Welcome back! </h2>
                        <p> Good to see you again. Please log back into your account. </p>
                        <img className = "icon" src = {icon} alt = "icon"/>
                    </div>
                </div>
                <div classname = "page-right">
                    <Form/>
                    </div>
                </div>
            </div>

    )
}

export default Login; 
