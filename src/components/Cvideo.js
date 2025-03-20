import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

const Cvideo = () => {
  return (
    <FadeInOnScroll offset={300}>
      <div style={{ maxWidth: "800px", margin: "auto", padding: "16px" }}>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            title="Embedded Facebook Video"
            width="100%"
            height="100%"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftumuniclm%2Fvideos%2F1233809351100699%2F&show_text=false"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              borderRadius: "1em",
            }}
          />
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default Cvideo;
