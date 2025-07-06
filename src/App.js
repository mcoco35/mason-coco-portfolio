import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    console.log(`[ScrollDebug] scrollToSection called for: ${sectionId}`);
    const section = document.getElementById(sectionId);
    const headerElement = document.querySelector('.app-header');

    // Check current overflow state right before attempting to scroll
    const appElement = document.querySelector('.App');
    if (appElement) {
      console.log(`[ScrollDebug] .App classes: ${appElement.className}`);
      console.log(`[ScrollDebug] Computed .App overflow-y: ${getComputedStyle(appElement).overflowY}`);
    }
    console.log(`[ScrollDebug] Computed body overflow-y: ${getComputedStyle(document.body).overflowY}`);


    if (section && headerElement) {
      const fixedHeaderHeight = headerElement.offsetHeight;
      const additionalPaddingAboveSection = 0; // Or 0 if you just want to clear the header
      const totalOffset = fixedHeaderHeight + additionalPaddingAboveSection;
      
      // Ensure section.getBoundingClientRect().top is relative to the current visual viewport
      const sectionTopRelativeToViewport = section.getBoundingClientRect().top;
      const currentScrollY = window.pageYOffset;
      const sectionDocumentPosition = sectionTopRelativeToViewport + currentScrollY;
      const targetScrollPosition = sectionDocumentPosition - totalOffset;

      console.log('[ScrollDebug] Values:', {
          sectionId,
          fixedHeaderHeight,
          additionalPaddingAboveSection,
          totalOffset,
          sectionTopRelativeToViewport,
          currentScrollY,
          sectionDocumentPosition,
          targetScrollPosition
      });

      if (Math.abs(currentScrollY - targetScrollPosition) < 5) { // If target is very close to current
          console.log('[ScrollDebug] Target scroll position is very close to current. May not appear to scroll.');
      }

      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
      });
      console.log(`[ScrollDebug] Attempting to scroll to: ${targetScrollPosition}`);

    } else {
      console.warn(`[ScrollDebug] Section ('${sectionId}') or header element ('.app-header') not found.`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Fallback
      }
    }
  };
  
  // New handler for nav link clicks
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    console.log(`[ScrollDebug] handleNavLinkClick for: ${sectionId}, menu open: ${isMobileMenuOpen}`);

    if (isMobileMenuOpen) {
      toggleMobileMenu(); // Start closing the menu
      // Delay the scroll to allow the .no-scroll class removal and layout update
      requestAnimationFrame(() => {
        // Some browsers might need a little more time for the overflow to be un-set
        // You can try with a single requestAnimationFrame first
        requestAnimationFrame(() => { 
          scrollToSection(sectionId);
        });
      });
    } else {
      scrollToSection(sectionId); // Menu is already closed, scroll immediately
    }
  };

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
    { id: 'education', title: 'Education' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact Me' },
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
                  onClick={(e) => handleNavLinkClick(e, link.id)} // Use new handler
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ... Rest of your main content (About, Education, etc.) ... */}
      <main className="app-main">
        <section id="about" className="app-section">
          <div className="section-content">
            <h2>About Me</h2>
            <div className="binary-divider">01010101</div>
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

        <section id="education" className="app-section">
          <div className="section-content">
            <h2>Education</h2>
            <div className="binary-divider">01010101</div>
            <div className="education-entry">
            <h3>M.S. Cybersecurity and Information Assurance</h3>
              <p className="institution">Western Governors University - Millcreek, UT</p>
              <p className="dates"> Starting August 2025 - TBD</p>
            </div>
            <div className="education-entry">
              <h3>Cybersecurity Bootcamp</h3>
              <p className="institution">University of Colorado - Boulder, CO</p>
              <p className="dates">June 2024 - March 2025</p>
            </div>
            <div className="education-entry">
              <h3>B.S. Computer Science</h3>
              <p className="institution">Colorado State University - Fort Collins, CO</p>
              <p className="dates">August 2020 - August 2024</p>
            </div>
          </div>
        </section>

        <section id="certifications" className="app-section">
          <div className="section-content">
            <h2>Certifications</h2>
            <div className="binary-divider">01010101</div>
            <ul className="certifications-list">
              <li>
                <em>CompTIA SecurityX</em> 
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
            <h2>Projects</h2>
            <div className="binary-divider">01010101</div>
            <div className="project-card">
            <h3>Device Rooting and Custom ROM Installation</h3>
            <p>
              Successfully performed rooting, jailbreaking, and custom ROM installations on diverse mobile/embedded devices, demonstrating expertise in system vulnerability exploitation and advanced OS customization. Key project: Rooted an Oculus Quest Go for NUILab research, enabling deeper system access.
            </p>
            <br/>
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

        <section id="contact" className="app-section">
          <div className="section-content">
            <h2>Contact Me</h2>
            <div className="binary-divider">01010101</div>
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