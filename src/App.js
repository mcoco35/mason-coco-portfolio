import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SkillsMatrix from './SkillsMatrix';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerElement = document.querySelector('.app-header');

    if (section && headerElement) {
      const fixedHeaderHeight = headerElement.offsetHeight;
      const additionalPaddingAboveSection = 30;
      const totalOffset = fixedHeaderHeight + additionalPaddingAboveSection;
      const sectionTopRelativeToViewport = section.getBoundingClientRect().top;
      const currentScrollY = window.pageYOffset;
      const sectionDocumentPosition = sectionTopRelativeToViewport + currentScrollY;
      const targetScrollPosition = sectionDocumentPosition - totalOffset;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
      });
    } else if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = useCallback((e, sectionId) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToSection(sectionId);
        });
      });
    } else {
      scrollToSection(sectionId);
    }
  }, [isMobileMenuOpen]);

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>/\\|!@#$%^&*';
    const charArray = chars.split('');
    const fontSize = 14;
    let columns;
    let drops;

    const initMatrix = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Lead character is bright
        ctx.fillStyle = '#00ff41';
        ctx.globalAlpha = 0.9;
        ctx.fillText(text, x, y);

        // Trail characters are dimmer
        if (drops[i] > 1) {
          ctx.fillStyle = '#00cc33';
          ctx.globalAlpha = 0.3;
          ctx.fillText(charArray[Math.floor(Math.random() * charArray.length)], x, y - fontSize);
        }

        ctx.globalAlpha = 1;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(drawMatrix);
    };

    initMatrix();
    drawMatrix();

    const handleResize = () => initMatrix();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'about', title: 'About Me' },
    { id: 'work-history', title: 'Work History' },
    { id: 'education', title: 'Education' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'projects', title: 'Projects' },
    { id: 'arsenal', title: 'Arsenal' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <div className={`App ${isMobileMenuOpen ? 'no-scroll' : ''}`}>
      <header className="app-header">
        <div className="logo">Mason Coco</div>
        <button
          className="mobile-nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
        <nav className={`app-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="app-main">
        <section id="hero" className="hero-section">
          <canvas ref={canvasRef} className="matrix-canvas" />
          <div className="hero-flicker" />
          <div className="hero-content">
            <div className="hero-ascii fade-in-up">
              {'╔══════════════════════════════════════╗'}
            </div>
            <h1 className="glitch-text" data-text="MASON COCO">MASON COCO</h1>
            <div className="hero-ascii fade-in-up delay-02">
              {'╚══════════════════════════════════════╝'}
            </div>
            <div className="typing-wrapper">
              <p className="typing-effect">Cyber Security Systems Engineer</p>
            </div>
            <div className="hero-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">root@mason-coco — bash</span>
              </div>
              <div className="terminal-body">
                <p>{'>'} Initializing kernel modules...</p>
                <p className="delay-1">{'>'} Loading cryptographic engines... <span className="term-success">[OK]</span></p>
                <p className="delay-2">{'>'} Scanning attack surface... <span className="term-warning">[3 vectors found]</span></p>
                <p className="delay-3">{'>'} Bypassing IDS/IPS firewalls... <span className="term-success">[SUCCESS]</span></p>
                <p className="delay-4t">{'>'} Establishing encrypted tunnel... <span className="term-success">[AES-256]</span></p>
                <p className="delay-5">{'>'} Injecting payload into target... <span className="term-success">[CLEAN]</span></p>
                <p className="delay-6">{'>'} Loading user profile: <span className="term-cyan-text">root@mason-coco</span>... <span className="term-success">[OK]</span></p>
                <p className="delay-7">{'>'} <span className="term-success">ACCESS GRANTED</span> — Welcome back, Mason. <span className="cursor-blink">_</span></p>
              </div>
            </div>
            <div className="delay-8">
              <a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')} className="explore-button">
                <span className="btn-bracket">[</span> ENTER SYSTEM <span className="btn-bracket">]</span>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="app-section">
          <div className="section-content">
            <h2>About Me <span className="cursor-blink">_</span></h2>
            <div className="binary-divider">root@mason-coco:~/about# cat bio.txt</div>
            <p>
              I am a cybersecurity professional dedicated to leveraging technology to solve complex challenges.
              My journey began with a strong foundation in software development, where I honed my skills in creating robust, secure applications. I have a passion for quality-first development, ensuring that every line of code is crafted with precision and care.
            </p>
            <p>
              Some of my past projects include in-depth mobile device security (encompassing firmware modification and analysis), the development of AI-integrated applications, and the continuous refinement of web applications like this portfolio.
              This foundation in rigorous development and problem-solving now fuels my increasing focus and passion for System Architecture and Offensive Security. I am eager to apply my creative problem-solving skills and quality-first mindset to these domains, contribute to innovative projects, and help advance technological frontiers.
            </p>
          </div>
        </section>

        <section id="work-history" className="app-section">
          <div className="section-content">
            <h2>Work History <span className="cursor-blink">_</span></h2>
            <div className="binary-divider">root@mason-coco:~/work-history# ./log.sh</div>

            <div className="education-entry">
              <h3>Cyber Security Systems Engineer</h3>
              <p className="institution">Cole Engineering Services Inc.</p>
              <p className="dates">Sep 2025 - Present</p>
              <ul>
                <li>Deployed and maintained network infrastructure across 17 sites and 1,594 devices, ensuring high availability.</li>
                <li>Automated Linux package management and system hardening using Bash and Python, reducing patch times by 40%.</li>
                <li>Resolved Tier 2/3 network connectivity issues across TCP/IP, DNS, BGP, and OSPF in a multi-vendor environment.</li>
                <li>Administered Linux servers via SSH and CLI, managing VMware virtualization resources to support cyber range operations.</li>
              </ul>
            </div>

            <div className="education-entry">
              <h3>Test Lead Engineer</h3>
              <p className="institution">Cole Engineering Services Inc.</p>
              <p className="dates">Oct 2024 - Sep 2025</p>
              <ul>
                <li>Standardized QA workflows by authoring formal SOPs and managing test scripts via Git to ensure repeatable results.</li>
                <li>Mentored a team of engineers on troubleshooting protocols and incident reporting, serving as the technical escalation point.</li>
                <li>Performed network validation using nslookup, ping and MTR to verify TCP/IP integrity and identify latency root causes.</li>
                <li>Tested virtualized environments and infrastructure configurations for cyber exercises to align with customer requirements.</li>
              </ul>
            </div>

            <div className="education-entry">
              <h3>Cyber Operations Teaching Assistant</h3>
              <p className="institution">MIT Beaver Works Summer Institute</p>
              <p className="dates">Jun 2022 - Aug 2024</p>
              <ul>
                <li>Provisioned and administered Linux-based virtual machines for CTF environments, ensuring system uptime for students.</li>
                <li>Delivered technical training on Cyber Operations, simplifying complex encryption and defense concepts to diverse audiences.</li>
                <li>Conducted QA on third-party lab materials to identify and patch configuration vulnerabilities before deployment.</li>
              </ul>
            </div>

            <div className="education-entry">
              <h3>Cyber Security Research Assistant</h3>
              <p className="institution">Colorado State University</p>
              <p className="dates">Apr 2023 - May 2024</p>
              <ul>
                <li>Diagnosed root causes of hardware and software failures on Windows/Linux systems performing repairs and OS re-imaging.</li>
                <li>Collaborated with research teams to analyze OS-level vulnerabilities and document mitigation strategies for attacks.</li>
                <li>Developed C#/Unity VR applications, debugging performance issues to prevent crashes and improve user stability.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="app-section">
          <div className="section-content">
            <h2>Education <span className="cursor-blink">_</span></h2>
            <div className="binary-divider">root@mason-coco:~/education# ls -l</div>
            <div className="education-entry">
              <h3>M.S. Cybersecurity and Information Assurance</h3>
              <p className="institution">Western Governors University - Millcreek, UT</p>
              <p className="dates">Dec 2025</p>
            </div>
            <div className="education-entry">
              <h3>Cybersecurity Bootcamp</h3>
              <p className="institution">University of Colorado - Boulder, CO</p>
              <p className="dates">Mar 2025</p>
            </div>
            <div className="education-entry">
              <h3>B.S. Computer Science</h3>
              <p className="institution">Colorado State University - Fort Collins, CO</p>
              <p className="dates">Aug 2024</p>
            </div>
          </div>
        </section>

        <section id="certifications" className="app-section">
          <div className="section-content">
            <h2>Certifications <span className="cursor-blink">_</span></h2>
            <div className="binary-divider">root@mason-coco:~/certifications# ./status.sh</div>
            <ul className="certifications-list">
              <li>
                <em>HTB Certified Penetration Testing Specialist (CPTS)</em>
                <span className="certification-date">In Progress</span>
              </li>
              <li>
                <strong>CompTIA SecurityX</strong>
                <span className="certification-date">July 2025</span>
              </li>
              <li>
                <strong>CompTIA CYSA+</strong>
                <span className="certification-date">April 2025</span>
              </li>
              <li>
                <strong> EC-Council Certified Ethical Hacker Master</strong>
                <span className="certification-date">February 2025</span>
              </li>
              <li>
                <strong>CompTIA Pentest+</strong>
                <span className="certification-date">September 2024</span>
              </li>
              <li>
                <strong>CompTIA Security+</strong>
                <span className="certification-date">May 2024</span>
              </li>
              <li>
                <strong>CompTIA Network+</strong>
                <span className="certification-date">December 2023</span>
              </li>
              <li>
                <strong>CompTIA A+</strong>
                <span className="certification-date">March 2023</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="app-section">
          <div className="section-content">
            <h2>Projects <span className="cursor-blink">_</span></h2>
            <div className="binary-divider">root@mason-coco:~/projects# ./execute_all.sh</div>
            <div className="project-card">
              <h3>Device Rooting and Custom ROM Installation</h3>
              <p>
                Successfully performed rooting, jailbreaking, and custom ROM installations on diverse mobile/embedded devices, demonstrating expertise in system vulnerability exploitation and advanced OS customization. Key project: Rooted an Oculus Quest Go for NUILab research, enabling deeper system access.
              </p>
              <br />
            </div>

            <div className="project-card">
              <h3>Secure VPN Implementation and Management</h3>
              <p>
                Configured and managed a secure VPN solution using OpenVPN on a router, enabling protected remote network access and ensuring data traffic confidentiality through robust encryption.
              </p>
            </div>

            <div className="project-card">
              <h3>ARP Spoofing Attack on Oculus Quest 2</h3>
              <p>
                Collaborated with a research group to develop and execute an ARP Spoofing attack targeting the Oculus Quest 2, identifying and exploring local network security vulnerabilities and their potential impacts.
              </p>
            </div>

            <div className="project-card">
              <h3>Wireless Rubber Ducky Attack with Flipper Zero</h3>
              <p>
                Designed and executed wireless Rubber Ducky (BadUSB-style) attacks on various devices using Flipper Zero, creating custom scripts to exploit security weaknesses via HID emulation and wireless communication channels.
              </p>
            </div>

            <div className="project-card">
              <h3>Anonymous Web Browse Application</h3>
              <p>
                Created an application to facilitate anonymous web Browse by routing traffic through multiple proxy nodes, prioritizing user privacy and mitigating online tracking.
              </p>
            </div>

            <div className="project-card">
              <h3>Encrypted ”Telephone” Messaging</h3>
              <p>
                Worked within a team to create an encrypted messaging application inspired by the ”telephone” game, employing various encryption techniques to secure communications layer by layer.
              </p>
            </div>
          </div>
        </section>

        <section id="arsenal" className="app-section">
          <div className="section-content">
            <h2>Arsenal <span className="cursor-blink">_</span></h2>
            <div className="binary-divider">root@mason-coco:~/arsenal# SELECT * FROM skills WHERE verified = true;</div>
            <SkillsMatrix />
          </div>
        </section>

        <section id="contact" className="app-section">
          <div className="section-content">
            <h2>Contact Me <span className="cursor-blink">_</span></h2>
            <div className="binary-divider">root@mason-coco:~/contact# nc -nv 127.0.0.1 4444</div>
            <div className="contact-form-container">
              <form action="https://formspree.io/f/xleqykrp" method="post" className="contact-actual-form">
                <input type="text" name="Name" required placeholder="Your Name" />
                <input name="Email" id="email" type="email" required placeholder="Your Email" />
                <textarea name="Message" required placeholder="Your Message" className="message-input"></textarea>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Mason Coco. All rights reserved. | Securely Crafted</p>
      </footer>
    </div>
  );
}

export default App;