import { IoCloudDownloadOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

import userImg from "../assets/shikha.jpeg";

const Home = () => {
  return (
    <div className="page-container align-center">
      <div className="user-container container">
        <div className="user-details">
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I am Shikha Bansal",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I am Web Designer",
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
          I have 6 years of experience in building and designing applications, specializing in web design. Proficient in Agile methodologies, with a track record of leading successful projects and delivering optimized solutions.


          </div>
          <a href="/shikha_resume.pdf" download>
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
