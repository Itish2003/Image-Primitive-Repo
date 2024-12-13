import '../css/nav_bar.css';
import '../css/landing_text.css'


function Nav_bar(){
    return(
        <>
        <nav className="nav-bar">
            <div className="image-pri agu ">Image Primitive
            </div>
            <div className="cont">
            <div className="blue-effect"><a href="https://github.com/Itish2003">Github</a></div>
            <div className="blue-effect"><a href="https://docs.google.com/document/d/1ha2IX5TwpqWdZVkaE-BOedVSaqxeFNVmjKHnqPvqPo8/edit?usp=sharing">Resume</a></div>
            <div className="nav-1 blue-effect"><a href="https://itish2003io-itish-srivastavas-projects.vercel.app/">About me</a></div>
        
            </div>
            </nav>
        </>
    )
}

export default Nav_bar;