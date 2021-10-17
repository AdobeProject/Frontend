import React, { useState } from "react";

import "./UserPage.scss"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { Input } from "@mui/material";

import EditDetails from './EditDetails'

function UserPage() {
    // const [surname, setSurname] = useState('user.surname')
    const [EditButton, SetEditButton] = useState(false);
    const [Name, SetName] = useState('user.name');
    const [Surname, SetSurname] = useState('user.surname')
    const [UserPhoto, SetUserPhoto] = useState("https://www.iephb.ru/wp-content/themes/iephb/images/default_user.png")
    return (
        <div className="bigDiv">
            <EditDetails trigger={EditButton} setTrigger={SetEditButton} />
            <div className="myProfile">
                <img onClick={() => SetEditButton(true)} title="Edit" className="editBtn" src={edit} />
                <img className="userPhoto" src={UserPhoto} />
                <input className="edit" multiple type="file" />
                <div className="userPageInfo">
                    <p>{Name}</p>
                    <p>{Surname}</p>
                    <p>Email: email@example.com</p>
                    <p>Watched Lessons {"\n"} 0</p>
                </div>
            </div>
            <div className="coursesContainer">
                <div className="titleCourses">My Courses</div>
                <div className="container">
                    <div className="courses">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='edit-user-info' >
                        <div>{coverImageContainer(coverImage)}</div>
                        <input onChange={coverImgUpload} accept="image/*" name={coverImage} id="coverImg" type="file" />
                        <label htmlFor="coverImg">
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>{" "}
                        </label>
                        <div className='user-inputs'>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                margin='dense'
                            />
                            <Input
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                placeholder='Surname'
                            />
                        </div>

                        <Button variant="contained" color="primary" component="span">
                            Save
                        </Button>{" "}
                    </div>

                </Box>
            </Modal> */}

        </div>
    );
}

export default UserPage;