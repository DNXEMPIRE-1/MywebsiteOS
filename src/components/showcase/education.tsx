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
                        <h1>Strathmore University</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://strathmore.edu/'}
                        >
                            <h4>strathmore.edu/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>
                            Bachelor of Business Information Technology - BBIT
                        </h3>
                        <b>
                            <p>2020 → Now</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Strathmore University is a Chartered University located in
                    Nairobi, Kenya. It was the first multiracial and multi
                    religious educational institution in English speaking
                    Eastern Africa and more recently the first institute of
                    higher learning to be ISO certified in East and Central
                    Africa in 2004. Our mission is to provide all-round quality
                    education in an atmosphere of freedom and responsibility;
                    excellence in teaching, research and scholarship; ethical
                    and social development; and service to society.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Community Lead- Cybersecurity, SCESA.<br></br>
                            Strathmore Computing and Engineering Students’
                            Association (SCESA) is a club, involving more than
                            250 members, to focus on being a bridge between the
                            students and organizations, and vice versa. The
                            association is aimed at providing industrial
                            experiences to students that are not offered in the
                            classroom setup. Since the association is of a vast
                            range, the Diversity and Inclusivity team was formed
                            so as to address the needs of all the groups in the
                            association. The team engages in various activities
                            that include individuals in different groups. In
                            line with the SCESA objectives of engaging students
                            in the real-life problems, the Women in Tech launch
                            was suggested.
                        </p>
                    </li>
                    <li>
                        <p>IT consultant Volunteer at South Muchatha Academy</p>
                    </li>
                    <li>
                        <p>
                            Mathematics, Science and Computer Teacher volunteer
                            at North Muchatha Academy.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Maasai Group of Schools</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.facebook.com/MaasaiHighSchool/'}
                        >
                            <h4>MaasaiHighSchool</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Kenya Certificate of Secondary Education - KCSE</h3>
                        <b>
                            <p>2015 → 2019</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    The Maasai depends on its generations. Future generations
                    depend on efforts from fore generations. A successful
                    community depends on responsible and proud citizens, which
                    depends on a community of good morale and values.
                    <br></br>
                    Today's children are leaders for tomorrow. It is important
                    to educate Maasai children and enable them to make a strong
                    contribution to the ongoing needs of their community.This
                    philosophy nurtures the values of a strong community.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Head, Science Club & Math Club <br></br>
                            As the Head of both the Science Club and the Math
                            Club, I have been responsible for: Leadership and
                            Management: Leading weekly meetings, planning and
                            organizing events, and coordinating with club
                            members and faculty advisors to ensure smooth
                            operations. Event Planning: Organizing educational
                            events, competitions, and workshops to enhance
                            members' knowledge and skills in science and
                            mathematics. Community Outreach: Collaborating with
                            local schools and organizations to promote STEM
                            education and encourage participation in science and
                            math activities.
                        </p>
                    </li>
                    <li>
                        <p>
                            Vice President, Student Government<br></br>
                            As the Vice President of the Student Government, my
                            responsibilities have included: Leadership:
                            Assisting the President in leading the student
                            government and representing the student body in
                            school decisions. Policy Development: Working with
                            other student leaders to develop and implement
                            policies that address student needs and concerns.
                        </p>
                    </li>
                    <li>
                        <p>
                            These roles have helped me develop strong
                            leadership, organizational, and communication
                            skills, and have given me valuable experience in
                            working with diverse groups of people towards common
                            objectives.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>San-Damiano Boarding Primary School</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                                'https://www.facebook.com/groups/140141072662630/'
                            }
                        >
                            <h4>San-Damiano</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Special Effects Technician</h3>
                        <b>
                            <p>2004 → 2014</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    
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
