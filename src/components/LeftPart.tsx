import logoDesktop from "@/assets/img/logo/desktop-logo.png"
import { FiGithub } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const LeftPart = () => {
    return (
        <div className="arlo_tm_leftpart_wrap">
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={logoDesktop} alt="desktop-logo" className="round-img" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="leftpart_bottom">
                    <div className="social_wrap">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100051945932057">
                                    {/* <i className="xcon-facebook"></i> */}
                                    <ImFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-%C4%91%E1%BB%A9c-th%E1%BA%AFng-63a758214/">
                                    <FiGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/thangnguyen2002">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
            </div>
        </div>
    );
}

export default LeftPart;