import React from 'react';
import { Link } from '../general';

import forhire from '../../assets/pictures/forHireGif.gif';
import dnx from '../../assets/pictures/dnxblack.png';
import { useNavigate } from 'react-router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Dennis Nzioki </h1>
                <h2>Software Engineer & UI/UX Designer</h2>
                <br></br>
                <h2>
                    🎨 UI/UX Designer by day, Code Ninja by night. I don't just
                    code; I create magic that users can see and feel. 💻{' '}
                </h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
                <a
                    href="https://linktr.ee/dnxempire"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        ...styles.link,
                        fontWeight: 'bolder',
                        fontFamily: 'Futura Pro Black',
                        fontSize: '16px',
                    }}
                >
                    <b>🔗 Quick Links 📌</b> 
                </a>
                    
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forhire} alt="" /> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 400,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
