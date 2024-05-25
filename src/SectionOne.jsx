import React, { useEffect, useState } from "react";

export const SectionOne = ({ showOtherDiv, setShowOtherDiv }) => {

    const handleCloseOverlay = () => {
        setShowOtherDiv(false);
      };

    return (
        <section className="section one">
            <div className="navigation">
                <div className="navigation-left" >
                  <h1 className="description black navigation-text" >Ikaika</h1>
                </div>
                <div className="navigation-right" />
            </div>

            {showOtherDiv && (
                <div className="overlay-div">
                    <button onClick={handleCloseOverlay}>Close</button>
                </div>
            )}

        </section>
    )
}