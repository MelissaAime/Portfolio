import { Title } from "../../Components/Title/Title"
import { BsWhatsapp, BsLinkedin, BsEnvelope, BsGithub } from 'react-icons/bs'

export const Contact = () => {
    return(
        <div className="preback">
            <Title title={"Contact me"}/>
            <div className="contact-links">
                <form>
                    <section>
                        <h5><BsEnvelope/> Email</h5>
                        <p>aimemelissa1@gmail.com</p>
                    </section>
                    
                    <section>
                        <h5><BsWhatsapp/> WhatsApp</h5>
                        <p>+549 11 41737221</p>
                    </section>

                    <section>  
                        <h5><BsLinkedin/> LinkedIn</h5>
                        <p><a href="https://www.linkedin.com/in/melissa-daiana-aime-ab7a73201/">visit me profile</a></p>
                    </section>

                    <section>
                        <h5><BsGithub/> Github</h5>
                        <p><a href="https://github.com/MelissaAime">visit me repository</a></p>
                    </section>
                </form>
            </div>
        </div>
    )
}