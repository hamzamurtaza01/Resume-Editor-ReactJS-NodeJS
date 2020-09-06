import React, { Component } from 'react';
import './Resume.css';
import { getResume, updateResume } from '../../API_Actions/Resume'

export default class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            education: [
                {
                    title: 'BS in Computer Sciences, PAF-KIET, Karachi, Pakistan',
                    duration: 'September 2015 – December 2019'
                },
                {
                    title: 'Web & Mobile App Development (from Saylani Mass IT Training)',
                    duration: 'January 2017 – February 2019',
                    description: ['(React.js, JavaScript, React Native, PWA, CSS3, HTML5)']
                },
                {
                    title: 'Enrolled in PIAIC Cloud Native Computing Program and Bootcamp 2020',
                    duration: 'January 2020 – Currently'
                }
            ],
            experience: [
                {
                    job_title: 'React.js Frontend Developer at Sonasoft Corporations',
                    duration: 'June 2019 – July 2020',
                    job_Responsibilities: [
                        "developed frontend of Sonasoft's Product (SonaVault) using React, Redux and Ant Design (AntD) library",
                        "coordinated with the back-end team for the implementation of Rest APIs and APIs Integration in UI",
                        "increased customer satisfaction by resolving product issues and bugs reported"
                    ]
                }
            ],
            certification: [{
                title_name: 'Hackathon (PWA – Progressive Web App Development) Saylani Mass IT Training'
            }],
            skills: [
                {
                    heading: 'Programming/Scripting Languages, Libraries, Frameworks and Technologies',
                    skillset: [
                        { expertise_level: 'Proficient', expertise_list: 'React JS, JavaScript (ES6 and onwards), Redux, Bootstrap, AntDesign, Material UI, Css, Html' },
                        { expertise_level: 'Familiar', expertise_list: 'React Native, Node.js, C#, Python, Assembly Language, C/C++' }
                    ]
                },
                {
                    heading: 'Databases',
                    skillset: 'Firebase/Firestore, MS SQL Server, MongoDB'
                },
                {
                    heading: 'Data Science Libraries',
                    skillset: 'Numpy, Flask, Pandas'
                },
                {
                    heading: 'Tools',
                    skillset: 'Git, VS Code, React Developer Tools, Redux Developer Tools, Adobe DreamWeaver, Visual Studio, SQL Server, PyCharm, MATLAB, Android Studio, Postman, Jira'
                }
            ]
        }
    }

    componentDidMount() {
        // updateResume({name: 'hamza'})
        getResume()
    }

    render() {
        const { education, experience, certification, skills } = this.state;
        return (
            <div id='page-center'>
                <div id='page'>
                    <div style={{ width: '100%', height: '100%' }}>
                        <p id='profile-name'>Hamza Murtaza</p>
                        <p id='personal-information'>
                            Phone: +92 (321) 2737553,
                            Email: <a href="mailto:hamzamurtaza01@gmail.com">hamzamurtaza01@gmail.com</a>,
                            LinkedIn: <a href="https://www.linkedin.com/in/hamza-murtaza-57941aa5/">https://www.linkedin.com/in/hamza-murtaza-57941aa5/</a>,
                            Github: <a href="https://github.com/hamzamurtaza01">https://github.com/hamzamurtaza01</a>
                        </p>
                        <hr />

                        <h6>Objective</h6>
                        <p>
                            To seek a job as a MERN stack developer in a dynamic environment which provides ample opportunities for learning,
                            training, research and growth. Also interested in learning new technologies with React.js such as React Native, Node.js,
                            Express.js, MongoDB, Python, Docker and Kubernetes.
                        </p>
                        <br />

                        <h6>Education</h6>
                        <hr />
                        <ul>
                            {education && education.length > 0 && education.map(edu => (
                                <li>
                                    <div className='item-and-dates'>
                                        <p className='title-left bold'>{edu.title}</p>
                                        <p className='date-right'>{edu.duration}</p>
                                    </div>
                                    {edu.description && <ul>
                                        {edu.description.map(desc => (
                                            <li className='list-style-type-none'>{desc}</li>
                                        ))}
                                    </ul>
                                    }
                                </li>
                            ))}
                        </ul>
                        <br />

                        <h6>Work Experience</h6>
                        <hr />
                        <ul>
                            {experience && experience.length > 0 && experience.map(exp => (
                                <li>
                                    <div className='item-and-dates'>
                                        <p className='title-left bold'>{exp.job_title}</p>
                                        <p className='date-right'>{exp.duration}</p>
                                    </div>
                                    {exp.job_Responsibilities && <ul>
                                        {exp.job_Responsibilities.map(desc => (
                                            <li className='job-responsibilities'>{desc}</li>
                                        ))}
                                    </ul>
                                    }
                                </li>
                            ))}
                        </ul>
                        <br />

                        <h6>Certification</h6>
                        <hr />
                        <ul>
                            {certification && certification.length > 0 && certification.map(cert => (
                                <li>
                                    <div className='item-and-dates'>
                                        <p className='title-left bold'>{cert.title_name}</p>
                                    </div>
                                    {cert.description && <ul>
                                        {cert.description.map(desc => (
                                            <li className='list-style-type-none'>{desc}</li>
                                        ))}
                                    </ul>
                                    }
                                </li>
                            ))}
                        </ul>
                        <br />

                        <h6>Skills</h6>
                        <hr />
                        <ul className='list-style-type-none skills left-padding-none'>
                            {skills && skills.length > 0 && skills.map(({ heading, skillset }) => (
                                <li className='align-items-together'>
                                    <p className='title-left bold inline'>{heading}{': '}</p>
                                    {skillset && Array.isArray(skillset) ?
                                        <ul className='minimize-left-padding full-space'>
                                            {skillset.map(({ expertise_level, expertise_list }) => (
                                                <div>
                                                    <li className='list-style-type-none bold inline'>
                                                        {'- '}{expertise_level}{':'}&nbsp;
                                                    </li>
                                                    <li className={`list-style-type-none inline ${expertise_level === 'Proficient' ? 'bold' : ''}`}>
                                                        {expertise_list}
                                                    </li>
                                                </div>
                                            ))}
                                        </ul>
                                        :
                                        <p className='list-style-type-none inline'>&nbsp;{skillset}</p>
                                    }
                                </li>
                            ))}
                        </ul>
                        <br />




                    </div>
                </div>
            </div>
        )
    }
}
