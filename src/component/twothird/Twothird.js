import React from "react";
import Workexp from "../workexps/Workexps";
import Education from "../education/Education";
import Achievements from "../achievements/Achievements";

const Twothird = ({ resume }) => {
  return (
    <>
      <div className="w3-twothird">
        <Workexp resume={resume} />
        <Education resume={resume} />
        <Achievements resume={resume} />
      </div>
    </>
  );
};

export default Twothird;
