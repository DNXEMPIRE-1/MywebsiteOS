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
                        <h1>KCB-NBK</h1>
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
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </div>
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
                            Technology Strategy and Vision:</br> Develop and
                            implement StudyBuddy’s technology vision and
                            strategy. Align the technology roadmap with overall
                            business goals and objectives. Stay abreast of
                            emerging technologies and trends to keep StudyBuddy
                            competitive and innovative.
                        </p>
                    </li>
                    <li>
                        <p>
                        Leadership and Management:
Lead and mentor the technology team, including software engineers, IT professionals, and other technical staff.
Foster a culture of innovation, collaboration, and continuous improvement within the technology department.
Ensure effective communication and collaboration between the technology team and other departments.
                        </p>
                    </li>
                    <li>
                        <p>
                        Product Development:
Oversee the development and delivery of StudyBuddy’s software products and services.
Ensure the highest standards of quality, security, and performance in all technology initiatives.
Manage the product lifecycle from concept to launch, ensuring timely and efficient delivery.
                        </p>
                    </li>
                    <li>
                        <p>
                        IT Infrastructure and Operations:
Oversee the design, implementation, and maintenance of StudyBuddy’s IT infrastructure.
Ensure the security, scalability, and reliability of all technology systems and platforms.
Implement best practices for IT operations, including disaster recovery, data backup, and cybersecurity measures.
                        </p>
                    </li>
                    <li>
                        <p></p>
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
                            href={'https://gopro4.vercel.app/'}
                        >
                            <h4>gopro-digital</h4>
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
                <p></p>
                <br />
                <ul>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Fujicom</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://fujicom-main.vercel.app/'}
                        >
                            <h4>fujicom.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Graphics & Web Designer</h3>
                        <b>
                            <p>January 2019 → December 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p></p>
                <br />
                <ul>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                    <li>
                        <p></p>
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
