import { Name } from "../../Components/Name/Name"
import { Text } from "../../Components/Text/Text"
import image from "../../Assets/Images/Imagen.jpg"

export const Home = () => {
    return(
        <div className="preback home">
            <div className="my-5 home-sect1">
                <Name name={"Hi! I'm Melissa Aime..."}/>
                <Text text={"and I'm a Full Stack Developer."}/>
            </div>
            <div className="home-sect2">
                <img src={image} alt='imagen' className='home-img'/>
            </div>
        </div>
    )
}