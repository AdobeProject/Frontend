import SuggestedCourssesSection from "./SuggestedCoursesSection"

import "./style.scss"

function CoursePage(){
    return (
        <div className='course-page-main'>
            <div className='course-page-content'>
                <div className="course-description">
                    <div className="course-img">
                    <img src='https://bestprogrammer.ru/wp-content/uploads/2021/01/Luchshie-proekty-JavaScript-dlya-nachinayushhih.jpg'></img>
                    <p>Author</p>
                    <p>02.11.2020</p>
                    </div>
                    
                    <div className="course-text">Lorem Ipsum is simply dummy text of the printing and typIpsum is simply dummy text of the printing and typIpsum is simply dummy text of the printing and typIpsum is simply dummy text of the printing and typIpsum is simply dummy text of the printing and typIpsum is simply dummy text of the printing and typIpsum is simply dummy text of the printing and typIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin</div>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ElaIKk8ba5g?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     </div>
            </div>
      
        <SuggestedCourssesSection/>
        </div>
    )
}

export default CoursePage