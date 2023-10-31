import React from "react";
import "./index.scss";

const MobileError = () => {
  return (
    <div className="mobile-error-container d-flex justify-content-center align-items-center">
      <div className="">
        <div class="mobile-error-card">
            
          <div class="bg d-flex align-items-center text-center p-4">Kindly use a pc for the best user experience!</div>
          <div class="blob"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileError;
