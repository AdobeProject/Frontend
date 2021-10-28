import { Input, TextareaAutosize } from '@mui/material';
import { useState } from 'react';
import ShowUlpoadImg from '../ShowUploadImg/ShowUploadImg';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import ReactPlayer from "react-player";
import { addCourse, addImg } from '../../store/mainSlice';


function AddCourseForm() {

    const categories = useSelector((state) => state.categoriesReducer.categories);
    const user = useSelector(state => state.auth.user)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [courseImg, setCourseImg] = useState(null)
    const [category, setCategory] = useState()
    const [subCategories, setSubCategories] = useState([])
    const [subCategory, setSubCategory] = useState('')
    const [video, setVideo] = useState("");
    const dispatch = useDispatch()


    const handleOnchange = (e) => {
        setCategory(e.target.value)
        for (let index = 0; index < categories.length; index++) {
            const element = categories[index];
            if (element.name === e.target.value) {
                setSubCategories(element.subCategories)
                break
            }
        }
    }

    const handelOnAdd = () => {

        const body = {
            name: title,
            description,
            sub_category_id: subCategory,
            video,
            img: `http://localhost:8080/files/${courseImg.name}`,
            email: user.email
        }
        setTitle('')
        setDescription('')
        setSubCategory('')
        setVideo('')
        setCourseImg('')
        const formData = new FormData()
        formData.append('file', courseImg)

        dispatch(addImg(formData))
        dispatch(addCourse(body))

    }

    return (
        <div className='add-course'>
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                fullWidth={true}
                max="40"
                className='course-title'

            />

            <TextareaAutosize
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                aria-label="minimum height"
                minRows={5}
                placeholder="Description"
                className='course-description'
                fullWidth={true}
            />

            <div className='selectors'>
                <select
                    value={category}
                    onChange={handleOnchange}
                >
                    <option>--Choose Category--</option>
                    {categories.map((category) => (
                        <option value={category.name} key={category.name}>{category.name}</option>))
                    }
                </select>
                {subCategories && category && <select
                    value={subCategory}
                    onChange={(e) => {
                        setSubCategory(e.target.value)
                    }}

                >
                    <option>--Choose Subcategory--</option>

                    {
                        subCategories.map((item) => (
                            <option value={item.id} asd={item.id} key={item.id}>{item.name}</option>
                        )
                        )
                    }
                </select>
                }


            </div>
            <div className='img-upload'>
                {courseImg && <ShowUlpoadImg image={courseImg} />}
                <Input
                    type='file'
                    onChange={(e) => setCourseImg(e.target.files[0])}
                />
            </div>
            <div>
                <TextField
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                    id="outlined-full-width-1"
                    placeholder="add video URL"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                {video.length > 0 && <ReactPlayer url={video} controls={true} />}
            </div>
            <button className="submit-btn" onClick={handelOnAdd}>Add</button>
        </div>
    )
}

export default AddCourseForm