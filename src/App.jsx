import './App.css'

function App() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-symbol">
            <span />
          </span>
          <span>NAUFAL.S<span className="accent"></span></span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#domains">Domains</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
          <a href="#research">Research</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect <span>↗</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section" id="about">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            ECE STUDENT <span className="separator">/</span> GEC HASSAN
          </div>

          <p className="eyebrow">
            WELCOME TO MY ENGINEERING UNIVERSE
          </p>

          <h1>
            Engineering
            <br />
            <span className="accent">Beyond</span> Limits<span className="accent">.</span>
          </h1>

          <p className="hero-description">
            I'm Naufal, an Electronics and Communication Engineering
            student exploring semiconductor technology, VLSI design,
            embedded systems, AI hardware and intelligent electronics.
            I believe in learning by building, experimenting and innovating.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#journey" className="secondary-button">
              My Learning Journey <span>→</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>ECE · BATCH 2028</span>
            <span>LEARN. BUILD. INNOVATE.</span>
          </div>
        </div>

        {/* ECE PROCESSOR VISUAL */}
        <div className="hero-visual">
          <div className="visual-top-label">
            <span className="status-dot"></span>
            SYSTEM ARCHITECTURE
          </div>

          {/* Circuit connection lines */}
          <svg
            className="circuit-lines"
            viewBox="0 0 600 600"
            aria-hidden="true"
          >
            <g className="circuit-paths">
              <path d="M300 300 L300 70 L420 70 L420 120" />
              <path d="M300 300 L520 300 L520 210" />
              <path d="M300 300 L300 520 L180 520 L180 460" />
              <path d="M300 300 L80 300 L80 190" />
              <path d="M300 300 L450 450 L510 450" />
              <path d="M300 300 L150 150 L90 150" />
            </g>

            <g className="circuit-nodes">
              <circle cx="420" cy="120" r="5" />
              <circle cx="520" cy="210" r="5" />
              <circle cx="180" cy="460" r="5" />
              <circle cx="80" cy="190" r="5" />
              <circle cx="510" cy="450" r="5" />
              <circle cx="90" cy="150" r="5" />
            </g>
          </svg>

          {/* Orbit rings */}
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          {/* Central processor */}
          <div className="processor">
            <div className="processor-pins"></div>

            <div className="processor-inner">
              <div className="processor-symbol">N</div>
              <span className="processor-name">ECE CORE</span>
              <small>ENGINEERING SYSTEM</small>
            </div>
          </div>

          {/* Floating domain labels */}
          <div className="orbit-label label-one">
            <span className="label-icon">▦</span>
            <span>VLSI DESIGN</span>
          </div>

          <div className="orbit-label label-two">
            <span className="label-icon">⌁</span>
            <span>SIGNAL PROCESSING</span>
          </div>

          <div className="orbit-label label-three">
            <span className="label-icon">⌘</span>
            <span>EMBEDDED SYSTEMS</span>
          </div>

          <div className="orbit-label label-four">
            <span className="label-icon">∿</span>
            <span>AI HARDWARE</span>
          </div>

          {/* Signal waveform */}
          <div className="signal-panel">
            <span>LIVE SIGNAL</span>
            <svg viewBox="0 0 180 45" aria-hidden="true">
              <path
                d="M0 23 H20 L28 23 L36 8 L44 38 L52 15 L60 23 H78 L86 23 L94 5 L102 40 L110 18 L118 23 H140 L148 23 L156 12 L164 34 L172 23 H180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="visual-bottom-label">
            <span>PROCESSOR STATUS</span>
            <span className="accent">ONLINE ●</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* ENGINEERING DOMAINS */}
      <section className="domains-section" id="domains">
        <div className="section-heading">
          <p className="eyebrow">WHAT I'M EXPLORING</p>
          <h2>
            Engineering <span className="accent">Domains</span>
          </h2>
          <p className="section-description">
            Exploring the technologies shaping the future of electronics.
          </p>
        </div>

        <div className="domain-grid">
          <article className="domain-card">
            <span className="card-number">01 / SEMICONDUCTORS</span>
            <h3>VLSI & Chip Design</h3>
            <p>
              Digital logic, RTL design, semiconductor technology,
              verification and hardware architecture.
            </p>
          </article>

          <article className="domain-card">
            <span className="card-number">02 / COMPUTING</span>
            <h3>Embedded Systems</h3>
            <p>
              Microcontrollers, firmware, computer interfaces,
              real-time systems and intelligent devices.
            </p>
          </article>

          <article className="domain-card">
            <span className="card-number">03 / INTELLIGENCE</span>
            <h3>AI Hardware</h3>
            <p>
              TinyML, edge AI, neural network acceleration
              and efficient intelligent computing.
            </p>
          </article>

          <article className="domain-card">
            <span className="card-number">04 / COMMUNICATION</span>
            <h3>Signals & Communication</h3>
            <p>
              Analog and digital communication, DSP,
              RF systems and signal analysis.
            </p>
          </article>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">BUILD · EXPERIMENT · INNOVATE</p>
          <h2>My Engineering <span className="accent">Projects</span></h2>
          <p className="section-description">
            Exploring engineering through practical projects,
            experimentation and real-world problem solving.
          </p>
        </div>

        <div className="project-grid">

          {/* Project 1 */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-number">01 / ENERGY</span>
              <span className="project-status">PROJECT</span>
            </div>

            <div className="project-visual energy-visual">
              <span>⚡</span>
            </div>

            <div className="project-info">
              <h3>Generation of Power Using Piezoelectric Effect</h3>
              <p>
                Exploring electrical energy generation from mechanical
                pressure and vibrations using piezoelectric materials.
              </p>

              <div className="project-tags">
                <span>Piezoelectricity</span>
                <span>Energy Harvesting</span>
                <span>Electronics</span>
              </div>
            </div>

            <details className="project-details">
              <summary>View Project Details ↗</summary>
              <div className="project-details-content">
                <h4>Project Overview</h4>
                <p>
                  This project explores converting mechanical pressure and
                  vibrations into electrical energy through the piezoelectric effect.
                </p>

                <h4>Engineering Concepts</h4>
                <ul>
                  <li>Piezoelectric effect</li>
                  <li>Energy harvesting</li>
                  <li>Electrical signal measurement</li>
                  <li>Power conditioning concepts</li>
                </ul>

                <p className="detail-note">
                  Prototype photographs and technical documentation will be added.
                </p>
              </div>
            </details>
          </article>

          {/* Project 2 */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-number">02 / ROBOTICS</span>
              <span className="project-status">PROJECT</span>
            </div>

            <div className="project-visual robo-visual">
              <span>⚽</span>
            </div>

            <div className="project-info">
              <h3>Robo Soccer</h3>
              <p>
                A robotics project focused on developing a soccer-playing
                robot, exploring robot movement, motor control and
                embedded-system concepts.
              </p>

              <div className="project-tags">
                <span>Robotics</span>
                <span>Motor Control</span>
                <span>Embedded Systems</span>
              </div>

              <p className="project-highlight">
                Research paper related to this project.
              </p>
            </div>

            <details className="project-details">
              <summary>View Project Details ↗</summary>
              <div className="project-details-content">
                <h4>Project Overview</h4>
                <p>
                  A robotics project focused on a robot designed for soccer-based
                  challenges, exploring movement and control.
                </p>

                <h4>Engineering Concepts</h4>
                <ul>
                  <li>Robot movement and control</li>
                  <li>Motor control</li>
                  <li>Embedded systems</li>
                  <li>Robotics integration</li>
                </ul>

                <h4>Research Work</h4>
                <p>
                  A research paper related to this project is part of my
                  academic research work.
                </p>

                <p className="detail-note">
                  Research paper PDF and project photographs can be added here.
                </p>
              </div>
            </details>
          </article>

          {/* Project 3 */}
          <article className="project-card featured-project">
            <div className="project-top">
              <span className="project-number">03 / HEALTHCARE IOT</span>
              <span className="project-status active-status">
                CURRENTLY WORKING
              </span>
            </div>

            <div className="project-visual healthcare-visual">
              <span>＋</span>
            </div>

            <div className="project-info">
              <h3>
                IVIGILENCE – IoT-Based Intravenous Drip Monitoring
                System Integrated with Voice-Controlled Wheelchair
                Cum Stretcher
              </h3>

              <p>
                A healthcare-focused project under NAIN 2.0 that
                integrates IoT-based intravenous drip monitoring
                with a voice-controlled wheelchair-cum-stretcher.
              </p>

              <div className="project-tags">
                <span>NAIN 2.0</span>
                <span>IoT</span>
                <span>Healthcare</span>
                <span>Voice Control</span>
                <span>Embedded Systems</span>
              </div>
            </div>
          </article>

        </div>

        <details className="project-details">
          <summary>View Project Details ↗</summary>
          <div className="project-details-content">
            <h4>Project Overview</h4>
            <p>
              IVIGILENCE is a NAIN 2.0 project combining an IoT-based
              intravenous drip monitoring system with a voice-controlled
              wheelchair-cum-stretcher.
            </p>

            <h4>Project Components</h4>
            <ul>
              <li>Intravenous drip monitoring</li>
              <li>IoT-based monitoring system</li>
              <li>Voice-controlled mobility assistance</li>
              <li>Wheelchair-cum-stretcher integration</li>
            </ul>

            <h4>Development</h4>
            <p>
              Currently under development as part of NAIN 2.0.
            </p>

            <p className="detail-note">
              Hardware architecture, circuit diagrams, prototype
              photographs and test results will be added as development progresses.
            </p>
          </div>
        </details>
      </section>

      {/* RESEARCH AND CONFERENCES */}
      <section className="research-section" id="research">
        <div className="section-heading">
          <p className="eyebrow">BEYOND THE CLASSROOM</p>
          <h2>Research & <span className="accent">Conferences</span></h2>
          <p className="section-description">
            Exploring research, sharing technical work and
            participating in academic conferences.
          </p>
        </div>

        <div className="research-grid">
          <article className="research-card">
            <span className="research-icon">01</span>
            <p className="eyebrow">RESEARCH WORK</p>
            <h3>Robo Soccer Research Paper</h3>
            <p>
              Research paper based on the Robo Soccer project,
              documenting the technical work and project concepts.
            </p>
            <span className="research-label">Research Paper</span>
          </article>

          <article className="research-card">
            <span className="research-icon">02</span>
            <p className="eyebrow">ACADEMIC PARTICIPATION</p>
            <h3>International Conference</h3>
            <p>
              Attended an International Conference held at
              K.R. Pet Engineering College.
            </p>
            <span className="research-label">
              Conference Participation
            </span>
          </article>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="journey-section" id="journey">
        <div className="section-heading">
          <p className="eyebrow">THE PROCESS MATTERS</p>
          <h2>
            My Engineering <span className="accent">Journey</span>
          </h2>
        </div>

        <div className="journey-content">
          <div>
            <span className="card-number">2024 — 2028</span>
            <h3>Learning today. Engineering tomorrow.</h3>
          </div>

          <p>
            Documenting my progress from electronics fundamentals
            to advanced engineering concepts, practical projects,
            VLSI design and research. Every experiment, challenge
            and milestone is part of this journey.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer className="contact-section" id="contact">
        <div className="contact-content">

          <p className="eyebrow">CONTACT</p>

          <h2>
            Get in <span className="accent">Touch.</span>
          </h2>

          <p className="contact-description">
            Feel free to connect with me.
          </p>

          <div className="contact-links">

            {/* EMAIL */}
            <a
              href="mailto:naufal.s017@gmail.com"
              className="contact-card"
            >
              <span className="contact-icon">✉</span>
              <span>
                <small>EMAIL</small>
                <strong>naufal.s017@gmail.com</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Naufal-S"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">⌘</span>
              <span>
                <small>GITHUB</small>
                <strong>GitHub</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/naufal-s017"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">in</span>
              <span>
                <small>LINKEDIN</small>
                <strong>LinkedIn</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NAUFAL.S</span>
          <span>DESIGNED & BUILT FROM SCRATCH</span>
          <a href="#about">BACK TO TOP ↑</a>
        </div>
      </footer>

    </main>
  )
}

export default App