import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>National Bank of Kenya</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.nationalbank.co.ke/'}
                        >
                            <h4>nationalbank.co.ke/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Quality Assurance - QA</h3>
                        <b>
                            <p>June 2024 → Now</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    National Bank of Kenya Limited is a financial services
                    provider headquartered in Nairobi, Kenya. It is licensed as
                    a commercial bank, by the Central Bank of Kenya, the
                    national banking regulator. The bank has also been running
                    Agency banking model. National Bank is a subsidiary of KCB
                    Group Plc after a successful acquisition in 2019.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            
                        </p>
                    </li>
                    <li>
                        <p>
                           
                        </p>
                    </li>
                    <li>
                        <p>
                            
                        </p>
                    </li>
                    <li>
                        <p>
                           
                        </p>
                    </li>
                    <li>
                        <p>
                            
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>GAOTek Inc</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://thegaogroup.com/'}
                        >
                            <h4>www.thegaogroup.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer</h3>
                        <b>
                            <p>January 2023 → June 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    During my internship at GAOTek Inc., I had the opportunity
                    to enhance my skills and gain hands-on experience in
                    full-stack development. My role encompassed a variety of
                    responsibilities and projects, including:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Front-End Development: Designed and implemented
                            responsive user interfaces using HTML, CSS,
                            JavaScript, and popular frameworks like React.js.
                        </p>
                    </li>
                    <li>
                        <p>
                            Back-End Development: Developed and maintained
                            server-side logic using Node.js and Express.js,
                            ensuring seamless integration with front-end
                            components.
                        </p>
                    </li>
                    <li>
                        <p>
                            Database Management: Worked with both SQL and NoSQL
                            databases (e.g., MySQL, MongoDB) to design,
                            implement, and manage data models.
                        </p>
                    </li>
                    <li>
                        <p>
                            API Development: Created and consumed RESTful APIs
                            to enable communication between various software
                            components.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>South Muchatha primary School</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'#'}
                        >
                            <h4>SouthMuchatha</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Volunteer Teacher</h3>
                        <b>
                            <p>January 2020 → October 2020</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Dedicated Mathematics, Science, and Computer Teacher
                    Volunteer at South Muchatha Primary School, committed to
                    empowering the next generation with essential skills for
                    success in the digital age.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Leveraging a passion for education and expertise in
                            mathematics, science, and computer literacy, I
                            design and deliver engaging lessons that inspire
                            curiosity and critical thinking among students.
                        </p>
                    </li>
                    <li>
                        <p>
                            By fostering a supportive learning environment, I
                            aim to instill confidence in young learners and
                            cultivate a lifelong love for learning.
                        </p>
                    </li>
                    <li>
                        <p>
                            Through volunteer service, I contribute to bridging
                            educational gaps and promoting academic excellence
                            within the community.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
