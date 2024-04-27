import React from "react";
import { AboutPage } from "@/components/ComponentExporter";

const About = () => {
  return (
    <div style={{
      backgroundImage: `url('/bgImg.png')`,
      backgroundAttachment:"fixed",
      backgroundRepeat: 'no-repeat',
    }}>
      <AboutPage />
    </div>
  );
};
export default About;
