import { ProgressBar } from "react-bootstrap";

export const Module = ({icon, title, percent}) => {
    return(
        <div className="skill">       
            <p>{icon} {title}</p>
            <ProgressBar now={percent} className='skill-progress'/>
        </div>
    )
}