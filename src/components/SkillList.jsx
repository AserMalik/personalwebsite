import PropTypes from "prop-types";

SkillList.propTypes = {
    skills: PropTypes.array
  };

export default function SkillList(props) {
    if (!props.skills) return null;
    return (
        <ul className="skill-list">
            {props?.skills.map((des, index) => <div className="skill" key={index}>{des}</div>)}
        </ul>
    );
  }