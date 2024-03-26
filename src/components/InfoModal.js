import React, { useEffect, useRef } from "react";
import "../TimelineMindmap.css";
import InfoBox from "./InfoBox";

function InfoModal({ isOpen, closeModal, modalContent }) {
  const modalRef = useRef(null);

  // Function to close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // To Check if the clicked element is outside the modal content
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Close the modal
        closeModal();
      }
    };

    // Add event listener for mousedown event
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content" ref={modalRef}>
          <h2 className="modal-heading">{modalContent.label}</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InfoBox />
            <div>
              <p
                style={{
                  fontSize: "18px",
                  padding: "0px 10px",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default InfoModal;
