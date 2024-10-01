import React from "react";
import InfoBoxLeft from "../../components/InfoBox/InfoBoxLeft/InfoBoxLeft";
import InfoBoxRight from "../../components/InfoBox/InfoBoxRight/InfoBoxRight";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      {/* Info Box 1: Aligned left */}
      <div className="flex justify-start">
        <InfoBoxLeft />
      </div>

      {/* Info Box 2: Aligned right */}
      <div className="flex justify-end">
        <InfoBoxRight />
      </div>

      {/* Info Box 3: Aligned left */}
      <div className="flex justify-start">
        <InfoBoxLeft />
      </div>

      {/* Info Box 4: Aligned right */}
      <div className="flex justify-end">
        <InfoBoxRight />
      </div>
    </div>
  );
};

export default InfoSection;
