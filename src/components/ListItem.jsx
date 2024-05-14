import PropTypes from "prop-types";
import SkillList from "./SkillList";

ListItem.propTypes = {
    position: PropTypes.string,
    positionDetails: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.array,
    skills: PropTypes.array,
    url: PropTypes.string
  };

export default function ListItem(props) {
    if (!props.description) return null;
    if (props.url) {
        return (
            <a href={props.url} target="_blank">
                <div className="list-item">
                    <div className="name"><b>{props.position}</b>  {props.positionDetails}</div>
                    <div className="date">{props.date}</div>
                    <ul className="description">
                        {props?.description.map((des, index) => <li key={index}>{des}</li>)}
                    </ul>
                    <SkillList skills={props.skills} />
                    {/*language list here*/}  
                </div>
            </a>
        )
    }
    return (
        <div className="list-item">
            <div className="name"><b>{props.position}</b>  {props.positionDetails}</div>
            <div className="date">{props.date}</div>
            <ul className="description">
                {props?.description.map((des, index) => <li key={index}>{des}</li>)}
            </ul>
            <SkillList skills={props.skills} />
            {/*language list here*/}  
        </div>
    )
  }