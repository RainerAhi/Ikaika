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
                        <h1 className="overlay-navigation-text" >About</h1>
                        <button className="overlay-close-button" onClick={closeOverlayOne}>
                            <i class="fa-solid fa-x"></i>
                        </button>
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
                        <h1 className="overlay-navigation-text" >Invested alongside</h1>
                        <button className="overlay-close-button" onClick={closeOverlayTwo}>
                            <i class="fa-solid fa-x"></i>
                        </button>
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
                        <h1 className="overlay-navigation-text" >As seen in</h1>
                        <button className="overlay-close-button" onClick={closeOverlayThree}>
                            <i class="fa-solid fa-x"></i>
                        </button>
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
                        <h1 className="overlay-navigation-text" >Resources</h1>
                        <button className="overlay-close-button" onClick={closeOverlayFour}>
                            <i class="fa-solid fa-x"></i>
                        </button>
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
                </div>
            </CSSTransition>

        </section>
    )
}