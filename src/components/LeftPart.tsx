import logoDesktop from "@/assets/img/logo/desktop-logo.png"
import { FiGithub } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
interface IProps {
    hideLeftPart: boolean
    setHideLeftPart: (value: boolean) => void
}

const LeftPart = (props: IProps) => {
    let { hideLeftPart, setHideLeftPart } = props
    const [activeTab, setActiveTab] = useState<string>('home')

    useEffect(() => {
        const { hash } = window.location //get section link from url
        // console.log('>>>hash: ', hash);
        if (hash) { //phòng trg hợp sau này ko vào đg link có dấu #
            //to set active tab of section from url
            const tab = hash.replace('#', '')
            setActiveTab(tab)

            //to scroll to that tab smoother
            const section = document.querySelector(`#${tab}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [])

    const handleClickTab = (tab: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setActiveTab(tab)

        const section = document.querySelector(`#${tab}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = tab; //add fragment to the url without causing a redirect
                // console.log('>>>window.location.hash: ', window.location.hash);
            }, 1000)
        }
    }

    return (
        <div className={hideLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={logoDesktop} alt="desktop-logo" className="round-img" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li>
                            <a href="#home" className={activeTab && activeTab == 'home' ? "active" : ""}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', e)}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={activeTab && activeTab == 'about' ? "active" : ""}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', e)}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className={activeTab && activeTab == 'skills' ? "active" : ""}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skills', e)}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#project" className={activeTab && activeTab == 'project' ? "active" : ""}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('project', e)}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={activeTab && activeTab == 'contact' ? "active" : ""}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', e)}>
                                Contact
                            </a>
                        </li>
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
                {!isMobile &&
                    <a className={hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"} href="#"
                        onClick={(e) => {
                            e.preventDefault() //prevent automatically add # to the url bcz of from a tag element
                            setHideLeftPart(!hideLeftPart)
                        }}>
                        <i className={hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
                    </a>
                }
            </div>
        </div>
    );
}

export default LeftPart;