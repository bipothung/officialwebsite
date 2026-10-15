"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const skills = [
  "AI response evaluation",
  "Prompt engineering",
  "AI-generated content review",
  "Testing & debugging",
  "JavaScript / TypeScript",
  "React.js / Next.js",
  "Python / Java / C++",
  "SQL / MongoDB / Firebase",
  "REST APIs",
  "Git / GitHub",
];
const capabilities = [
  {
    number: "01",
    title: "Software engineering",
    desc: "Responsive, maintainable web experiences built around real user needs.",
    tags: "React · Next.js · Node.js",
  },
  {
    number: "02",
    title: "AI evaluation",
    desc: "Assessing model outputs for accuracy, reasoning, consistency and instruction adherence.",
    tags: "Quality · Reasoning · Reliability",
  },
  {
    number: "03",
    title: "Product thinking",
    desc: "Turning requirements into clear interfaces, practical flows and dependable solutions.",
    tags: "UX awareness · System thinking",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink selection:bg-lime selection:text-ink">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Bipothung Humtsoe home">
          <span className="brand-mark">B.</span>
          <span>
            BIPOTHUNG
            <br className="hidden sm:block" /> HUMTSOE
          </span>
        </a>
        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#capabilities" onClick={closeMenu}>
            What I do
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="nav-resume"
            href="/files/Bipothung-Humtsoe-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="top" className="hero section-wrap">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.12 },
            },
          }}
        >
          <motion.div
            variants={fadeUp}
            transition={transition}
            className="eyebrow"
          >
            <span className="status-dot" /> SOFTWARE ENGINEERING × AI EVALUATION
          </motion.div>
          <motion.h1 variants={fadeUp} transition={transition}>
            Making
            <br />
            <span className="serif-word">technology</span>
            <br />
            make sense<span className="lime-period">.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={transition}
            className="hero-intro"
          >
            I’m Bipothung , a software engineer and AI evaluation specialist
            focused on building reliable digital experiences and making AI
            outputs more useful, accurate and human-aware.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={transition}
            className="hero-actions"
          >
            <a href="#capabilities" className="button button-dark">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a href="#contact" className="text-link">
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={transition}
            className="hero-footnote"
          >
            <span>BASED IN</span>
            <strong>Greater Noida, India</strong>
            <span className="footnote-line" />
            <span>OPEN TO OPPORTUNITIES</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="portrait-area"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.2 }}
        >
          <div className="portrait-backdrop" />
          <div className="portrait-ring ring-one" />
          <div className="portrait-ring ring-two" />
          <div className="portrait-frame">
            <Image
              src="/images/profile.png"
              alt="Portrait of Bipothung Humtsoe in a black suit and glasses"
              fill
              priority
              sizes="(max-width: 900px) 85vw, 42vw"
              className="portrait-image"
            />
          </div>
          <div className="portrait-label">
            <span className="label-index">01 / 04</span>
            <span>
              ENGINEER
              <br />
              BY CRAFT. THINKER
              <br />
              BY DEFAULT.
            </span>
            <ArrowDownRight size={20} />
          </div>
          <div className="orbit-note">
            <Sparkles size={15} /> Curious by design
          </div>
        </motion.div>
        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </a>
      </section>

      <section id="about" className="about-section section-wrap section-pad">
        <div className="section-kicker">
          <span>01</span>
          <span>THE PERSON BEHIND THE PROCESS</span>
        </div>
        <div className="about-grid">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={transition}
          >
            Curiosity is the
            <br />
            first <span className="serif-word">tool</span> I reach for.
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ ...transition, delay: 0.12 }}
            className="about-copy"
          >
            <p className="lead-copy">
              My work sits at the intersection of software development and AI
              quality.
            </p>
            <p>
              From translating client requirements into responsive web solutions
              to evaluating AI-generated text, images and videos, I care about
              the details that make technology dependable: clarity, consistency,
              thoughtful testing and a good experience for the person using it.
            </p>
            <p>
              I bring a practical engineering mindset, analytical
              problem-solving and a willingness to keep learning as the
              technology evolves.
            </p>
            <div className="about-signature">
              <span className="signature-mark">BH</span>
              <span>
                <strong>Bipothung Humtsoe</strong>
                <small>Software & AI</small>
              </span>
            </div>
          </motion.div>
        </div>
        <div className="stat-strip">
          <div>
            <strong>
              5<span>+</span>
            </strong>
            <span>
              YEARS IN SOFTWARE
              <br /> & AI WORK
            </span>
          </div>
          <div>
            <strong>
              3<span>+</span>
            </strong>
            <span>
              YEARS FOCUSED ON
              <br /> AI EVALUATION
            </span>
          </div>
          <div>
            <strong>
              10<span>+</span>
            </strong>
            <span>
              CORE TOOLS &<br /> TECHNOLOGIES
            </span>
          </div>
          <p>*Experience durations as stated in my resume.</p>
        </div>
      </section>

      <section id="capabilities" className="capabilities-section section-pad">
        <div className="section-wrap">
          <div className="section-kicker">
            <span>02</span>
            <span>HOW I CREATE VALUE</span>
          </div>
          <div className="section-heading-row">
            <h2>
              Good work is
              <br />
              <span className="serif-word">intentional.</span>
            </h2>
            <p>
              Different disciplines, one shared goal: make the outcome work
              better for people.
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((item, i) => (
              <motion.article
                key={item.number}
                className="capability-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...transition, delay: i * 0.08 }}
              >
                <span className="cap-number">{item.number}</span>
                <div className="cap-icon">
                  {i === 0 ? <Code2 /> : i === 1 ? <Sparkles /> : <Braces />}
                </div>
                <div className="cap-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="cap-tags">{item.tags}</span>
                </div>
                <ArrowUpRight className="cap-arrow" size={20} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section section-wrap section-pad">
        <div className="section-kicker">
          <span>03</span>
          <span>TOOLS I WORK WITH</span>
        </div>
        <div className="skills-layout">
          <h2>
            A toolkit for
            <br />
            <span className="serif-word">solving</span> things.
          </h2>
          <div className="skills-content">
            <p>
              Technical range matters. Knowing when and how to use it matters
              more.
            </p>
            <div className="skill-cloud">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.035 }}
                  className={
                    i === 0 || i === 4
                      ? "skill-chip skill-highlight"
                      : "skill-chip"
                  }
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="skill-note">
              <Check size={15} /> Always learning, always refining.
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section section-pad">
        <div className="section-wrap">
          <div className="section-kicker">
            <span>04</span>
            <span>EXPERIENCE & EDUCATION</span>
          </div>
          <div className="experience-grid">
            <div>
              <h2>
                Built through
                <br />
                <span className="serif-word">practice.</span>
              </h2>
              <p className="experience-aside">
                A snapshot of the roles and learning that shaped my approach.
              </p>
              <a
                className="download-link"
                href="/files/Bipothung-Humtsoe-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} /> Download full resume{" "}
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-date">FEB 2022 — DEC 2025</span>
                <span className="timeline-dot" />
                <div>
                  <h3>Chief Developer</h3>
                  <p className="timeline-org">
                    Technicynics <span>·</span> Chumukedima, Nagaland
                  </p>
                  <ul>
                    <li>Worked with clients to understand requirements.</li>
                    <li>Delivered responsive web solutions.</li>
                    <li>Developed and tested applications.</li>
                    <li>
                      Collaborated with teams and resolved technical issues.
                    </li>
                  </ul>
                </div>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">2025 — 2027</span>
                <span className="timeline-dot" />
                <div>
                  <h3>Master of Computer Applications</h3>
                  <p className="timeline-org">
                    Galgotias University <span>·</span> Greater Noida, Uttar
                    Pradesh
                  </p>
                  <p className="timeline-description">
                    Computer Science (Cyber-Security) · Present
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">2022 — 2025</span>
                <span className="timeline-dot" />
                <div>
                  <h3>Bachelor of Computer Applications</h3>
                  <p className="timeline-org">
                    St Joseph University <span>·</span> Chumukedima, Nagaland
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="principle-section">
        <div className="section-wrap principle-inner">
          <span className="principle-star">✳</span>
          <p>
            “The best solutions feel simple on the surface because someone
            cared about the complexity underneath.”
          </p>
          <span className="principle-caption">
            A PRINCIPLE I BRING TO EVERY PROJECT
          </span>
        </div>
      </section>

      <footer id="contact" className="contact-section section-pad">
        <div className="section-wrap">
          <div className="section-kicker">
            <span>05</span>
            <span>HAVE A GOOD PROBLEM?</span>
          </div>
          <div className="contact-grid">
            <div>
              <h2>
                Let’s make
                <br />
                something <span className="serif-word">matter.</span>
              </h2>
              <p className="contact-intro">
                Have a role, collaboration or interesting challenge in mind? I’d
                be glad to hear from you.
              </p>
              <a
                href="mailto:zerchaboi1152003@gmail.com"
                className="button button-lime"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-details">
              <a href="mailto:zerchaboi1152003@gmail.com">
                <span className="contact-icon">
                  <Mail size={17} />
                </span>
                <span>
                  <small>EMAIL</small>
                  <strong>zerchaboi1152003@gmail.com</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://linkedin.com/in/bipothung-humtsoe-481b5b383/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <Linkedin size={17} />
                </span>
                <span>
                  <small>LINKEDIN</small>
                  <strong>Connect professionally</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>
              <div className="location-row">
                <span className="contact-icon">
                  <MapPin size={17} />
                </span>
                <span>
                  <small>LOCATION</small>
                  <strong>Greater Noida, Uttar Pradesh, India</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <a href="#top" className="brand footer-brand">
              <span className="brand-mark">B.</span>
              <span>BIPOTHUNG HUMTSOE</span>
            </a>
            <span>DESIGNED WITH INTENTION © {new Date().getFullYear()}</span>
            <a
              href="/files/Bipothung-Humtsoe-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              RESUME <MoveUpRight size={12} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
