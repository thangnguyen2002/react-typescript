import HomeCV from "components/content/HomeCV";
import About from "./content/About";
import Skill from "./content/Skill";
import Project from "./content/Project";
import Contact from "./content/Contact";

const RightPart = () => {
    return (
        <div className="arlo_tm_rightpart">
            <div className="rightpart_inner">
                {/* HOME */}
                <HomeCV />
                {/* HOME */}

                {/* ABOUT */}
                <About />
                {/* /ABOUT */}

                {/* SKILLS */}
                <Skill />
                {/* /SKILLS */}

                {/* SERVICES */}
                <Project />
                {/* /SERVICES */}

                {/* CONTACT & FOOTER */}
                <Contact />
                {/* /CONTACT & FOOTER */}

            </div>
        </div>
    );
}

export default RightPart;