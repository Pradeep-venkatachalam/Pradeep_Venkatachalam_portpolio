// Single source of truth for portfolio content — taken from Pradeep_Resume.pdf.
// Edit copy here; components only render it.

export const profile = {
  name: 'Pradeep Venkatachalam',
  roles: ['Java Backend Developer', 'Spring Boot Engineer', 'REST API Developer', 'Cloud & Docker Enthusiast'],
  objective:
    'Aspiring Software Engineer specializing in Java, Spring Boot, REST APIs, Microservices, and Cloud Technologies. Skilled in building scalable backend applications, database optimization, and API development using Java ecosystem technologies. Seeking an opportunity to contribute to high-performance software solutions in a product-based company or Global Capability Center.',
  email: 'pradeepxyp7@gmail.com',
  phone: '9080990139',
  github: 'https://github.com/Pradeep-venkatachalam',
  linkedin: 'https://www.linkedin.com/in/pradeep-venkatachalam',
  leetcode: 'https://leetcode.com/u/pradeep_venkatachalam',
  resume: '/Pradeep_Venkatachalam_Resume.pdf',
}

export const snapshot = {
  name: 'Pradeep Venkatachalam',
  focus: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
  education: 'B.E. CSE, 2027 (expected)',
  cgpa: 8.1,
  seeking: 'Product-based companies / GCCs',
}

export const stats = [
  { value: '150+', label: 'Coding problems solved' },
  { value: '15+', label: 'RESTful APIs built' },
  { value: '2', label: 'AI-integrated backends' },
  { value: '8.1', label: 'CGPA' },
]

export const aboutHighlights = [
  { title: 'Backend focus', text: 'Spring Boot, REST APIs, Hibernate and JPA with MVC architecture.' },
  { title: 'Data layer', text: 'MySQL, joins, and query optimization for CRUD-heavy systems.' },
  { title: 'Cloud-ready', text: 'Docker containers deployed on AWS EC2 and RDS infrastructure.' },
  { title: 'Problem solving', text: 'Data structures, algorithms, and complexity analysis.' },
]

export const skillCategories = [
  { title: 'Programming Languages', items: ['Java', 'SQL'] },
  {
    title: 'Backend Development',
    items: ['Spring Boot', 'REST APIs', 'Hibernate', 'JPA', 'MVC Architecture', 'Backend Development', 'Microservices Fundamentals'],
  },
  { title: 'Database', items: ['MySQL', 'CRUD Operations', 'Joins', 'Query Optimization'] },
  { title: 'Cloud & DevOps', items: ['AWS EC2', 'AWS RDS', 'Docker', 'CI/CD Fundamentals'] },
  {
    title: 'Computer Science Fundamentals',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
]

// Request path through the stack, built only from resume skills.
export const stackFlow = [
  { stage: 'Client', skills: ['HTTP request'] },
  { stage: 'API layer', skills: ['Spring Boot', 'REST APIs', 'MVC'] },
  { stage: 'Persistence', skills: ['Hibernate', 'JPA'] },
  { stage: 'Database', skills: ['MySQL', 'Query Optimization'] },
  { stage: 'Cloud', skills: ['Docker', 'AWS EC2', 'AWS RDS'] },
]

const projectStack = ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Hibernate', 'JPA', 'Gemini AI', 'OpenRouter']

export const projects = [
  {
    slug: 'projectradar-ai',
    title: 'ProjectRadar AI',
    summary: 'AI-powered project recommendation platform for students.',
    metric: { value: '30+', label: 'projects recommended per profile' },
    stack: projectStack,
    points: [
      'Developed an AI-powered project recommendation platform using Java, Spring Boot, REST APIs, MySQL, JPA, and Hibernate.',
      'Analyzes skills, interests, technologies, experience, and career goals to recommend 30+ relevant projects.',
      'Integrated Gemini AI to generate project ideas with tech stack, difficulty, and implementation approach.',
      'Implemented OpenRouter as a fallback AI service when Gemini AI fails or is unavailable.',
      'Helps students discover resume-ready, industry-relevant, and hackathon-focused projects based on their profiles.',
    ],
  },
  {
    slug: 'medicare-ai',
    title: 'MediCare AI',
    summary: 'Backend healthcare system with an AI assistant for patients.',
    metric: { value: '15+', label: 'RESTful APIs' },
    stack: projectStack,
    points: [
      'Developed a backend healthcare system for patient, doctor, appointment, and medical record management.',
      'Built 15+ RESTful APIs for patient management, appointment scheduling, and medical records.',
      'Implemented secure CRUD operations using Hibernate and JPA with optimized entity relationships.',
      'Integrated Gemini AI to assist patients with enquiries and system-related information.',
      'Implemented OpenRouter as a fallback AI service when Gemini AI is unavailable.',
      'Applied MVC architecture and OOP principles for scalable and maintainable development.',
    ],
  },
]

export const deployment = {
  title: 'Cloud Deployment (AWS + Docker)',
  points: [
    'Deployed applications using Docker containers on AWS cloud infrastructure.',
    'Gained hands-on experience in server setup, application deployment, and container-based architecture for scalable systems.',
  ],
  tools: [
    { name: 'Docker', note: 'Containerized deployments' },
    { name: 'AWS EC2', note: 'Server setup & hosting' },
    { name: 'AWS RDS', note: 'Cloud database' },
    { name: 'CI/CD', note: 'Fundamentals' },
  ],
}

export const experience = [
  {
    role: 'Java Developer Intern',
    company: 'VIWISE TECH SOFTWARES',
    points: [
      'Developed Java applications using Core Java, Collections Framework, and OOP principles.',
      'Solved 100+ coding and algorithmic problems involving arrays, strings, recursion, and exception handling.',
      'Assisted in debugging and optimizing application modules, improving code maintainability.',
      'Collaborated with development teams following software development best practices.',
      'Strengthened understanding of backend development, clean code practices, and software design principles.',
    ],
  },
]

export const achievements = [
  { tag: 'Winner', text: 'Coding Battle at Technical Symposium, demonstrating strong problem-solving and programming skills.' },
  { tag: '150+', text: 'Solved 150+ coding problems across LeetCode and HackerRank focusing on Data Structures, Algorithms, and Java.' },
  { tag: 'Algorithms', text: 'Developed strong expertise in algorithm design, time complexity analysis, and code optimization techniques.' },
  { tag: 'Practice', text: 'Consistently practiced competitive programming and logical problem-solving to strengthen software development skills.' },
]

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    school: 'JJ College of Engineering and Technology, Trichy',
    meta: 'Expected 2027 · CGPA 8.1',
  },
  {
    degree: 'Higher Secondary (HSC)',
    school: "St. Xavier's Higher Secondary School, Nagapattinam",
    meta: '73%',
  },
  {
    degree: 'SSLC',
    school: 'SaiRam Metric Higher Secondary School, Thiruthuraipoondi',
    meta: '75%',
  },
]
