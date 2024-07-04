import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Dennis Nzioki</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at Gopro! In June I will
                     graduated from Strathmore University
                    with my BS in Business Information Technology.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:dennisnzioki019@gmail.com">
                        dennisnzioki019@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                Ever since I was a kid, I've been fascinated by how things work.
                 This curiosity quickly turned into an obsession with Lego, sparking a lifelong love for building.
                  In high school, I dove into programming for the first time by joining the Computer Robotics team,
                   which opened up a whole new world for me. In 2010, my family and I made a big move to Nairobi, 
                where I continued my journey through primary school, high school, and eventually university.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            site :)
                        </sub>
                    </p>
                </div>

                <p>
                My serious programming journey kicked off in high school, where I began by learning to scrape and interact with websites. 
                From there, I dived into numerous passion projects, creating chat bots, 
                developing multiple game projects, building apps, and more. 
                few of these projects are showcased on my...{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                In 2020, I was thrilled to be accepted into Strathmore University,
                to study Business Information Technology. By the end of my sophomore year, 
                I landed an internship at the startup Fujicom, where I primarily focused on Website development. 
                I continued working at Fujicom intermittently for about a year. 
                As my senior year approached, I decided to explore new opportunities and shift my focus to other exciting ventures.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            , creating{' '}
                            <Link to="/projects/art">Digital Art</Link>.
                            and {' '}
                            <Link to="/projects/design">Design</Link>. 
                            You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, watching scifi/fantasy Movies/series, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In University, I was an active member in the Strathmore Computing and Engineering Student Association 
                            and held the Head of Cybersecurity Department. I met a lot of amazing people through
                            my fraternity and thoroughly enjoyed the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, December 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on Instagram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/dnx_tech/"
                    >
                        @dnx_tech
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:dennisnzioki019@gmail.com">
                        dennisnzioki019@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
