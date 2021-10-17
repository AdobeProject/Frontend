import React from 'react';
import './EditDetails.css';
import UserPage from './UserPage';
import {useState} from 'react';
import DeleteAccPopup from './DeleteAccPopup';

function EditDetails(props) {
    const [DelAcc, SetDelAcc] = useState(false);
    return (props.trigger) ?(
        <div className="editDetails">
            <div className="innerDetails">
                <DeleteAccPopup trigger={DelAcc} setTrigger={SetDelAcc} />
                <button className="closeBtn" onClick={()=>props.setTrigger(false)}>X</button>
                {props.children}
                <input type ="text" placeholder="NAME" />
                <input type="text" placeholder="SURNAME" />
                <input type="password" placeholder="CHANGE PASSWORD" />
                <input type="password" placeholder="CONFIRM NEW PASSWORD" />
                <label for="pic" className="picText">Change Profile Picture:</label>
                <input multiple type="file" name="pic"/>
                <p onClick={()=>SetDelAcc(true)} className="deleteBtn" type="reset" >Delete Account</p>
                <button className="saveBtn" type="submit">Save</button>

            </div>

        </div>
    ) : "";
}

export default EditDetails