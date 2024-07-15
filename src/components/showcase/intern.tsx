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
                        Front-End Development: Designed and implemented responsive user interfaces using HTML, CSS, JavaScript, and popular frameworks like React.js.
                        </p>
                    </li>
                    <li>
                        <p>
                        Back-End Development: Developed and maintained server-side logic using Node.js and Express.js, ensuring seamless integration with front-end components.
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
                        <h1>K-F/X</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://kfxnyc.com/'}
                        >
                            <h4>www.kfxnyc.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Special Effects Technician</h3>
                        <b>
                            <p>Fall 2019, Summer 2024</p>
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
                <h3 style={styles.indent}>Screen Credits:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Ray Donovan</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/ray-donovan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
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
