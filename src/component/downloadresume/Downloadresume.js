import React from "react";
import pdf from "../../assets/soham-k-Pabrekar-CV.pdf";
import coverletter from "../../assets/SKP-CoverLetter.pdf";

const Downloadresume = () => {
  return (
    <>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>
          Download Resume
        </b>
      </p>
      <a
        href={pdf}
        rel="noopener noreferrer"
        target="_blank"
        className="w3-button w3-black w3-round-large"
      >
        Soham K Pabrekar Resume
      </a>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>
          Download Cover Letter
        </b>
      </p>
      <a
        href={coverletter}
        rel="noopener noreferrer"
        target="_blank"
        className="w3-button w3-black w3-round-large"
      >
        Soham K Pabrekar Cover Letter
      </a>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>
          Portfolio Links
        </b>
      </p>
      <a
        href="https://www.instagram.com/sohumsangitakrishnakant"
        rel="noopener noreferrer"
        target="_blank"
        className="w3-button w3-black w3-round-large "
      >
        Instagram
      </a>
      <a
        href="https://www.youtube.com/@SooThatFilms"
        rel="noopener noreferrer"
        target="_blank"
        className="w3-button w3-black w3-round-large w3-margin-left"
      >
        YouTube
      </a>
      <a
        href="https://www.instagram.com/soothatfilms"
        rel="noopener noreferrer"
        target="_blank"
        className="w3-button w3-black w3-round-large  w3-margin-left"
      >
        Instagram
      </a>
    </>
  );
};

export default Downloadresume;
