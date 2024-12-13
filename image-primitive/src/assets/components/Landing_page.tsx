// import Click_upload from "./Click_upload";
import Landing_text from "./Landing_text";
import '../css/landing_page.css'
import landingImage from '../pictures/landing_example.png';


function Landing_page(){
    return(
        <>
            <div className="landing-page">
                <Landing_text/>
                <img className="landing-image" src={landingImage} alt="Landing Image"/>
            </div>
        </>
    )
}

export default Landing_page;