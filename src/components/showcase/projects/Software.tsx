import React from 'react';
// @ts-ignore
import devdesign from '../../../assets/pictures/projects/software/devdesign.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>dennisnzioki.com</h2>
                <br />
                <p>
                    dennisnzioki.com is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2023, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development late July. I've been developing it alongside my
                    last semester at school and if you are reading this, it's
                    pretty much done!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://mywebsite-os.vercel.app/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://dennisnzioki.com"
                        >
                            <p>
                                <b>[🚀3D Site]</b> - dennisnzioki.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://mywebsite-os.vercel.app/"
                        >
                            <p>
                                <b>[🚀OS Site]</b> - dnxempire-1.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/DNXEMPIRE-1/MywebsiteOS"
                        >
                            <p>
                                <b>[👨‍💻GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on Instagram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/denno_dnx/"
                    >
                        @denno_dnx
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>DevDesign-Hub</h2>
                <br />
                <p>
                    All in one place where you can find all the resources and
                    details of ambassador/fellowship, open source events, web
                    dev sites, js toolkits etc. that are available across
                    different sites. Consider this repository as your personal
                    space to find or add any new resource that can make life
                    easier for the community.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={devdesign} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> DevDesign-Hub is a website
                                where Developers and designers can get resources
                                for their daily work
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    DevDesign-Hub is a premier online platform dedicated to
                    providing developers and designers with a wealth of
                    resources tailored to their professional needs. The site
                    serves as a comprehensive hub where users can find: <br></br>
                    Design Assets: High-quality graphics, UI kits, icons, fonts, and
                    more to enhance your design projects. <br></br>
                    Coding Libraries: A
                    curated selection of libraries and frameworks to streamline
                    your development process. <br></br>
                    Project Inspiration: Case studies,
                    portfolios, and showcases of outstanding work from the
                    design and development community. <br></br>
                    Educational Resources:
                    Tutorials, articles, and guides to help you learn new skills
                    and stay updated with industry trends. <br></br>
                    Community Support:
                    Forums, discussion groups, and networking opportunities to
                    connect with like-minded professionals and collaborate on
                    projects. <br></br>
                    Whether you are a seasoned professional or just
                    starting, DevDesign-Hub is your go-to resource for
                    everything related to design and development. Join our
                    community to access top-notch resources, stay inspired, and
                    elevate your projects to the next level.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://devdesignhub.vercel.app/"
                        >
                            <p>
                                <b>[🚀Live Demo]</b> - DevDesign-Hub Site
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/DNXEMPIRE-1/DevDesign-Hub"
                        >
                            <p>
                                <b>[👨‍💻GitHub]</b> - DevDesign-Hub Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, the DevDesign Hub is still on development and Contributors are all welcome.✨
                </p>
            </div>
            <div className="text-block">
                <h2>Skip the Scroll</h2>
                <br />
                <p>
                    While working at Hover, I spent a lot of time on GitHub
                    issue pages looking for answers and solutions to problems I
                    had run into. I would always find myself sifting though the
                    comments trying to find the right answer, which usually had
                    the most upvotes and positive reactions. With that
                    information, I decided to create a very simple chrome
                    extension that would sift through all the comments on the
                    page, sort them by positive reactions, and then allow you to
                    traverse them from most positive reactions to least positive
                    reactions.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Skip the Scroll in action, finding
                            the highest rated comments and scrolling right to
                            them
                        </sub>
                    </p>
                </div>
                <p>
                    The extension is open source and currently released on the
                    Chrome web store. Skip the Scroll is obviously not a project
                    with massive scope, but was fun to make and dive into the
                    world of browser extensions. I wanted to showcase since it's
                    a developer tool and I wanna give it some visibility for
                    those who might find it useful.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/skip-the-scroll"
                        >
                            <p>
                                <b>[GitHub]</b> - Skip the Scroll Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/skip-the-scroll/mfehannpjmgfagldoilpngeoecdfgmnd"
                        >
                            <p>
                                <b>[Chrome Web Store]</b> - Skip the Scroll
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    If you are a developer and have also found yourself
                    scrolling through github comment after github comment saying
                    "i also have this problem...", then I highly recommend you
                    check out Skip the Scroll to save you some of your precious
                    time. If you like it, feel free to star it on GitHub and
                    rate it on the Chrome web store.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
