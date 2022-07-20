import { Module } from "../../Components/ModuleSkill/moduleskill"
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGithub, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { Title } from "../../Components/Title/Title";

export const Skills = () => {
    return(
        <div className="preback row">
        <Title title={"Skills"}/>
            <div className="col">
                <Module icon={ <FaHtml5/> } title={"HTML"} percent={90}/>
                <Module icon={ <FaCss3Alt/> } title={"CSS"} percent={85}/>
                <Module icon={ <FaSass/> } title={"SASS"} percent={85}/>
                <Module icon={ <FaBootstrap/> } title={"Bootstrap"} percent={80}/>
            </div>
            <div className="col">
                <Module icon={ <FaGithub/> } title={"GitHub"} percent={75}/>
                <Module icon={ <FaJs/> } title={"JavaScript"} percent={50}/>
                <Module icon={ <FaReact/> } title={"React JS"} percent={75}/>
                <Module icon={ <FaPython/> } title={"Python"} percent={55}/>
            </div>
        </div>
    )
}
