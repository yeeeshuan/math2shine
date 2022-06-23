import React from "react";
import './form.css'

function form(props){
    return(
        <form class = "box" action = "login.html" method = "POST">
            <h1> Login </h1>
            <input type = "Login" name = "" placeholder="Enter Username" id = "username"/>
            <input type = "login" name = "" placeholder="Enter Password" id = "password"/>
            <input type = "submit" name = "" value = "Login"/> 
            <p> Not a subscriber yet? </p>
            <input type = "submit" name = "" value = "Sign up now!"/> 
        </form>
    )
}

export default form; 