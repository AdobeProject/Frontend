import React from 'react';
import './EditDetails.scss';
import { useState } from 'react';
import DeleteAccPopup from './DeleteAccPopup';

function EditDetails(props) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [delAcc, setDelAcc] = useState(false);

    const handleSaveBtn = () => {

        //add logic
        console.log(name + " " + surname);
    }
    return (props.trigger) ? (
        <div className="editDetails">
            <div className="innerDetails">
                <DeleteAccPopup trigger={delAcc} setTrigger={setDelAcc} />
                <button className="closeBtn" onClick={() => props.setTrigger(false)}>&times;</button>
                {props.children}
                <input type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="SURNAME" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <button className="saveBtn" type="submit" onClick={handleSaveBtn}>Save</button>
            </div>
        </div>
    ) : "";
}

export default EditDetails