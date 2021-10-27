import { Input, TextareaAutosize } from '@mui/material';
import { useEffect, useState } from 'react';
import ShowUlpoadImg from '../ShowUploadImg/ShowUploadImg';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import ReactPlayer from "react-player";
import { addCourse } from '../../store/mainSlice';

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
            console.log(e.target.value);
            const element = categories[index];
            if (element.name === e.target.value) {
                console.log('asd', e.target);
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
            img: courseImg,
            email: user.email
        }
        console.log('body', body);
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
                    {categories.map((category) => (
                        <option value={category.name} >{category.name}</option>))
                    }
                </select>
                {subCategories && category && <select
                    value={subCategory}
                    onChange={(e) => {
                        setSubCategory(e.target.value)
                    }}

                >{

                        subCategories.map((item) => (
                            <option value={item.id} asd={item.id}>{item.name}</option>
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