import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <>
            <div className="arlo_tm_section" id="skills">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>FrontEnd Skills</h4>
                                </div>
                                <li>Cut template Website Responsive</li>
                                <li>Framework/Library: Boostrap, ReactJS</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span>
                                                <span className="label">HTML/CSS/Javascript</span>
                                                <span className="number">95%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={60}
                                                    bgColor={"#6ad"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />;
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span>
                                                <span className="label">ReactJS (Typescript)</span>
                                                <span className="number">95%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={60}
                                                    bgColor={"#6ad"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Backend Skills</h4>
                                </div>
                                <li>Program Language: Javascript</li>
                                <li>Write Restful APIs</li>
                                <li>Framework: Express</li>
                                <li>Database: MongoDB, MySQL</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span>
                                                <span className="label">Express</span>
                                                <span className="number">95%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={60}
                                                    bgColor={"#6ad"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />;
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span>
                                                <span className="label">Database MongoDB/MySQL</span>
                                                <span className="number">95%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={60}
                                                    bgColor={"#6ad"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Skill;