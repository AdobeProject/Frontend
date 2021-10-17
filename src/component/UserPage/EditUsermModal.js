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


function EditUserModal({ open, handleClose }) {
    return (
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
    )
}

return EditUserModal