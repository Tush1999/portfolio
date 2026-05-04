import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { MdHtml } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const TECH_STACK_LIST = [
  {
    label: "React",
    desc: "Frontend Application Library",
    icon: <FaReact />,
  },
  {
    label: "JavaScript",
    desc: "Scripting Language",
    icon: <IoLogoJavascript />,
  },
  {
    label: "Redux",
    desc: "State Management",
    icon: <SiRedux />,
  },
  {
    label: "NextJs",
    desc: "Frontend Application Library",
    icon: <RiNextjsLine />,
  },
  {
    label: "TypeScript",
    desc: "Typed superset of JavaScript",
    icon: <TbBrandTypescript />,
  },
  {
    label: "HTML/CSS",
    desc: "Describes how HTML elements should be displayed",
    icon: <MdHtml />,
  },
  {
    label: "GraphQL",
    desc: "Query Language",
    icon: <GrGraphQl />,
  },
  {
    label: "NodeJs",
    desc: "JavaScript Runtime Environment",
    icon: <FaNodeJs />,
  },
  {
    label: "Github",
    desc: "Version Control System",
    icon: <FaGithub />,
  },
];

const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="career-heading">About. Skills. Social.</h1>
        <div className="about">
          <h5 className="mt4 mb2">Bio</h5>
          <p>
            Experienced Frontend Developer with a demonstrated history of
            working in the information technology and product company. Skilled
            in ReactJS, Redux, Next JS, and other modern web technologies, I
            have successfully led teams to implement solutions that enhance user
            experience and meet project requirements. Proven ability to
            collaborate with cross-functional teams, including product
            management, to gather requirements and provide valuable insights for
            product improvement.
          </p>
          <h5 className="mt4 mb2">Skill</h5>
          <ul className="tech-stack-container">
            {TECH_STACK_LIST.map(({ label, desc, icon }) => (
              <li key={label}>
                <div> {icon}</div>

                <div className="tech-stack-label">
                  <div>{label}</div>
                  <span>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
