import SocialMedia from "./SocialMedia";

export default function InfoPane() {
    return (
        <div className="info-pane">
            <h1>ASER MALIK</h1>
            <div className="info-divider"></div>
            <h3>SOFTWARE ENGINEER 🛠</h3>
            <div className="info-brief">
                I'm a full-stack software developer with experience building responsive web applications from front to back. 
                <ul className="info-menu">
                    <li><a href="#EXPERIENCE">EXPERIENCE</a></li>
                    <li><a href="#PROJECTS">PROJECTS</a></li>
                </ul>
            </div>
            {/*list of languages should go here*/}
            <SocialMedia />
        </div>
    );
  }