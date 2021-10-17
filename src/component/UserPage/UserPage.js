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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};



function UserPage() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [coverImage, setCoverImage] = useState("");
    const [name, setName] = useState("name");
    const [surname, setSurname] = useState("surname");



    const coverImgUpload = (e) => {
        const imgFormat = e.target.files[0].type.split("/").pop();
        setCoverImage(imgFormat);

    };

    const coverImageContainer = (img) => {
        if (coverImage.length > 1) {
            return (
                <span>
                    <IconButton onClick={() => setCoverImage("")} aria-label="delete" >
                        <DeleteIcon />
                    </IconButton>
                    <img width="300" src={coverImage} alt="" />
                </span>
            );
        }
    };

    return (
        <div className="bigDiv">
            <div className="myProfile">
                <img className="editBtn" onClick={handleOpen} src={edit} />
                <img className="userPhoto" src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png" />
                <button>Upload</button>
                <div className="info">
                    <p>user.name user.surname</p>
                    <p>Email: email@example.com</p>
                    <p>What I am learning</p>
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
                    </div>
                </div>
            </div>
            <Modal
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
            </Modal>

        </div>
    );
}

export default UserPage;