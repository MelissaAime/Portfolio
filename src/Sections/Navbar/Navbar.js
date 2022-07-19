import { Iconos } from "../../Components/Iconos/Iconos"
import { BsHouseDoor, BsPerson, BsFillMenuButtonWideFill, BsReverseLayoutTextSidebarReverse, BsBarChart, BsChatText } from 'react-icons/bs';

export const Navbar = () => {
   
    return(
        <div className="navbar">
            <Iconos icon={ <BsHouseDoor/> } title={"Home"} ruta={"#home"}/>
            <Iconos icon={ <BsPerson/> } title={"Profile"} ruta={"#profile"}/>
            <Iconos icon={ <BsFillMenuButtonWideFill/> } title={"Resume"} ruta={"#resume"}/>
            <Iconos icon={ <BsReverseLayoutTextSidebarReverse/> } title={"Proyects"} ruta={"#proyects"}/>
            <Iconos icon={ <BsBarChart/> } title={"Skills"} ruta={"#skills"}/>
            <Iconos icon={ <BsChatText/> } title={"Contact"} ruta={"#contact"}/>
        </div>
    )
}