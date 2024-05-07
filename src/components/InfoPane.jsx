import SocialMedia from "./SocialMedia";

export default function InfoPane() {
    return (
        <div className="info-pane">
            <h1>ASER MALIK</h1>
            <div className="info-divider"></div>
            <h3>SOFTWARE ENGINEER 🛠</h3>
            <div className="info-brief">
                I'm a primarily front-end software developer with experience working back-end and wearing different hats.
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