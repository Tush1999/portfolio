const EXPERIENCES = [
  {
    title: "SDE2 - Full-Stack Developer",
    company: "Fynd",
    companyUrl: "https://www.fynd.com",
    location: "Mumbai, India",
    duration: "Nov 2025 - Present",
    highlights: [
      "Architected and shipped AI-powered video and image generation features on Pixelbin by integrating multiple LLM APIs into a React.js frontend with real-time preview and editing workflows.",
      "Engineered backend API endpoints in Node.js to handle model orchestration, file processing, and async job queues for scalable content generation.",
      "Collaborated with product and design teams to define UX patterns for AI-generated content, ensuring intuitive user flows and fast iteration cycles.",
      "Implemented end-to-end error handling and loading states across the AI pipeline to maintain a smooth user experience under varying API response times.",
    ],
  },
  {
    title: "Senior Software Engineer - Frontend",
    company: "Vinsol Pvt Ltd",
    companyUrl: "https://www.vinsol.com",
    location: "New Delhi, India",
    duration: "Jul 2021 - Nov 2025",
    highlights: [
      <>
        Developed and maintained frontend features for high-traffic e-commerce
        platforms (
        <a href="https://www.bystadium.com" target="_blank" rel="noreferrer">
          bystadium.com
        </a>
        ,{" "}
        <a href="https://www.snackmagic.com" target="_blank" rel="noreferrer">
          snackmagic.com
        </a>
        ,{" "}
        <a href="https://www.swagmagic.com" target="_blank" rel="noreferrer">
          swagmagic.com
        </a>
        ) handling complex order workflows, payment integrations, and dynamic
        product pages.
      </>,
      "Established a micro-frontend system with a TurboRepo monorepo setup, cutting build creation time by 66% and enabling independent deployments across teams.",
      "Leveraged Next.js Server Components to improve Cumulative Layout Shift (CLS) by 98.75%, significantly boosting Core Web Vitals and SEO rankings.",
      "Applied modular SCSS architecture with PurgeCSS to reduce production bundle size by 40%, improving page load performance across mobile and desktop.",
      "Integrated Prismic as a headless CMS, building reusable content slices and connecting backend services through REST and GraphQL APIs for dynamic page rendering.",
      "Deployed Sentry for real-time error tracking, performance monitoring, and alerting in production, reducing the mean time to detect issues by over 60%.",
      "Built a 3D interactive product visualization using React Three Fiber, rendering courier box models with dynamic data to boost user engagement on product pages.",
      "Configured FusionAuth for user authentication and implemented Single Sign-On (SSO) across multiple platforms, streamlining the login experience for 50,000+ users.",
      "Mentored three junior developers through code reviews, pair programming sessions, and architecture discussions, helping them ramp up on React and Next.js best practices.",
    ],
  },
];

const Career = () => {
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
            {EXPERIENCES.map(
              ({ title, company, companyUrl, location, duration, highlights }) => (
                <li key={`${company}-${title}`}>
                  <div>
                    <div className="profile-title">{title}</div>
                    <div>
                      <a href={companyUrl} target="_blank" rel="noreferrer">
                        {company}
                      </a>
                      <span className="company-location">{location}</span>
                    </div>
                    <div>{duration}</div>
                  </div>
                  <ul>
                    {highlights.map((highlight, index) => (
                      <li key={`${company}-highlight-${index}`}>{highlight}</li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Career;
