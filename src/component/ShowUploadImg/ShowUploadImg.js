import "./style.scss"


function ShowUlpoadImg({ image }) {
    return (
        <img className='uploaded-img' alt='course-img' src={URL.createObjectURL(image)} />
    )
}

export default ShowUlpoadImg