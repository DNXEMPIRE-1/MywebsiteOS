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
                        <h1>StudyBuddy</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://studybuddy.co.ke/'}
                        >
                            <h4>studybuddy.co.ke/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>CTO/CO-FOUNDER</h3>
                        <b>
                            <p>June 2024 → Now</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    StudyBuddy is an innovative e-learning platform
                    revolutionizing education in Africa by providing students
                    with access to a diverse range of teachers from any school
                    in the country. Through StudyBuddy, students can engage with
                    teachers outside their own school, expanding their learning
                    opportunities and gaining insights from a variety of
                    perspectives.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and engineered the vertical scrolling
                            discover player which, at its daily peak, was
                            responsible for generating over 600,000 views across
                            20,000 active users.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented multiple features to
                            increase app usability and user experience while
                            ensuring the quality, maintainability and
                            scalability of the front end as the user base grew
                            by over 50,000.
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated major refactors targeted towards app
                            optimization and performance resulting in a smoother
                            user experience and accomplished by eliminating
                            redundant re-renders and API calls by over 50%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Directed and executed an internal migration of 3
                            individual repositories to a single monorepo,
                            greatly reducing overhead for developing new
                            features, fixing bugs, and managing dependencies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Rebuilt the website with React and shared mobile app
                            components allowing users to access a wide variety
                            of app interactions entirely on the web, resulting
                            in over 700,000 total site visits.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>GoPro Digital Agency</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://bracs.co/'}
                        >
                            <h4>www.bracs.co</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Web Developer & Web Designer</h3>
                        <b>
                            <p>March 2024 → Now</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Supervised and developed the front end of bracs.co, a
                    beautifully simple and effective bracket creation and
                    management engine. Written in Typescript using React and
                    deployed using AWS Elastic Beanstalk.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Managed the project and team members by conducting
                            bi-weekly stand-ups.
                        </p>
                    </li>
                    <li>
                        <p>
                            Architected bracket view UI using React Flow and
                            custom bracket data types built from binary trees.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created conversion algorithms to serialize bracket
                            tree data to allow for saving in the cloud.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented bracket generation utilities which
                            employ gray code for proper team seeding and
                            placement.
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
                            href={'https://kfxnyc.com/'}
                        >
                            <h4>www.kfxnyc.com</h4>
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
                    Applied problem solving and technical skills to operate
                    large equipment such as rain machines, fog machines, small
                    explosives and general rigging with a professional crew of
                    50+ people.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Managed the project and team members by conducting
                            bi-weekly stand-ups.
                        </p>
                    </li>
                    <li>
                        <p>
                            Architected bracket view UI using React Flow and
                            custom bracket data types built from binary trees.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created conversion algorithms to serialize bracket
                            tree data to allow for saving in the cloud.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented bracket generation utilities which
                            employ gray code for proper team seeding and
                            placement.
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
