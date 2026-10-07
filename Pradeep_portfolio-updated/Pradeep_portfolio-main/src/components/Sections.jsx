import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import {
  profile, snapshot, stats, aboutHighlights, skillCategories, stackFlow,
  projects, deployment, experience, achievements, education,
} from '../data/portfolio'

const NAV = [
  ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['deployment', 'Deployment'],
  ['experience', 'Experience'], ['achievements', 'Achievements'], ['education', 'Education'], ['contact', 'Contact'],
]

const reveal = () => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
})

function SectionHead({ method = 'GET', route, title, badge = '200 OK' }) {
  return (
    <div className="section-head">
      <div>
        <div className="route"><span className="method">{method}</span>{route}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      <span className="status-badge">{badge}</span>
    </div>
  )
}

function Section({ id, children }) {
  return (
    <motion.section id={id} className="section" {...reveal()}>
      <div className="shell">{children}</div>
    </motion.section>
  )
}

export function Navbar() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <a className="brand" href="#top" aria-label="Back to top">
          pradeep<span className="brand-dot">.</span>venkatachalam
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          ))}
        </nav>
        <a className="nav-resume" href={profile.resume} download>Resume</a>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero-grid">
        <div>
          <motion.div {...reveal()}>
            <div className="hero-eyebrow"><span className="method">GET</span>/pradeep</div>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-role">
              Software Engineer ·{' '}
              <span className="typewriter-wrap">
                <Typewriter words={profile.roles} loop={0} cursor cursorStyle="_" typeSpeed={55} deleteSpeed={35} delaySpeed={1800} />
              </span>
            </p>

            <div className="json-panel" aria-label="Profile summary">
              <div><span className="jp">{'{'}</span></div>
              <div>&nbsp;&nbsp;<span className="jk">"name"</span><span className="jp">: </span><span className="jv">"{snapshot.name}"</span><span className="jp">,</span></div>
              <div>&nbsp;&nbsp;<span className="jk">"focus"</span><span className="jp">: </span><span className="jv">[{snapshot.focus.map((f) => `"${f}"`).join(', ')}]</span><span className="jp">,</span></div>
              <div>&nbsp;&nbsp;<span className="jk">"education"</span><span className="jp">: </span><span className="jv">"{snapshot.education}"</span><span className="jp">,</span></div>
              <div>&nbsp;&nbsp;<span className="jk">"cgpa"</span><span className="jp">: </span><span className="jv">{snapshot.cgpa}</span><span className="jp">,</span></div>
              <div>&nbsp;&nbsp;<span className="jk">"seeking"</span><span className="jp">: </span><span className="jv">"{snapshot.seeking}"</span></div>
              <div><span className="jp">{'}'}</span></div>
            </div>

            <div className="hero-actions">
              <a className="btn-primary" href="#projects">View projects</a>
              <a className="btn-secondary" href={profile.resume} download>Download resume</a>
              <a className="btn-secondary" href="#contact">Contact me</a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><span>/</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><span>/</span>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-photo-frame" {...reveal()}>
          <div className="photo-card">
            <img src="/profile.jpg" alt="Portrait of Pradeep Venkatachalam" width="640" height="640" />
            <div className="photo-status"><span className="dot-pulse" />Open to Software Engineer roles</div>
          </div>
        </motion.div>
      </div>

      <div className="shell">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function About() {
  return (
    <Section id="about">
      <SectionHead route="/about" title="About" />
      <p className="about-text">{profile.objective}</p>
      <div className="about-grid">
        {aboutHighlights.map((h) => (
          <div key={h.title} className="about-card">
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHead route="/skills" title="Skills" />
      <p className="lede">How a request travels through the stack I work with:</p>
      <ol className="flow" aria-label="Request flow through my stack">
        {stackFlow.map((s) => (
          <li key={s.stage} className="flow-node">
            <span className="flow-stage">{s.stage}</span>
            <span className="flow-skills">{s.skills.join(' · ')}</span>
          </li>
        ))}
      </ol>
      <div className="skills-grid">
        {skillCategories.map((c) => (
          <div key={c.title} className="skill-cell">
            <h4>{c.title}</h4>
            <div className="chip-row">
              {c.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHead route="/projects" title="Projects" />
      {projects.map((p) => (
        <motion.article key={p.slug} className="project-card" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
          <div className="project-top">
            <div>
              <div className="project-route"><span className="method post">POST</span>/projects/{p.slug}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-summary">{p.summary}</p>
            </div>
            <div className="project-metric">
              <strong>{p.metric.value}</strong>
              <span>{p.metric.label}</span>
            </div>
          </div>

          <div className="ai-flow" aria-label="AI fallback flow">
            <span>Request</span><i>→</i><span className="ai-primary">Gemini AI</span>
            <i className="ai-fail">on failure →</i><span className="ai-fallback">OpenRouter</span>
          </div>

          <div className="chip-row">{p.stack.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          <ul className="bullet-list">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
          <a className="card-link" href={profile.github} target="_blank" rel="noreferrer">View on GitHub</a>
        </motion.article>
      ))}
    </Section>
  )
}

export function Deployment() {
  return (
    <Section id="deployment">
      <SectionHead method="POST" route="/infrastructure/deploy" title={deployment.title} />
      <ul className="bullet-list deploy-points">{deployment.points.map((p) => <li key={p}>{p}</li>)}</ul>
      <div className="deploy-tools">
        {deployment.tools.map((t) => (
          <div key={t.name} className="deploy-tool">
            <strong>{t.name}</strong>
            <span>{t.note}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHead route="/experience" title="Internship Experience" />
      {experience.map((e) => (
        <div key={e.company} className="exp-card">
          <div className="exp-role">{e.role}</div>
          <div className="exp-company">{e.company}</div>
          <ul className="bullet-list">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      ))}
    </Section>
  )
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHead route="/achievements" title="Achievements" />
      <div className="achv-list">
        {achievements.map((a) => (
          <div key={a.tag} className="achv-item">
            <span className="achv-marker">{a.tag}</span>
            <p>{a.text}</p>
          </div>
        ))}
      </div>
      <a className="card-link" href={profile.leetcode} target="_blank" rel="noreferrer">View LeetCode profile</a>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education">
      <SectionHead route="/education" title="Education" />
      <div className="record-list">
        {education.map((e) => (
          <div key={e.degree} className="record-row">
            <div className="record-main"><strong>{e.degree}</strong><span>{e.school}</span></div>
            <div className="record-meta">{e.meta}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  const rows = [
    ['Email', profile.email, `mailto:${profile.email}`],
    ['Phone', profile.phone, `tel:+91${profile.phone}`],
    ['LinkedIn', 'linkedin.com/in/pradeep-venkatachalam', profile.linkedin],
    ['GitHub', 'github.com/Pradeep-venkatachalam', profile.github],
    ['LeetCode', 'leetcode.com/u/pradeep_venkatachalam', profile.leetcode],
  ]
  return (
    <Section id="contact">
      <SectionHead method="POST" route="/contact" title="Contact" badge="Open to roles" />
      <p className="lede">Hiring for a Software Engineer role at a product-based company or GCC? I'd like to hear from you.</p>
      <div className="contact-grid">
        <ul className="contact-list">
          {rows.map(([label, value, href]) => (
            <li key={label}>
              <span>{label}</span>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{value}</a>
            </li>
          ))}
        </ul>
        <div className="contact-actions">
          <a className="btn-primary" href={`mailto:${profile.email}`}>Email me</a>
          <button type="button" className="btn-secondary" onClick={copyEmail}>{copied ? 'Copied' : 'Copy email'}</button>
          <a className="btn-secondary" href={profile.resume} download>Download resume</a>
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
          <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </span>
      </div>
    </footer>
  )
}
