import './about.css'
import Portaint from '../../assets/portaint.jpg'
import CV from '../../assets/CVV.pdf'
import { FaFileDownload } from "react-icons/fa";
import Card from '../../components/Card';
import data from './data';
const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={Portaint} alt="" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Building projects my clients love have always been my passion.
                    </p>
                    <p>
                        Hi, my name is Dong Duong from Ho Chi Minh City, Viet Nam. I'm a full-stack web developer
                    </p>
                    <a href={CV} download className='btn primary'>Download<FaFileDownload /> </a>
                </div>
            </div>
        </section>
    )
}

export default About

