import React from "react";
import EditDetails from "./EditDetails";
import { useState } from 'react';
import './DeleteAccPopup/DeleteAccPopup.scss'
import { Link } from "react-router-dom";

function DeleteAccPopup(prop) {
    return (prop.trigger) ? (
        <div className="enterPassword">
                <button className="delAccCloseBtn" onClick={() => prop.setTrigger(false)}>X</button>
                {prop.children}
                <input type="password" placeholder="WRITE YOUR PASSWORD" />
                <Link to="/" >
                    <button className="SubBtn" type="submit">Delete Account</button>
                </Link>
            </div>
    ) : ("");
}

export default DeleteAccPopup