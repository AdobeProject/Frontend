import React from 'react';
import './EditDetails.scss';
import { useState } from 'react';
import DeleteAccPopup from './DeleteAccPopup';

function EditDetails(props) {
    const [name, setName] = useState('user.name');
    const [surname, setSurname] = useState('user.surname')
    const [delAcc, setDelAcc] = useState(false);

    const handleSaveBtn = () => {
        //add logic
        console.log(name + " " + surname);
    }
    return (props.trigger) ? (
        <div className="editDetails">
            <div className="innerDetails">
                <DeleteAccPopup trigger={delAcc} setTrigger={setDelAcc} />
                <button className="closeBtn" onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
                <input type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="SURNAME" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <input type="password" placeholder="CHANGE PASSWORD" />
                <input type="password" placeholder="CONFIRM NEW PASSWORD" />
                <label for="pic" className="picText">Change Profile Picture:</label>
                <input multiple type="file" name="pic" />
                <p onClick={() => setDelAcc(true)} className="deleteBtn" type="reset" >Delete Account</p>
                <button className="saveBtn" type="submit" onClick={handleSaveBtn}>Save</button>

            </div>

        </div>
    ) : "";
}

export default EditDetails