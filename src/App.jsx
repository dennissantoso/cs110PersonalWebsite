import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import myLogo from './etc/myLogo.png';
import pythonLogo from './etc/python_logo.png';
import cLogo from './etc/c_logo.png';
import cppLogo from './etc/c++_logo.png';
import javaLogo from './etc/java_logo.png';
import htmlCssJsLogo from './etc/html-css-js_logo.png';
import swiftLogo from './etc/swift_logo.png';
import dartLogo from './etc/dart_logo.png';
import flutterLogo from './etc/flutter_logo.png';
import gitLogo from './etc/git_logo.png';
import androidStudioLogo from './etc/androidStudio_logo.png';
import figmaLogo from './etc/figma_logo.png';
import unrealEngine4Logo from './etc/unrealEngine4_logo.png';
import photoshopLogo from './etc/photoshop_logo.png';
import lightroomLogo from './etc/lightroom_logo.png';
import photosResumeNew from './etc/photosResumeNew.jpg';
import gamestopCover from './etc/gamestop_cover3.png';
import snakeCover from './etc/snakeCover1.png';
import calculatorCover from './etc/calculatorCover.png';
import resume from './RESUME.pdf';
import AMG from './AMG.jsx';

function App() {
  return (
    <div>
      <nav className="navbar navbar-home navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={myLogo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse_content"
            aria-controls="collapse_content"
            aria-expanded="false"
            aria-label="Open Collapse"
          >
            <span className="navbar-toggler-icon mt-2">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="collapse_content">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-hover nav-item">
                <a href="#about" className="nav-link">ABOUT</a>
              </li>
              <li className="nav-hover nav-item">
                <a href="#experiences" className="nav-link">EXPERIENCES</a>
              </li>
              <li className="nav-hover nav-item">
                <a href="#projects" className="nav-link">PROJECTS</a>
              </li>
              <li className="nav-hover nav-item">
                <a href="#footer" className="nav-link">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="main">
        <section id="landing">
          <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-md-6">
                <h2 className="text-white fw-light mb-0">Hello there,</h2>
                <h1 className="text-landing-name">I'm Dennis Santoso.</h1>
                <h4 className="text-white fw-light mt-3">Welcome to my personal website</h4>
                <div className="mt-5">
                  <a href={resume} className="button-link" target="_blank" rel="noopener noreferrer" download="RESUME.pdf">RESUME</a>
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </section>

        <section id="quote">
          <div className="container">
            <h1 className="text-quote">"If you don't come from a rich family, make sure a rich family comes from you.".</h1>
            <h4 className="text-center fw-light">- Unknown -</h4>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="row justify-content-md-around justify-content-center align-items-center">
              <div className="col-11 col-md-5 my-3">
                <img src={photosResumeNew} alt="" className="w-100 img-cover" />
              </div>
              <div className="col-11 col-md-5 my-3">
                <h1 className="text-title mb-3">About Me</h1>
                <p className="text-muted mt-2 fs-5">
                  My name is Dennis Santoso and I am a senior at the University of California, Riverside, working towards a Bachelor's degree in Computer Science.
                  I'm interested in developing web apps and learning new technologies to build unique projects.
                  My professional career prospects include being a Software Engineer, Web Developer, and UI/UX Designer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AMG />

        <section id="skills">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-12 col-11 text-center text-white">
                <h1 className="text-title">
                  Technical Skills
                </h1>
                <hr />
                <div className="mt-5 d-lg-inline-flex">
                  {[
                    { src: pythonLogo, label: 'Python' },
                    { src: cLogo, label: 'C' },
                    { src: cppLogo, label: 'C++' },
                    { src: javaLogo, label: 'Java' },
                    { src: htmlCssJsLogo, label: 'HTML, CSS, Javascript' },
                    { src: swiftLogo, label: 'Swift' },
                    { src: dartLogo, label: 'Dart' },
                    { src: flutterLogo, label: 'Flutter' },
                    { src: gitLogo, label: 'Git' },
                    { src: androidStudioLogo, label: 'Android Studio' },
                    { src: figmaLogo, label: 'Figma' },
                    { src: unrealEngine4Logo, label: 'Unreal Engine 4' },
                    { src: photoshopLogo, label: 'Photoshop' },
                    { src: lightroomLogo, label: 'Lightroom' },
                  ].map(skill => (
                    <div className="me-lg-3 my-3" key={skill.label}>
                      <img src={skill.src} className="img-white mb-2" alt={skill.label} />
                      <br />
                      <small>{skill.label}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coursework">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col-11 text-justify-left">
                <h1 className="text-title">
                    Degrees
                  </h1>
                  <ul className="text-muted">
                  {[
                    { title: 'University of California, Riverside - Bachelor of Computer Science'},
                    { title: 'Saddleback College - Associate of Computer Science' },
                  ].map(course => (
                    <li key={course.title}>
                      <h3>{course.title}</h3>
                    </li>
                  ))}
                  </ul>
                <h1 className="text-title">
                  Relevant Coursework
                </h1>
                <ul className="text-muted">
                  {[
                    { title: 'Introduction to Software Construction (CS100)' },
                    { title: 'Logic Design (CS120A)' },
                    { title: 'Discrete Structures (CS111)' },
                    { title: 'Intermediate Data Structures and Algorithms (CS141)' },
                    { title: 'Automata and Formal Languages (CS150)' },
                    { title: 'Design of Operating Systems (CS153)' },
                    { title: 'Concurrent Programming and Parallel Systems (CS160)' },
                    { title: 'Design and Architecture of Computer Systems (CS161)' },
                    { title: 'Introduction to Artificial Intelligence (CS170)' },
                    { title: 'Project Sequence in Computer Science and Engineering (CS178A&B)' },
                    { title: 'Introduction to Software Engineering (CS180)' },
                    { title: 'Software Testing and Verification (CS182)' },
                    { title: 'Professional Development and Mentoring (ENGR101I)' },
                    { title: 'Technical Communications (ENGR180W)' },
                    { title: 'Engineering Graphics and Design (ME9)' },
                    { title: 'Probability and Statistics for Science and Engineering (STAT155)' },
                  ].map(course => (
                    <li key={course.title}>
                      <h3>{course.title}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col-11 text-justify-left">
                <h1 className="text-title">
                  Experiences
                </h1>
                <ul className="text-muted">
                  {[
                    { title: 'Web Developer Intern at Fortitude Global Foundation', period: 'Sep 2022 - Oct 2023' },
                    { title: 'Front End Developer Intern at LivestockCity', period: 'June 2022 - Sep 2022' },
                    { title: 'Software Engineering Intern at Necessary Behavior', period: 'Jan 2022 - June 2022' },
                    { title: 'Tech Intern at Necessary Behavior', period: 'Sep 2021 - Dec 2021' },
                  ].map(exp => (
                    <li key={exp.title}>
                      <h3>{exp.title} ({exp.period})</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 pt-5 text-center">
              <a href="https://dennissantoso.netlify.app/experiences" className="button-link-black">SEE ALL MY EXPERIENCES</a>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col-11 text-center">
                <h1 className="text-title">
                  Projects
                </h1>
                <hr />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="position-relative img-hover mx-3">
                  <img src={gamestopCover} className="w-100 shadow" alt="Gamestonk Simulator" />
                  <div className="hover-box">
                    <div className="d-inline-flex h-100 justify-content-center align-items-center">
                      <div className="row justify-content-center text-center">
                        <div className="col-12">
                          <h4 className="text-white fw-bold">GAMESTONK SIMULATOR</h4>
                        </div>
                        <div className="col-12 mt-4">
                          <a href="https://dennissantoso.netlify.app/projects/gamestonkapp" className="button-link">PROJECT DETAILS</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-none d-md-block" style={{ height: '100px' }}></div>
                <div className="position-relative img-hover mx-3">
                  <img src={snakeCover} className="w-100 shadow" alt="Snake Game" />
                  <div className="hover-box">
                    <div className="d-inline-flex h-100 justify-content-center align-items-center">
                      <div className="row justify-content-center text-center">
                        <div className="col-12">
                          <h4 className="text-white fw-bold">SNAKE GAME</h4>
                        </div>
                        <div className="col-12 mt-4">
                          <a href="https://dennissantoso.netlify.app/projects/snakegame" className="button-link">PROJECT DETAILS</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="position-relative img-hover mx-3">
                  <img src={calculatorCover} className="w-100 shadow" alt="Calculator App" />
                  <div className="hover-box">
                    <div className="d-inline-flex h-100 justify-content-center align-items-center">
                      <div className="row justify-content-center text-center">
                        <div className="col-12">
                          <h4 className="text-white fw-bold">CALCULATOR APP</h4>
                        </div>
                        <div className="col-12 mt-4">
                          <a href="https://dennissantoso.netlify.app/projects/calculatorapp" className="button-link">PROJECT DETAILS</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5 text-center">
              <a href="https://dennissantoso.netlify.app/projects" className="button-link-black">SEE ALL MY PROJECTS</a>
            </div>
          </div>
        </section>

        <section id="miscellaneous">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col-11 text-justify-left">
                <h1 className="text-title">
                  Miscellaneous
                </h1>
                <ul className="text-muted">
                  {[
                    { title: 'CodePath Students', period: 'Feb 2022 - Sep 2022' },
                    { title: 'Software Engineering Virtual Experience Externship at JPMorgan Chase & Co.', period: 'Aug 2021 - Oct 2021' },
                    { title: 'Hacker’s Choice Winner at HackUCI 2021', period: 'Jan 2021' },
                    { title: '1st Place Winner at NextStep Hacks 2021', period: 'Nov 2021' },
                  ].map(exp => (
                    <li key={exp.title}>
                      <h3>{exp.title} ({exp.period})</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3 className="text-white mb-3">GET IN TOUCH</h3>
                <ul className="p-0 m-0 list-unstyled d-inline-flex justify-content-center">
                  <li className="social-icon">
                    <a href="mailto:13dennissantoso@gmail.com" className="text-decoration-none text-reset" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://www.linkedin.com/in/dennissantoso/" className="text-decoration-none text-reset" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://github.com/dennissantoso" className="text-decoration-none text-reset" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </li>
                </ul>
                <p className="mt-2 text-muted">
                  <a href="#" className="footer-link">HOME</a> |
                  <a href="experiences.html" className="footer-link">EXPERIENCES</a> |
                  <a href="projects.html" className="footer-link">PROJECTS</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="m-0">Copyright &copy; 2022 Dennis Santoso</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
