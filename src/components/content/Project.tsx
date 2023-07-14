import { GrReactjs } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsInstagram, BsArrowRight } from "react-icons/bs";
import { Button, Modal } from 'antd';
import { useState } from "react";

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        frontend: string;
        backend: string;
        member: number;
        role: string;
        demo: string;
        github: string;
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const dataProject: IProject[] = [
        {
            image: <GrReactjs
                size={50}
                color={'#2bebfd'} />,
            title: 'Tiki Clone',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: 'description',
                frontend: 'frontend',
                backend: 'backend',
                member: 2,
                role: 'Developer',
                demo: 'link deploy',
                github: 'link git',
            }
        },
        {
            image: <AiFillFacebook
                size={50}
                color={'#4096ff'} />,
            title: 'Facebook  Clone',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: 'description',
                frontend: 'frontend',
                backend: 'backend',
                member: 1,
                role: 'Developer',
                demo: 'link deploy',
                github: 'link git',
            }
        },
        {
            image: <BsTwitter
                size={50}
                color={'#4096ff'} />,
            title: 'Twitter  Clone',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: 'description',
                frontend: 'frontend',
                backend: 'backend',
                member: 1,
                role: 'Developer',
                demo: 'link deploy',
                github: 'link git',
            }
        },
        {
            image: <BsInstagram
                size={50}
                color={'#e84a65'} />,
            title: 'Instagram  Clone',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: 'description',
                frontend: 'frontend',
                backend: 'backend',
                member: 1,
                role: 'Developer',
                demo: 'link deploy',
                github: 'link git',
            }
        },

    ]

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    }

    return (
        <div className="arlo_tm_section" id="project">
            <Modal title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ''} open={isModalOpen}
                footer={null}
                maskClosable={false}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
            >
                {dataDetail &&
                    <ul>
                        <li>Miêu tả: {dataDetail.detail.description}</li>
                        <li>Frontend: {dataDetail.detail.frontend}</li>
                        <li>Backend: {dataDetail.detail.backend}</li>
                        <li>Số lượng thành viên dự án: {dataDetail.detail.member}</li>
                        <li>Vai trò: {dataDetail.detail.role}</li>
                        <li>
                            Demo:
                            <a href={dataDetail.detail.demo} target='_blank'>
                                {dataDetail.detail.demo}
                            </a>
                        </li>
                        <li>
                            Github:
                            <a href={dataDetail.detail.github} target='_blank'>
                                {dataDetail.detail.github}
                            </a>
                        </li>
                    </ul>
                }
            </Modal>
            <div className="arlo_tm_services_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Amazing Projects</h3>
                        <span>Projects have been doing</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            {dataProject.map((project, index) => {
                                return (
                                    <li key={`${index}-project`}>
                                        <div className="inner"
                                            title="Xem Chi Tiết"
                                            // title se hien ra khi di chuot vao
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                setIsModalOpen(true)
                                                setDataDetail(project)
                                            }}>
                                            <div className="icon">
                                                {project.image}
                                            </div>
                                            <div className="title_service">
                                                <h3>{project.title}</h3>
                                            </div>
                                            <div className="text">
                                                <p>{project.shortDescription}</p>
                                            </div>
                                            <div className="view_detail" style={{ padding: "5px 0" }}>
                                                <span
                                                    style={{ cursor: "pointer" }}

                                                >
                                                    <BsArrowRight />
                                                    &nbsp;
                                                    Xem Chi Tiết
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;