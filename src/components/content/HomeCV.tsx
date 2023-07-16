import { TypeAnimation } from 'react-type-animation';
import avatar from "@/assets/img/hero/img1.jpg"

const HomeCV = () => {
    const handleScrollToAbout = () => {
        const section = document.querySelector('#about');
        // console.log('>>>about section: ', section);
        if (section) {
            // alert('me')
            section.scrollIntoView({ behavior: 'smooth', block: 'start' }); //scroll smoother
        }
    };

    return (
        <div className="arlo_tm_section" id="home">
            <div className="arlo_tm_hero_header_wrap">
                <div className="arlo_tm_universal_box_wrap">
                    <div className="bg_wrap">
                        <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                        <div className="overlay_color hero"></div>
                    </div>
                    <div className="content hero">
                        <div className="inner_content">
                            <div className="image_wrap">
                                <img src={avatar} alt="hero" />
                            </div>
                            <div className="name_holder">
                                <h3>Nguyen <span>Duc Thang</span></h3>
                            </div>
                            <div className="text_typing">
                                <p>I'm a
                                    {/* <> </> meo them dau cach, dung <> hoac html entity*/}
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
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="arlo_tm_arrow_wrap bounce anchor">
                        <a href="#"
                            onClick={(e) => {
                                e.preventDefault() //do scrollIntoView nen can preventDefault
                                handleScrollToAbout()
                            }}>
                            <i className="xcon-angle-double-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCV;