import resume from "@/assets/img/about/CV_NguyenDucThang.pdf"
import { TypeAnimation } from 'react-type-animation';
import bigAvatar from '@/assets/img/about/1.jpg'
import behindAvatar from '@/assets/img/about/550x640.jpg'

const About = () => {
    return (
        <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }}>
            <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>About Me</h3>
                        <span>Main informations about me</span>
                    </div>
                    <div className="arlo_tm_about_wrap">
                        <div className="author_wrap">
                            <div className="leftbox">
                                <div className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.1">
                                        <img src={behindAvatar} alt="550x640" />
                                        <div className="inner"
                                            style={{ backgroundImage: `url(${bigAvatar})` }}
                                        >
                                        </div>
                                    </div>
                                    <div className="border layer" data-depth="0.2">
                                        <img src="img/about/550x640.jpg" alt="550x640" />
                                        <div className="inner"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Hi there... I'm a
                                        &nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'Freelancer',
                                                2000, // wait 1s before replacing "Freelancer" with "UI/UX Designer"
                                                'UI/UX Designer',
                                                2000,
                                                'Web Developer',
                                                2000,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            // style={{ fontSize: '2em', display: 'inline-block' }} 
                                            repeat={Infinity}
                                        /></h4>
                                </div>
                                <div className="definition">
                                    <p>Hi! My name is <strong>Thang Nguyen</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <span><label>Birthday:</label> 06/04/2002</span>
                                        </li>
                                        <li>
                                            <span><label>City:</label> Ha Noi</span>
                                        </li>
                                        <li>
                                            <span><label>Study:</label> Thang Long University</span>
                                        </li>
                                        <li>
                                            <span><label>Degree:</label> Bachelor</span>
                                        </li>
                                        <li>
                                            <span><label>Github:</label> <a href="https://github.com/thangnguyen2002">github.com/thangnguyen2002</a></span>
                                        </li>
                                        <li>
                                            <span><label>Mail:</label> <a href="mailto:trangha642002@gmail.com">trangha642002&#64;gmail.com</a></span>
                                        </li>
                                        <li>
                                            <span><label>LinkedIn:</label> <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-%C4%91%E1%BB%A9c-th%E1%BA%AFng-63a758214/">Thang-linkedin</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons_wrap">
                                    <ul>
                                        <li>
                                            <a href={resume} download><span>Download CV</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;