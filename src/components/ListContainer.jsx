import PropTypes from "prop-types";
import ListItem from "./ListItem";

ListContainer.propTypes = {
    title: PropTypes.string,
    positionDates: PropTypes.array,
    position: PropTypes.array,
    positionDetails: PropTypes.array,
    descriptions: PropTypes.array,
    skills: PropTypes.array,
    urls: PropTypes.array
  };


export default function ListContainer(props) {
    if (!props.positionDates || !props.position || !props.positionDetails || !props.descriptions) return null;
    return (
        <div className="list" id={props.title}>
            <h2>{props.title}</h2>
            <div className="info-divider"></div>
            <ListItem url={props.urls[0]} position={props.position[0]} positionDetails={props.positionDetails[0]} date={props.positionDates[0]} description={props.descriptions[0]} skills={props.skills[0]} />
            <ListItem url={props.urls[1]} position={props.position[1]} positionDetails={props.positionDetails[1]} date={props.positionDates[1]} description={props.descriptions[1]} skills={props.skills[1]} />
            <ListItem url={props.urls[2]} position={props.position[2]} positionDetails={props.positionDetails[2]} date={props.positionDates[2]} description={props.descriptions[2]} skills={props.skills[2]} />
            <ListItem url={props.urls[3]} position={props.position[3]} positionDetails={props.positionDetails[3]} date={props.positionDates[3]} description={props.descriptions[3]} skills={props.skills[3]} />
            <ListItem url={props.urls[4]} position={props.position[4]} positionDetails={props.positionDetails[4]} date={props.positionDates[4]} description={props.descriptions[4]} skills={props.skills[4]} />
            <ListItem url={props.urls[5]} position={props.position[5]} positionDetails={props.positionDetails[5]} date={props.positionDates[5]} description={props.descriptions[5]} skills={props.skills[5]} />
            <ListItem url={props.urls[6]} position={props.position[6]} positionDetails={props.positionDetails[6]} date={props.positionDates[6]} description={props.descriptions[6]} skills={props.skills[6]} />
        </div>
    );
  }