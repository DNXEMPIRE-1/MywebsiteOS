import React from 'react';
// @ts-ignore
import devdesign from '../../../assets/pictures/projects/software/devdesign.mp4';
// @ts-ignore
import trush from '../../../assets/pictures/projects/software/trush.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import ninja from '../../../assets/pictures/projects/software/ninja.mp4';
// @ts-ignore
import flexiai from '../../../assets/pictures/projects/software/flexiai.webm';
// @ts-ignore
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
                        href="https://www.instagram.com/dnx_tech/"
                    >
                        @dnx_tech
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>FlexiAI</h2>
                <br />
                <p>
                    🌟 FlexiAI: Revolutionizing Everyday Experiences with AI!
                    🤖🧠 Excited to share the launch of FlexiAI, a platform
                    offering next-generation AI tools to simplify tasks, spark
                    creativity, and empower productivity.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={flexiai} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b>Step into the future of AI
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                🚀 Explore the Suite
                    of Tools: {' '}
                    <br></br>
                    Design Assets: High-quality graphics, UI kits, icons, fonts,
                    and more to enhance your design projects. <br></br>
                    Coding Libraries: A curated selection of libraries and
                    frameworks to streamline your development process. <br></br>
                    Project Inspiration: Case studies, portfolios, and showcases
                    of outstanding work from the design and development
                    community. <br></br>
                    Educational Resources: Tutorials, articles, and guides to
                    help you learn new skills and stay updated with industry
                    trends. <br></br>
                    Community Support: Forums, discussion groups, and networking
                    opportunities to connect with like-minded professionals and
                    collaborate on projects. <br></br>
                    Whether you are a seasoned professional or just starting,
                    DevDesign-Hub is your go-to resource for everything related
                    to design and development. Join our community to access
                    top-notch resources, stay inspired, and elevate your
                    projects to the next level.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://flexiai.onrender.com/"
                        >
                            <p>
                                <b>[🚀Live Demo]</b> - FlexiAI Site
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/DNXEMPIRE-1/"
                        >
                            <p>
                                <b>[👨‍💻GitHub]</b> - FlexiAI Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, FlexiAI Weather API is still on development and
                    Contributors are all welcome.✨
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
                    serves as a comprehensive hub where users can find:{' '}
                    <br></br>
                    Design Assets: High-quality graphics, UI kits, icons, fonts,
                    and more to enhance your design projects. <br></br>
                    Coding Libraries: A curated selection of libraries and
                    frameworks to streamline your development process. <br></br>
                    Project Inspiration: Case studies, portfolios, and showcases
                    of outstanding work from the design and development
                    community. <br></br>
                    Educational Resources: Tutorials, articles, and guides to
                    help you learn new skills and stay updated with industry
                    trends. <br></br>
                    Community Support: Forums, discussion groups, and networking
                    opportunities to connect with like-minded professionals and
                    collaborate on projects. <br></br>
                    Whether you are a seasoned professional or just starting,
                    DevDesign-Hub is your go-to resource for everything related
                    to design and development. Join our community to access
                    top-notch resources, stay inspired, and elevate your
                    projects to the next level.
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
                    Unfortunately, DevDesign Hub is still on development and
                    Contributors are all welcome.✨
                </p>
            </div>
            <div className="text-block">
                <h2>TypeRush - Get Better at Typing!</h2>
                <br />
                <p>
                    Features<br></br>
                    New Typing Tests Every Time: The app has lots of different
                    texts to keep your practice interesting and challenging.{' '}
                    <br></br>
                    See Your Progress as You Type: You can watch your typing
                    speed, how well you're doing, and your score update live.{' '}
                    <br></br>
                    Spot Your Mistakes Easily: If you type something wrong,
                    it'll light up so you can see where you need to improve.{' '}
                    <br></br>
                    Caps Lock Warning: It tells you if you've accidentally left
                    Caps Lock on to avoid errors. <br></br>
                    Summary After Each Test: When you finish a test, you get a
                    detailed report of your speed, score, and mistakes.{' '}
                    <br></br>
                    Keep Practicing: You can start new tests over and over to
                    keep getting better. <br></br>
                    Nice and Simple Design: The design is clean and easy to use,
                    helping you focus on practicing. <br></br>
                    Light and Dark Mode: Matches your system preference to make
                    it easy on your eyes, day or night.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={trush} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b>TypeRush to help Devs and typers to
                            fastern their typing ratio.
                        </sub>
                    </p>
                </div>
                <p>
                    📝 How It Works <br></br>
                    TypeRush picks a passage for you to type. As you type, it
                    keeps track of how fast and accurate you are, and how many
                    points you get. It shows mistakes clearly and warns you
                    about Caps Lock. After each round, you get a full breakdown
                    of your performance to encourage you to keep improving.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/DNXEMPIRE-1/TypeRush"
                        >
                            <p>
                                <b>[👨‍💻GitHub]</b> - TypeRush Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://typerush-eight.vercel.app/"
                        >
                            <p>
                                <b>[🚀Live Demo]</b> - TypeRush - Get Better at
                                Typing!
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    TypeRush is a web app that helps you get faster and more
                    accurate at typing.
                </p>
            </div>
            <div className="text-block">
                <h2>🥷🏽 NinjaSketch</h2>
                <br />
                <p>
                    An Excalidraw clone with React and TypeScript. Rough.js is
                    used for the sketchy, hand-drawn style. I built the side
                    project for learning purposes. The app is not responsive. I
                    mainly focused on the functionalities since I already have
                    plenty of projects that are responsive.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={ninja} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b>An Excalidraw clone with React and
                            TypeScript. Rough.js is used for the sketchy,
                            hand-drawn style.
                        </sub>
                    </p>
                </div>
                <p>
                    📝 Here's what you can do with NinjaSketch: <br></br>
                    Choose a Tool: You have pencils, lines, rectangles, and text
                    tools. Pick one and start creating. <br></br>
                    Draw and Move: Click and drag on the canvas to draw. To move
                    something, select it and drag it to a new spot. Also, resize
                    elements by dragging the corners. Resizing only works on
                    rectangles or lines. <br></br>
                    Edit Text: Click on the canvas and start typing to add text
                    to your drawings. You can also edit existing text. <br></br>
                    Zoom: Use Ctrl + Scroll or click on the buttons to zoom in
                    for detail or out to see the whole picture. <br></br>
                    Pan: Hold the Space bar and drag or use the middle mouse
                    button to move around the whiteboard canvas.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/DNXEMPIRE-1/NinjaSketch"
                        >
                            <p>
                                <b>[👨‍💻GitHub]</b> - NinjaSketch Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://ninja-sketch-azure.vercel.app/"
                        >
                            <p>
                                <b>[🚀Live Demo]</b> - 🥷🏽 NinjaSketch
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    👩🏽‍🍳 The Process<br></br>I started by rendering a canvas with
                    rough.js to create the base for all the drawings. Then, I
                    focused on drawing on the canvas, allowing users to make
                    lines, rectangles, and other shapes. <br></br>
                    Next, I made sure users could move elements around. This was
                    important for adjusting drawings. After that, I added the
                    ability to resize elements to give more control over the
                    shapes.<br></br>
                    To make sure mistakes could be fixed, I implemented undo and
                    redo features. I also added freehand drawing for a more
                    natural sketching experience and a text tool to label or
                    note on the canvas.<br></br>
                    To navigate larger drawings, I put in pan and zoom tools.
                    With everything functioning, I designed the whole UI to make
                    it user-friendly and appealing. <br></br>
                    Finally, I added testing with Cypress and Testing Library. I
                    conducted end-to-end tests on drawing and manipulating text,
                    lines, rectangles, and freehand drawings to make sure
                    everything worked smoothly. <br></br>
                    Along the way, while building everything, I took notes on
                    what I've learned so I don't miss out on it. I also
                    documented the behind-the-scenes processes every time a
                    feature was added. <br></br>
                    This way, I understood what I've built. The funny thing is,
                    as soon as I started to document what happened behind the
                    scenes and the features I've added, it made me realize that
                    we fully understand something once we've actually taken a
                    step back, thought about it, and documented what we've done.
                    I think this is a good practice to follow when learning
                    something new.
                </p>
                <h3>For more Projects visit </h3>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/DNXEMPIRE-1/"
                    >
                        <p>
                            <b>👨‍💻 My GitHub Profile</b>
                        </p>
                    </a>
                </li>
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
