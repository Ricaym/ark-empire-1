import React from "react";
import "../stylesheets/start.css";

export default function Start({logo}) {
    return (
        <div>
            <a href="/loading"><div></div></a>
            <img src={logo} alt='' id='logo'/>
            <p id='start'>appuyer pour commencer</p>
        </div>
    );
}