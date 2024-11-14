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
                            <p>June 2024 → August </p>
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
                        <p>Develop and execute detailed test cases for various banking applications, ensuring that all functionalities align with business requirements and regulatory standards.</p>
                    </li>
                    <li>
                        <p>Identify, log, and track defects within applications using tools like JIRA or Bugzilla. Collaborate with developers to ensure timely fixes.</p>
                    </li>
                    <li>
                        <p>Implement automated test scripts using tools like Selenium, QTP, or Appium to improve efficiency and accuracy in regression and functional testing.</p>
                    </li>
                    <li>
                        <p>Conduct performance testing to evaluate system stability under heavy loads, and security testing to ensure compliance with banking industry security protocols.
                        </p>
                    </li>
                    <li>
                        <p>Ensure all testing activities meet internal compliance standards and are properly documented for audits and regulatory review.</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerRow}>
                        <h3>Application Developer - AAD</h3>
                        <b>
                            <p>September 2024 → Now</p>
                        </b>
                    </div>
            
            <div className="text-block">
                
                <br />
                <ul>
                    <li>
                        <p>Work on integrating third-party APIs, such as payment gateways or KYC systems, with the bank’s existing infrastructure to provide additional services to customers.</p>
                    </li>
                    <li>
                        <p>Design, optimize, and manage databases (e.g., MySQL, Oracle) to store customer data, transaction records, and other critical banking information.</p>
                    </li>
                    <li>
                        <p>Implement secure coding practices and encryption methods to protect sensitive customer data and transactions, complying with cybersecurity standards.</p>
                    </li>
                    <li>
                        <p>Monitor applications post-deployment, address any bugs or performance issues, and perform regular system updates to ensure continuous availability.</p>
                    </li>
                    
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Ogilvista</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.linkedin.com/company/ogilvista'}
                        >
                            <h4>Ogilvista</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Front-End Developer</h3>
                        <b>
                            <p>September 2024 → Now</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    After my internship at Ogilvista., I had the opportunity to
                    enhance my skills and gain hands-on experience in Vue
                    Development. My role encompassed a variety of
                    responsibilities and projects, including:
                </p>
                <br />
                <ul>
                    <li>
                        <p>Translate UI/UX designs into interactive, user-friendly web interfaces using HTML, CSS, and JavaScript frameworks like React, Angular, or Vue. Ensure a seamless and visually appealing user experience across different banking platforms, including web and mobile.</p>
                    </li>
                    <li>
                        <p>Translate UI/UX designs into interactive, user-friendly web interfaces using HTML, CSS, and JavaScript frameworks like React, Angular, or Vue. Ensure a seamless and visually appealing user experience across different banking platforms, including web and mobile.</p>
                    </li>
                    <li>
                        <p>Ensure that all applications and web pages are fully responsive, meaning they work smoothly across various devices, such as desktops, tablets, and mobile phones. This is crucial in delivering a consistent experience to customers using different devices.</p>
                    </li>
                    <li>
                        <p>Optimize web applications for speed and performance by reducing page load times, optimizing images, and using techniques such as lazy loading or code splitting to ensure a fast user experience, even with heavy traffic.</p>
                    </li>
                    <li>
                        <p>Implement front-end security practices, such as input validation, to prevent vulnerabilities like cross-site scripting (XSS) or cross-site request forgery (CSRF). Ensure the application adheres to the bank’s security policies and is compliant with financial industry standards (e.g., PCI-DSS).</p>
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
                            Develop and implement StudyBuddy’s technology vision
                            and strategy. Align the technology roadmap with
                            overall business goals and objectives. Stay abreast
                            of emerging technologies and trends to keep
                            StudyBuddy competitive and innovative.
                        </p>
                    </li>
                    <li>
                        <p>
                            Lead and mentor the technology team, including
                            software engineers, IT professionals, and other
                            technical staff. Foster a culture of innovation,
                            collaboration, and continuous improvement within the
                            technology department. Ensure effective
                            communication and collaboration between the
                            technology team and other departments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Oversee the development and delivery of StudyBuddy’s
                            software products and services. Ensure the highest
                            standards of quality, security, and performance in
                            all technology initiatives. Manage the product
                            lifecycle from concept to launch, ensuring timely
                            and efficient delivery.
                        </p>
                    </li>
                    <li>
                        <p>
                            Oversee the design, implementation, and maintenance
                            of StudyBuddy’s IT infrastructure. Ensure the
                            security, scalability, and reliability of all
                            technology systems and platforms. Implement best
                            practices for IT operations, including disaster
                            recovery, data backup, and cybersecurity measures.
                        </p>
                    </li>
                    <li>
                        <p>
                            Develop and manage the technology budget, ensuring
                            cost-effective use of resources. Identify and manage
                            external partnerships and vendor relationships.
                            Optimize the allocation of technical resources to
                            support business priorities. Compliance and Risk
                            Management:
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
                        <p>
                            Developed responsive and user-friendly websites and
                            web applications using HTML5, CSS3, JavaScript, and
                            modern front-end frameworks like React.js and
                            Angular.
                        </p>
                    </li>
                    <li>
                        <p>
                            {' '}
                            Implemented custom designs and layouts, ensuring
                            compatibility across various browsers and devices
                            for optimal user experience.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated third-party APIs and services to add
                            functionalities such as payment gateways, social
                            media sharing, and geolocation services.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated closely with designers, UX/UI
                            specialists, and project managers to translate
                            design mockups and wireframes into fully functional
                            web interfaces.
                        </p>
                    </li>
                    <li>
                        <p>
                            Maintained and updated existing websites and
                            applications, implementing new features and
                            enhancements as required.
                        </p>
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
                        <p>Design visually appealing and functional website layouts using tools like Adobe XD, Figma, or Sketch. Ensure the design aligns with the bank's brand guidelines and provides an intuitive navigation experience for users.</p>
                    </li>
                    <li>
                        <p>Develop graphic elements (such as logos, banners, and icons) that reinforce the bank's brand identity across its digital platforms. Maintain consistency in the use of fonts, colors, and imagery across the website, social media, and other digital materials.</p>
                    </li>
                    <li>
                        <p>Design and integrate multimedia elements, including animations, interactive infographics, and videos, to enhance user engagement on the website or in promotional materials. Tools like Adobe After Effects or Illustrator may be used for these tasks.</p>
                    </li>
                    <li>
                        <p>Create interactive prototypes to demonstrate how web elements (buttons, forms, menus) will work. Conduct usability testing to gather feedback on the design, ensuring it meets user expectations and improves the overall experience.</p>
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
