import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { MdHtml } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { FaGithub, FaFigma, FaCss3, FaSass, FaBootstrap } from "react-icons/fa";
import { SiAdobephotoshop, SiTailwindcss } from "react-icons/si";

const TECH_STACK_LIST = [
{
  label: "HTML",
  desc: "Markup language for structuring web content",
  icon: <MdHtml />
},
{
  label: "Figma",
  desc: "Collaborative design and prototyping tool",
  icon: <FaFigma />
},
{
  label: "Photoshop",
  desc: "Professional image editing and graphic design software",
  icon: <SiAdobephotoshop />
},
{
  label: "CSS",
  desc: "Stylesheet language for web page styling",
  icon: <FaCss3 />
},
{
  label: "SaaS",
  desc: "CSS preprocessor for enhanced styling capabilities",
  icon: <FaSass />
},
{
  label: "Bootstrap",
  desc: "Frontend framework for responsive web development",
  icon: <FaBootstrap />
},
{
  label: "Tailwind",
  desc: "Utility-first CSS framework for rapid UI development",
  icon: <SiTailwindcss />
},
{
  label: "Github",
  desc: "Version control and collaboration platform",
  icon: <FaGithub />
}
]

const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="career-heading">About. Skills. Social.</h1>
        <div className="about">
        <h5 className="mt4 mb2" >Bio</h5>
        <p>Web Designer with 6 years of experience in creating user-centric, conversion-focused designs that drive measurable business growth. Skilled in delivering high-quality solutions in fast-paced environments while ensuring client satisfaction and timely project delivery. Adept at collaborating with cross-functional teams to elevate digital presence and achieve business goals.
        </p>
        <h5 className="mt4 mb2">Skill</h5>
        <ul className="tech-stack-container">{TECH_STACK_LIST.map(({ label, desc, icon }) => (
          <li key={label}>
           <div> {icon}</div>
           
            <div className="tech-stack-label">
              <div>{label}</div>
            <span>{desc}</span>
            </div>
          </li>
        ))}</ul>
        </div>
      </div>
    </div>
  )
}

export default About;