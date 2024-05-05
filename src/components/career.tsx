import { Link } from "react-router-dom";

const SITE_LINKS = [
  {
    label: "bystadium.com",
    route: "https://www.bystadium.com",
  },
  {
    label: "snackmagic.com",
    route: "https://www.snackmagic.com",
  },
  {
    label: "swagmagic.com",
    route: "https://www.swagmagic.com",
  },
  {
    label: "superiordishes.com",
    route: "https://www.superiordishes.com",
  },
];

const Career = () => {
  const siteLinks = (
    <>
      {SITE_LINKS.map(({ label, route }, index) => (
        <>
          <Link to={route} target="_blank">
            {label}
          </Link>
        </>
      ))}
    </>
  );
  return (
    <div className="page-container">
      <div className="container">
        <div>
          <h1 className="career-heading">Work. Quests. More.</h1>
          <p className="career-desc">
            I thrive on exploring new technologies while gaining proficiency in
            those I’ve used, all the while enforcing foundational concepts.
          </p>
          <h5 className="work-experience-title">Work Experience</h5>
          <ol className="work-experience-list-container">
            <li>
              <div>
                <div className="profile-title">Senior Software Engineer</div>
                <div>
                  <a href="https://www.vinsol.com" target="_blank">
                    Vinsol Pvt Ltd
                  </a>
                  <span className="company-location">New Delhi, India</span>
                </div>
                <div>October 2023-Present 4mos</div>
              </div>
              <ul>
                <li>
                  Currently managing and developing multiple websites including{" "}
                  <Link to="https://www.bystadium.com" target="_blank">
                    bystadium.com
                  </Link>{" "}
                  ,
                  <Link to="https://www.snackmagic.com" target="_blank">
                    snackmagic.com
                  </Link>
                  ,{" "}
                  <Link to="https://www.swagmagic.com" target="_blank">
                    swagmagic.com
                  </Link>,{" "}
                  <Link to="https://www.superiordishes.com" target="_blank">
                    superiordishes.com
                  </Link>.
                </li>
                <li>
                  Collaborating effectively with cross-functional teams to
                  deliver impactful features.
                </li>
                <li>
                  Create a micro frontend architecture to ensure fast website
                  performance.
                </li>
                <li>Integrated Prismic as headless CMS for the website.</li>
                <li>
                  Integrated backend APIs using REST or GraphQL for data
                  retrieval and manipulation.
                </li>
                <li>
                  Conducted code reviews to ensure code quality and adherence to
                  best practices.
                </li>
                <li>
                  Worked with project managers to prioritize tasks and meet
                  project deadlines.
                </li>
                <li>
                  {" "}
                  Provided technical guidance and mentorship to junior
                  developers
                </li>
                <li>
                  Participated in team meetings and discussions to improve
                  development processes and strategies.
                </li>
              </ul>
            </li>
            <li>
              <div>
                <div className="profile-title">Research Intern</div>
                <div>
                  <a href="https://www.vinsol.com" target="_blank">
                    IIT Bombay
                  </a>
                  <span className="company-location">India</span>
                </div>
                <div>December 2019-Present 4mos</div>
              </div>
              <div className="mt10">
                Conducted quantitative research, developing skills in data
                analysis and Excel. Contributed to cutting-edge research
                projects that have real-world applications.
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Career;
