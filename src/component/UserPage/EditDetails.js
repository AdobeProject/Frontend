import React from 'react';
import './EditDetails.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUserInfo } from '../../store/authSlice';

function EditDetails(props) {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('')
    const dispatch = useDispatch()

    const handelSaveBtn = () => {
        dispatch(changeUserInfo({ firstName, secondName }))
        props.setTrigger(false)

    }
    return (props.trigger) ? (
        <div className="editDetails">
            <div className="innerDetails">
                <button className="closeBtn" onClick={() => props.setTrigger(false)}>&times;</button>
                {props.children}
                <input type="text" placeholder="NAME" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="SURNAME" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                <button className="saveBtn" type="submit" onClick={handelSaveBtn}>Save</button>
            </div>
        </div>
    ) : "";
}

export default EditDetails