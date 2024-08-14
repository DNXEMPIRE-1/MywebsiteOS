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
                        <h1>GAOTek Inc</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://thegaogroup.com/'}
                        >
                            <h4>thegaogroup.com</h4>
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
                        <h1>Ogilvista</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.linkedin.com/company/ogilvista'}
                        >
                            <h4>Ogilvista</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Vue js Developer</h3>
                        <b>
                            <p>January 2024 → Now</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    During my internship at Ogilvista., I had the opportunity to
                    enhance my skills and gain hands-on experience in Vue
                    Development. My role encompassed a variety of
                    responsibilities and projects, including:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed dynamic and responsive single-page
                            applications (SPAs) using Vue.js, Vuex, and Vue
                            Router.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented state management solutions with Vuex to
                            maintain a centralized store for application data.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and developed reusable Vue components to
                            enhance code modularity and maintainability.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated RESTful APIs and GraphQL endpoints into
                            Vue.js applications to fetch and manage data
                            efficiently.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented client-side routing using Vue Router to
                            create seamless navigation experiences within SPAs.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>GirlScript Summer of Code</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://gssoc.girlscript.tech/'}
                        >
                            <h4>GirlScript</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Contributor</h3>
                        <b>
                            <p>may 2024 → August 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    GirlScript Summer Of Code is a three-month-long Open-Source
                    Program conducted every summer by the Girlscript Foundation.
                    With constant efforts, participants contribute to numerous
                    projects under the extreme guidance of skilled mentors over
                    these months. With such exposure, students begin to
                    contribute to real-world projects from the comfort of their
                    homes.
                </p>
                <br />
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>South Muchatha primary School</h1>
                        <a target="_blank" rel="noreferrer" href={'#'}>
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
