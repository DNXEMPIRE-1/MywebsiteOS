import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import figma from '../../assets/pictures/figma.jpeg';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container social">
                <img src={icon} alt="" className="socialImage" />
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = (props) => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [formMessageColor, setFormMessageColor] = useState('');

    useEffect(() => {
        if (validateEmail(email) && name.length > 0 && message.length > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, name, message]);

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) {
            setFormMessage('Form unable to validate, please try again.');
            setFormMessageColor('red');
            return;
        }
        try {
            setIsLoading(true);
            const templateParams = {
                company,
                email,
                name,
                message,
            };

            await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                templateParams,
                'YOUR_USER_ID'
            );

            setFormMessage(`Message successfully sent. Thank you ${name}!`);
            setCompany('');
            setEmail('');
            setName('');
            setMessage('');
            setFormMessageColor(colors.blue);
        } catch (error) {
            setFormMessage('There was an error sending your message. Please try again.');
            setFormMessageColor(colors.red);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (formMessage.length > 0) {
            setTimeout(() => {
                setFormMessage('');
                setFormMessageColor('');
            }, 4000);
        }
    }, [formMessage]);

    return (
        <div className="site-page-content">
            <div className="header">
                <h1>Contact</h1>
                <div className="socials">
                    <SocialBox icon={ghIcon} link={'https://github.com/DNXEMPIRE-1'} />
                    <SocialBox icon={figma} link={'https://www.figma.com/@dnxempire'} />
                    <SocialBox icon={inIcon} link={'https://www.linkedin.com/in/dennisnzioki/'} />
                    <SocialBox icon={twitterIcon} link={'https://www.instagram.com/denno_dnx/'} />
                </div>
            </div>
            <div className="text-block">
                <p>
                    I am currently employed, however if you have any opportunities, feel free to reach out - I would love to chat! You can reach me via my personal email, or fill out the form below!
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:dennisnzioki019@gmail.com">dennisnzioki019@gmail.com</a>
                </p>

                <form onSubmit={submitForm} className="form">
                    <label>
                        <p>
                            {!name && <span className="star">*</span>}
                            <b>Your name:</b>
                        </p>
                    </label>
                    <input
                        className="formItem"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>
                        <p>
                            {!validateEmail(email) && <span className="star">*</span>}
                            <b>Email:</b>
                        </p>
                    </label>
                    <input
                        className="formItem"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>
                        <p>
                            <b>Company (optional):</b>
                        </p>
                    </label>
                    <input
                        className="formItem"
                        type="company"
                        name="company"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <label>
                        <p>
                            {!message && <span className="star">*</span>}
                            <b>Message:</b>
                        </p>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="formItem"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="buttons">
                        <button
                            className="site-button"
                            type="submit"
                            disabled={!isFormValid || isLoading}
                        >
                            {!isLoading ? 'Send Message' : <p className="loading">Sending</p>}
                        </button>
                        <div className="formInfo">
                            <p style={{ color: formMessageColor }}>
                                <b>
                                    <sub>
                                        {formMessage
                                            ? `${formMessage}`
                                            : ' All messages get forwarded straight to my personal email'}
                                    </sub>
                                </b>
                            </p>
                            <p>
                                <sub>
                                    {!isFormValid ? (
                                        <span>
                                            <b className="star">*</b> = required
                                        </span>
                                    ) : (
                                        '\xa0'
                                    )}
                                </sub>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

export default Contact;
