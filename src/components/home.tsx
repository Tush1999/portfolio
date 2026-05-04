import { IoCloudDownloadOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

import userImg from "../assets/user.webp";

const Home = () => {
  return (
    <div className="page-container align-center">
      <div className="user-container container">
        <div className="user-details">
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I am Tushar Bansal",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I am FrontEnd Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "3em",
                display: "inline-block",
                fontWeight: "600",
              }}
              repeat={Infinity}
            />
          </div>
          <div className="user-profile">
            Frontend-focused Full-Stack Developer with hands-on experience
            shipping production web applications using React.js, Next.js,
            TypeScript, and Redux. Skilled at optimizing Core Web Vitals,
            architecting scalable frontend systems, and streamlining CI/CD
            pipelines for faster delivery. Proven ability to lead development
            efforts, mentor junior engineers, and align technical decisions with
            business goals. Recently expanded into AI-powered product
            development, building end-to-end features with LLM API integrations.
          </div>
          <a href="/Tushar CV.pdf" download>
            {" "}
            Resume
            <IoCloudDownloadOutline />
          </a>
        </div>
        <div className="user-image">
          <img src={userImg} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Home;
