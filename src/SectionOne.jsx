import React, { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';

export const SectionOne = ({ showOverlayOne, setShowOverlayOne, showOverlayTwo, setShowOverlayTwo, showOverlayThree, setShowOverlayThree, showOverlayFour, setShowOverlayFour, showOverlayFive, setShowOverlayFive, showOverlaySix, setShowOverlaySix }) => {

    const closeOverlayOne = () => {
        setShowOverlayOne(false);
      };

      const closeOverlayTwo = () => {
        setShowOverlayTwo(false);
      };

      const closeOverlayThree = () => {
        setShowOverlayThree(false);
      };

      const closeOverlayFour = () => {
        setShowOverlayFour(false);
      };

      const closeOverlayFive = () => {
        setShowOverlayFive(false);
      };

      const closeOverlaySix = () => {
        setShowOverlaySix(false);
      };

      const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

    return (
        <section className="section one">
            <div className="navigation">
                <div className="navigation-left" >
                  <h1 className="description black navigation-text" >Ikaika</h1>
                </div>
                <div className="navigation-right" />
            </div>

            <CSSTransition
                in={ showOverlayOne }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayOne ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text black" >Entrepreneur, Advisor, Angel | Former Founder and VC. </h1>
                        <button className="overlay-close-button" onClick={closeOverlayOne}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="about-content" >
                        <div className="about-content-text" >
                            <h1 className="overlay-description black" >Hello! I’m Oli from London. An LSE alum with a background in Philosophy and Economics, I cut my teeth in startups both as a founder and operator. I later delved into behavioural finance at an award winning global equity fund and then onto venture capital as an early stage investor. Most recently I’ve been working with innovative technology companies as they scale. I love slick UI, both personally and professionally, and am passionate about promoting innovation and improving efficiency. Outside of work, I'm happiest on the water, enjoying good food, and staying active — usually with my dog by my side. </h1>
                        </div>
                        <div className="about-portrait" />
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayTwo }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayTwo ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >As seen in/at</h1>
                        <button className="overlay-close-button" onClick={closeOverlayTwo}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="seen-in-content" >
                        <h1 className="overlay-description black" >I've had the privilege of joining industry leaders in discussion, sharing my insights at conferences, on podcasts and in media interviews. Including:</h1>
                        <div className="logos">
                            <div className="logos-slide">
                                <img src="./i2.png" />
                                <img src="./i3.png" />
                                <img src="./i4.png" />
                                <img src="./i5.png" />
                                <img src="./i6.png" />
                                <img src="./i7.png" />
                            </div>

                            <div className="logos-slide">
                                <img src="./i2.png" />
                                <img src="./i3.png" />
                                <img src="./i4.png" />
                                <img src="./i5.png" />
                                <img src="./i6.png" />
                                <img src="./i7.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayThree }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayThree ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Investment and advisory</h1>
                        <button className="overlay-close-button" onClick={closeOverlayThree}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="seen-in-content" >
                        <h1 className="overlay-description black" >I’m passionate about supporting emerging and dynamic businesses with operational, financial, and strategic support. I’m particularly excited to work with innovative founders building companies reimagining digital lifestyle.</h1>
                        <div className="logos">
                            <div className="logos-slide">
                                <img src="./i8.png" />
                                <img src="./i9.png" />
                                <img src="./i10.png" />
                                <img src="./i11.png" />
                                <img src="./i12.png" />
                                <img src="./i13.png" />
                                <img src="./i14.png" />
                                <img src="./i15.png" />
                                <img src="./i16.png" />
                            </div>

                            <div className="logos-slide">
                                <img src="./i8.png" />
                                <img src="./i9.png" />
                                <img src="./i10.png" />
                                <img src="./i11.png" />
                                <img src="./i12.png" />
                                <img src="./i13.png" />
                                <img src="./i14.png" />
                                <img src="./i15.png" />
                                <img src="./i16.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayFour }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayFour ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Resource Sandbox</h1>
                        <button className="overlay-close-button" onClick={closeOverlayFour}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="resource-content" >
                        <h1 className="overlay-description black" >Some of my favourite reads, listens and references</h1>
                        <div className="resource-icons" >
                            <div className="row" >
                                <div className="resource-icon-box" >
                                    <i class="fa-solid fa-book"></i>
                                    <h1 className="overlay-small-description black" >Books</h1>
                                </div>
                                <div className="resource-icon-box" >
                                    <i class="fa-solid fa-podcast"></i>
                                    <h1 className="overlay-small-description black" >Podcasts</h1>
                                </div>
                                <div className="resource-icon-box" >
                                    <i class="fa-solid fa-handshake"></i>
                                    <h1 className="overlay-small-description black" >Fundraising</h1>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="resource-icon-box" >
                                    <i class="fa-solid fa-gears"></i>
                                    <h1 className="overlay-small-description black" >Operating</h1>
                                </div>
                                <div className="resource-icon-box" >
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <h1 className="overlay-small-description black" >References</h1>
                                </div>
                                <div className="resource-icon-box" >
                                    <i class="fa-solid fa-puzzle-piece"></i>
                                    <h1 className="overlay-small-description black" >Other</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayFive }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayFive ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Startup Playground</h1>
                        <button className="overlay-close-button" onClick={closeOverlayFive}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="about-content" >
                        <h1 className="overlay-description black" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor. Diam vel quam elementum pulvinar etiam non quam lacus. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Amet mauris commodo quis imperdiet massa tincidunt nunc. Id donec ultrices tincidunt arcu. Commodo elit at imperdiet dui. Lacus luctus accumsan tortor posuere ac ut consequat. Aenean euismod elementum nisi quis eleifend quam. Nulla malesuada pellentesque elit eget. Nisi est sit amet facilisis magna etiam tempor orci. Tellus in metus vulputate eu. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. A condimentum vitae sapien pellentesque. Accumsan tortor posuere ac ut consequat. Consectetur adipiscing elit duis tristique.</h1>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlaySix }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlaySix ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Contact</h1>
                        <button className="overlay-close-button" onClick={closeOverlaySix}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="contact-content" >
                        <div className="row" >
                            <div onClick={() => handleClick('https://x.com/home')} className="contact-icon-box" >
                                <i class="fa-brands fa-linkedin"></i>
                                <h1 className="overlay-small-description black" >LinkedIn</h1>
                            </div>
                            <div onClick={() => handleClick('https://x.com/home')}  className="contact-icon-box" >
                                <i class="fa-brands fa-twitter"></i>
                                <h1 className="overlay-small-description black" >Twitter</h1>
                            </div>
                            <div onClick={() => handleClick('https://x.com/home')}  className="contact-icon-box" >
                                <i class="fa-brands fa-instagram"></i>
                                <h1 className="overlay-small-description black" >Instagram</h1>
                            </div>
                        </div>
                        <div className="row" >
                            <div onClick={() => handleClick('https://x.com/home')}  className="contact-icon-box" > 
                                <i class="fa-brands fa-youtube"></i>
                                <h1 className="overlay-small-description black" >YouTube</h1>
                            </div>
                            <div onClick={() => handleClick('https://x.com/home')}  className="contact-icon-box" >
                                <i class="fa-solid fa-envelope"></i>
                                <h1 className="overlay-small-description black" >Email</h1>
                            </div>
                            <div onClick={() => handleClick('https://x.com/home')}  className="contact-icon-box" >
                                <i class="fa-brands fa-facebook"></i>
                                <h1 className="overlay-small-description black" >Facebook</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

        </section>
    )
}