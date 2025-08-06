import { Link } from "react-router-dom";



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
            <li>
              <div>
                <div className="profile-title">Senior Web Designer</div>
                <div>
                  <a href="https://www.prepladder.com" target="_blank">
                    Prepladder Pvt Ltd
                  </a>
                  <span className="company-location">Chandigarh, India</span>
                </div>
                <div>Sep 2020 - Present </div>
              </div>
              <ul>
  <li>Designed and developed UIs within frontend web frameworks, utilizing templates and tools to expedite development processes.</li>
  <li>Spearheaded the creation of a custom design framework for PrepLadder, featuring pre-styled components, layouts, and helper classes.</li>
  <li>Modularized CSS code to optimize performance by loading only necessary CSS for each page.</li>
  <li>Enhanced page performance by optimizing metrics such as CLS, LCP, and FCP.</li>
  <li>Proficient in HTML, CSS, Sass CSS Preprocessor, Bootstrap, and responsive design for React and Next.js projects.</li>
  <li>Facilitated system integration testing and coordinated user acceptance testing.</li>
  <li>Recommended and implemented design changes for iterative product updates.</li>
  <li><strong>Achievement:</strong> Awarded PrepStar (Employee of the Quarter) for excellent performance in the tech team.</li>
</ul>
            </li>
            <li>
              <div>
                <div className="profile-title">Web Designer</div>
                <div>
                  <a href="https://netzens.com/" target="_blank">
                  Netzens Software
                  </a>
                  <span className="company-location">India</span>
                </div>
                <div>Sep 2018 – Dec 2019</div>
              </div>
              <ul>
  <li>Developed intricate user interfaces for diverse websites and applications using HTML, CSS, Bootstrap, WordPress, and various UI frameworks.</li>
  <li>Collaborated closely with clients to conceptualize and actualize creative ideas, ensuring alignment with project objectives.</li>
  <li>Proficient in graphic design software such as Photoshop and CorelDraw, crafting visually appealing website designs.</li>
  <li>Prepared comprehensive design plans and effectively communicated website structures to stakeholders.</li>
  <li><strong>Achievement:</strong> Recognized with the Employee of the Month award for outstanding performance within the tech team.</li>
</ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Career;
