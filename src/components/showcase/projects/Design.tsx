import React from 'react';

import furniture from '../../../assets/pictures/projects/design/furniture.png';
import ecobazar from '../../../assets/pictures/projects/design/ecobazar.png';
import task from '../../../assets/pictures/projects/design/task.png';
import prada from '../../../assets/pictures/projects/design/prada.png';
import sneaker from '../../../assets/pictures/projects/design/sneaker.png';

import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface DesignProjectsProps {}

const DesignProjects: React.FC<DesignProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>UI/UX Design</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development. Art,
                    Design, and Animation will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep the Design side of me alive and grow my UI/UX career.
                    I'm always looking to push myself creatively and learn new
                    things.
                </p>
            </div>
            <div className="text-block">
                <h2>🌟 Furniture eCommerce Website UI 🌟</h2>

                <p>
                    Explore a sleek and modern web page design, featuring a
                    user-friendly interface and high-quality product images. The
                    customizable UI KIT ensures a consistent and beautiful
                    design across the site, making it easy to integrate with
                    your favorite design tools.
                </p>
                <div className="captioned-image">
                    <img src={furniture} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> 🌟 Welcome to my Furniture
                            eCommerce Website! 🌟
                        </sub>
                    </p>
                </div>
                <p>
                    The Interior Landing Page offers stunning visuals and
                    layouts, with prominent call-to-action buttons and
                    feature-rich product showcases. Enjoy a full-page experience
                    with a responsive design that works seamlessly on all
                    devices, fast loading times, and an intuitive, accessible
                    interface. Enhance your online furniture shopping with style
                    and efficiency! 🛋️🛒📱
                </p>
                <h3>File Link:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1331381641303792117/furniture-ecommerce-website-ui"
                        >
                            <p>
                                <b>File</b> - Welcome to my Furniture eCommerce
                                Website!
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>🌿 Ecobazar - Organic eCommerce Shop Website 🌿</h2>
                <p>
                    Welcome to Ecobazar, your go-to destination for all things
                    organic! Dive into a clean, eco-friendly web page design
                    featuring a seamless user experience and vibrant product
                    images. The intuitive UI KIT guarantees a harmonious and
                    cohesive look, perfect for showcasing your favorite organic
                    products.
                </p>
                <div className="captioned-image">
                    <img src={ecobazar} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Shop sustainably and stylishly with
                            Ecobazar! 🍃🛒📱
                        </sub>
                    </p>
                </div>
                <h3>File Link:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1348512198352618529/ecobazar-organic-ecommerce-shop-website"
                        >
                            <p>
                                <b>File</b> - Welcome to Ecobazar, your go-to
                                destination for all things organic!
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>🗂️ Task Management Dashboard 🗂️</h2>
                <p>
                    Welcome to your ultimate Task Management Dashboard, designed
                    for efficiency and productivity! Experience a sleek, modern
                    interface with intuitive navigation and real-time updates.
                    The customizable UI KIT provides a cohesive and functional
                    design, perfect for managing your tasks seamlessly.
                </p>
                <div className="captioned-image">
                    <img src={task} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Stay organized and on top of your
                            tasks with ease! 📋✅📱
                        </sub>
                    </p>
                </div>
                <h3>File Link:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1375949888965696148/task-management-dashboard"
                        >
                            <p>
                                <b>File</b> - Welcome to your ultimate Task
                                Management Dashboard
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>👜 Prada - E-commerce Website and Mobile App 👜</h2>
                <p>
                    Welcome to the Prada e-commerce experience, where luxury
                    meets technology. Explore our sophisticated website and
                    mobile app, designed to offer a seamless and elegant
                    shopping journey. With a sleek and intuitive interface, you
                    can effortlessly browse our high-fashion collections and
                    exclusive products.
                </p>
                <div className="captioned-image">
                    <img src={prada} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Shop in style with Prada! 👗🛍️📱
                        </sub>
                    </p>
                </div>
                <h3>File Link:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1370610603197764617/prada-ecommerce-website-and-mobile-app"
                        >
                            <p>
                                <b>File</b> - Welcome to the Prada e-commerce
                                experience, where luxury meets technology
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>👟 Sneaker Shoe E-commerce App UI 👟</h2>
                <p>
                    Welcome to the ultimate Sneaker Shoe E-commerce App,
                    designed for sneaker enthusiasts! This app features a sleek
                    and modern interface, making it easy to find and purchase
                    the latest and greatest in sneaker fashion.
                </p>
                <div className="captioned-image">
                    <img src={sneaker} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Shop the freshest kicks with ease!
                            🏷️🛒📱
                        </sub>
                    </p>
                </div>
                <h3>File Link:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1362402752696343203/sneaker-shoe-e-commerce-app-ui"
                        >
                            <p>
                                <b>File</b> - Welcome to the ultimate Sneaker
                                Shoe E-commerce App, designed for sneaker
                                enthusiasts!
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>☕ Coffee Shop App UI ☕</h2>
                <p>
                    Welcome to your favorite Coffee Shop App, designed to
                    enhance your coffee experience. Enjoy a sleek and intuitive
                    interface that makes ordering your favorite brew a breeze.
                </p>
                <div className="captioned-image">
                    <img src={coffee} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b>Elevate your coffee experience with convenience and style! ☕📱🛒
                        </sub>
                    </p>
                </div>
                <h3>File Link:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1362402752696343203/sneaker-shoe-e-commerce-app-ui"
                        >
                            <p>
                                <b>File</b> - Welcome to your favorite Coffee Shop App, designed to
                                enhance your coffee experience
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>👟 Sneaker Shoe E-commerce App UI 👟</h2>
                <p>
                    Welcome to the ultimate Sneaker Shoe E-commerce App,
                    designed for sneaker enthusiasts! This app features a sleek
                    and modern interface, making it easy to find and purchase
                    the latest and greatest in sneaker fashion.
                </p>
                <div className="captioned-image">
                    <img src={sneaker} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Shop the freshest kicks with ease!
                            🏷️🛒📱
                        </sub>
                    </p>
                </div>
                <h3>File Link:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1362402752696343203/sneaker-shoe-e-commerce-app-ui"
                        >
                            <p>
                                <b>File</b> - Welcome to the ultimate Sneaker
                                Shoe E-commerce App, designed for sneaker
                                enthusiasts!
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>👟 Sneaker Shoe E-commerce App UI 👟</h2>
                <p>
                    Welcome to the ultimate Sneaker Shoe E-commerce App,
                    designed for sneaker enthusiasts! This app features a sleek
                    and modern interface, making it easy to find and purchase
                    the latest and greatest in sneaker fashion.
                </p>
                <div className="captioned-image">
                    <img src={sneaker} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Shop the freshest kicks with ease!
                            🏷️🛒📱
                        </sub>
                    </p>
                </div>
                <h3>File Link:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.figma.com/community/file/1362402752696343203/sneaker-shoe-e-commerce-app-ui"
                        >
                            <p>
                                <b>File</b> - Welcome to the ultimate Sneaker
                                Shoe E-commerce App, designed for sneaker
                                enthusiasts!
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DesignProjects;