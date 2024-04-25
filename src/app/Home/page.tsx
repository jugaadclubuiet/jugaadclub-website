import React from "react";
import { HeroPage } from "@/components/ComponentExporter";

const Home = () => {
  return (
    <div style={{
      backgroundImage: `url('/bg.jpg')`,
      backgroundAttachment:"fixed",
      backgroundRepeat: 'no-repeat',
    }}>
      <HeroPage />
    </div>
  );
};
export default Home;
