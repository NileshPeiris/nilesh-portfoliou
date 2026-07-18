/**
 * portfolioData.js
 * Central data store for Nilesh Peiris' portfolio.
 * All content is sourced from the provided resume and LinkedIn profile.
 * Update this file to change any content across the site.
 */

// ============================================================
// PERSONAL INFORMATION
// ============================================================
export const personal = {
  name: 'Mathias Hewage Nilesh Thisun Peiris',
  shortName: 'Nilesh Peiris',
  initials: 'NP',
  title: 'Cyber Security Undergraduate',
  taglines: [
    'Aspiring SOC Analyst',
    'Digital Forensics Enthusiast',
    'Threat Detection Specialist',
    'Malware Analyst',
    'Incident Response Learner',
    'AI Security Researcher',
    'Penetration Testing Enthusiast',
  ],
  location: 'Moratuwa, Sri Lanka',
  email: 'nileshthisunpeiris@gmail.com',
  about: `I am a Cyber Security undergraduate at Edith Cowan University with a strong foundation in digital forensics, threat detection, and secure software development. Passionate about building safer digital environments, I combine academic rigour with practical experience in industry-standard security tools and frameworks.

My final-year project — an AI-powered QR code threat detection system — exemplifies my drive to bridge machine learning and cybersecurity to address real-world challenges. I thrive in collaborative, fast-paced environments and am actively seeking opportunities in Security Operations (SOC), incident response, and digital forensics where I can contribute meaningfully to an organisation's security posture.`,
  values: [
    'Integrity in every security decision',
    'Continuous learning and professional growth',
    'Collaboration across cross-functional teams',
    'Precision and thoroughness in threat analysis',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/nilesh-peiris-a9b8b2292',
    github: 'https://github.com/nileshpeiris',
    credly: 'https://www.credly.com/users/nilesh-peiris',
    instagram: 'https://www.instagram.com/nileshpeiris',
    facebook: 'https://www.facebook.com/share/1BnGaJtY2P/?mibextid=wwXIfr',
  },
};

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    id: 'ecu',
    institution: 'Edith Cowan University',
    degree: 'Bachelor of Science in Cyber Security',
    period: '2023 – Present',
    location: 'Perth, Western Australia (Studied via Edith Cowan College, Sri Lanka)',
    description:
      'Pursuing a rigorous undergraduate programme covering digital forensics, network security, malware analysis, penetration testing, and secure software development. Active member of the ECU Cyber Security community.',
    highlights: [
      'Final Year Project: AI-Powered QR Code Threat Detection System',
      'Coursework in Digital Forensics, Incident Response & Network Security',
      'Applied penetration testing and vulnerability assessment skills',
    ],
    color: 'cyan',
    gpa: null,
  },
  {
    id: 'ecc',
    institution: 'Edith Cowan College',
    degree: 'Foundation / Pathway Programme',
    period: '2022 – 2023',
    location: 'Sri Lanka',
    description:
      'Completed the pathway programme to meet the academic requirements for entry into the Edith Cowan University undergraduate degree in Cyber Security.',
    highlights: [
      'Built a strong foundation in computing and networking fundamentals',
      'Developed academic English and research skills',
    ],
    color: 'purple',
    gpa: null,
  },
  {
    id: 'ssc',
    institution: "St. Sebastian's College",
    degree: 'G.C.E. Advanced Level — Physical Science Stream',
    period: '2019 – 2021',
    location: 'Moratuwa, Sri Lanka',
    description:
      "Completed secondary education at one of Sri Lanka's leading Catholic schools, achieving strong results in the Physical Science stream with subjects including Combined Mathematics, Physics, and Chemistry.",
    highlights: [
      'Participated in inter-school science competitions',
      'Developed strong problem-solving and analytical foundations',
      'Active in school leadership and extracurricular activities',
    ],
    color: 'green',
    gpa: null,
  },
];

// ============================================================
// EXPERIENCE
// ============================================================
export const experience = [
  {
    id: 'fyp',
    role: 'Final Year Research Project Lead',
    company: 'Edith Cowan University',
    type: 'Academic Project',
    period: '2024 – 2025',
    location: 'Sri Lanka',
    description:
      'Led the full-cycle design, development, and evaluation of an AI-powered QR code threat detection system as the capstone project for the BSc Cyber Security programme.',
    achievements: [
      'Engineered a hybrid threat scoring engine integrating machine learning (Scikit-learn) with real-time threat intelligence from VirusTotal and Google Safe Browsing APIs',
      'Achieved a high-accuracy URL classification pipeline capable of distinguishing Safe, Suspicious, and Malicious QR-encoded URLs',
      'Implemented a secure web application using Python Flask with role-based access control and admin approval workflows',
      'Designed and deployed an ELK Stack-based analytics dashboard for scan frequency, threat distribution, and user behaviour reporting',
      'Applied digital forensics methodology to log and analyse threat patterns across thousands of QR scans',
      'Integrated OpenCV for QR code image decoding and preprocessing, supporting both live camera and static image inputs',
    ],
    technologies: ['Python', 'Flask', 'Scikit-learn', 'OpenCV', 'VirusTotal API', 'Google Safe Browsing', 'ELK Stack', 'SQLite', 'Nginx', 'Ngrok'],
    color: 'cyan',
  },
  {
    id: 'volunteer',
    role: 'Cyber Security Awareness Volunteer',
    company: 'Community Outreach',
    type: 'Volunteer',
    period: '2023 – Present',
    location: 'Moratuwa, Sri Lanka',
    description:
      'Actively participated in community and institutional initiatives to promote digital safety and cyber hygiene awareness among non-technical audiences.',
    achievements: [
      'Delivered workshops on phishing awareness, password hygiene, and safe browsing practices',
      'Contributed to translating complex cybersecurity concepts into accessible, actionable guidance',
      'Supported peers in developing security awareness within the academic community',
    ],
    technologies: ['Security Awareness', 'Phishing Analysis', 'Digital Safety'],
    color: 'purple',
  },
];

// ============================================================
// SKILLS
// ============================================================
export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming & Development',
    icon: 'Code2',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'OpenCV', level: 70 },
      { name: 'Scikit-learn', level: 72 },
      { name: 'HTML / CSS / JS', level: 75 },
      { name: 'SQL', level: 68 },
    ],
  },
  {
    id: 'cybersecurity',
    label: 'Cyber Security',
    icon: 'Shield',
    color: '#00ff88',
    skills: [
      { name: 'Digital Forensics', level: 80 },
      { name: 'Malware Analysis', level: 75 },
      { name: 'Threat Detection', level: 82 },
      { name: 'Incident Response', level: 75 },
      { name: 'Vulnerability Assessment', level: 78 },
      { name: 'Penetration Testing', level: 70 },
      { name: 'Network Security', level: 75 },
    ],
  },
  {
    id: 'network',
    label: 'Network Security & Traffic Analysis',
    icon: 'Globe',
    color: '#00ff88',
    skills: [
      { name: 'Wireshark', level: 80 },
      { name: 'Nmap', level: 78 },
      { name: 'Shodan', level: 70 },
    ],
  },
  {
    id: 'malware',
    label: 'Malware Analysis & Reverse Engineering',
    icon: 'Bug',
    color: '#ff0080',
    skills: [
      { name: 'PEStudio', level: 72 },
      { name: 'Detect It Easy (DIE)', level: 68 },
      { name: 'VirusTotal', level: 85 },
      { name: 'Process Monitor (ProcMon)', level: 70 },
      { name: 'Process Explorer', level: 70 },
      { name: 'Any.Run', level: 72 },
      { name: 'Strings (Sysinternals)', level: 68 },
      { name: 'YARA', level: 65 },
      { name: 'Radare2', level: 60 },
      { name: 'Ghidra', level: 62 },
    ],
  },
  {
    id: 'siem',
    label: 'SIEM & Threat Detection',
    icon: 'Activity',
    color: '#7c3aed',
    skills: [
      { name: 'Elastic Stack (ELK)', level: 75 },
    ],
  },
  {
    id: 'webapp',
    label: 'Web Application Security',
    icon: 'Globe2',
    color: '#ff6b35',
    skills: [
      { name: 'Burp Suite Community Edition', level: 75 },
      { name: 'Nikto', level: 65 },
      { name: 'Gobuster', level: 65 },
      { name: 'Maltego', level: 65 },
    ],
  },
  {
    id: 'pentest',
    label: 'Penetration Testing',
    icon: 'Sword',
    color: '#ff4444',
    skills: [
      { name: 'Metasploit Framework', level: 70 },
      { name: 'Kali Linux', level: 82 },
      { name: 'Hydra', level: 70 },
      { name: 'John the Ripper', level: 72 },
      { name: 'SQLmap', level: 68 },
    ],
  },
  {
    id: 'forensics',
    label: 'Digital Forensics',
    icon: 'Search',
    color: '#00d4ff',
    skills: [
      { name: 'Autopsy', level: 78 },
      { name: 'FTK Imager', level: 70 },
    ],
  },
  {
    id: 'threat-intel',
    label: 'Threat Intelligence',
    icon: 'Brain',
    color: '#00ff88',
    skills: [
      { name: 'MITRE ATT&CK', level: 78 },
      { name: 'ATT&CK Navigator', level: 72 },
      { name: 'MalwareBazaar', level: 68 },
      { name: 'AlienVault OTX', level: 65 },
      { name: 'AbuseIPDB', level: 65 },
      { name: 'URLhaus', level: 65 },
      { name: 'Shodan', level: 70 },
    ],
  },
  {
    id: 'os',
    label: 'Operating Systems',
    icon: 'Cpu',
    color: '#ff6b35',
    skills: [
      { name: 'Kali Linux', level: 80 },
      { name: 'Ubuntu', level: 78 },
      { name: 'Windows', level: 85 },
      { name: 'macOS', level: 70 },
    ],
  },
  {
    id: 'soft',
    label: 'Professional Skills',
    icon: 'Users',
    color: '#ff0080',
    skills: [
      { name: 'Team Collaboration', level: 88 },
      { name: 'Communication', level: 85 },
      { name: 'Leadership', level: 78 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Critical Thinking', level: 88 },
      { name: 'Time Management', level: 82 },
    ],
  },
];

// ============================================================
// PROJECTS
// ============================================================
export const projects = [
  {
    id: 'qr-threat',
    title: 'AI-Powered QR Code Threat Detection System',
    subtitle: 'Final Year Project — BSc Cyber Security',
    featured: true,
    description:
      'A comprehensive web-based security platform that analyses QR-encoded URLs for malicious intent using a hybrid approach combining machine learning classification and real-time threat intelligence APIs. Designed to protect end users from QR phishing, malware distribution, and social engineering attacks.',
    longDescription:
      'The system decodes QR codes from both live camera feeds and uploaded images, extracts the embedded URL, and evaluates it against a multi-layer threat scoring engine. The engine combines an ML model trained on URL features with live intelligence from VirusTotal and Google Safe Browsing, producing a risk score and classification (Safe / Suspicious / Malicious) along with human-readable explanations.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'OpenCV', 'VirusTotal API', 'Google Safe Browsing API', 'ELK Stack', 'SQLite', 'Nginx', 'HTML/CSS/JS'],
    challenges: [
      'Designing a robust threat scoring model that gracefully handles ML uncertainty by deferring to high-confidence threat intelligence sources',
      'Integrating live threat intelligence APIs with rate-limiting and error handling for production reliability',
      'Implementing a zero-trust admin registration and approval workflow to secure administrative access',
    ],
    achievements: [
      'Built a production-ready threat scoring engine with explainable risk classifications',
      'Deployed analytics dashboard using ELK Stack for threat pattern analysis and reporting',
      'Implemented role-based access control with admin approval workflow',
      'Supported scan history export and localised timestamp reporting for Sri Lanka timezone',
    ],
    github: 'https://github.com/nileshpeiris/qr-threat-detection',
    demo: null,
    status: 'Completed',
    highlight: true,
  },
  {
    id: 'malware-analysis-2026',
    title: 'Reverse Engineering & Malware Analysis',
    subtitle: 'Academic Project Highlight (2026)',
    featured: false,
    description:
      'Performed static and dynamic malware analysis using PEStudio, Detect It Easy, Process Monitor, ANY.RUN, VirusTotal, and Wireshark. Identified indicators of compromise (IOCs), suspicious network activity, persistence mechanisms, and malicious behaviors. Developed YARA and Snort detection rules and documented findings in structured malware analysis reports.',
    technologies: ['PEStudio', 'Detect It Easy', 'Process Monitor', 'ANY.RUN', 'VirusTotal', 'Wireshark', 'YARA', 'Snort'],
    challenges: [
      'Safely isolating malicious binaries for dynamic testing',
      'Differentiating obfuscated/packed code from standard benign libraries',
    ],
    achievements: [
      'Successfully extracted IOCs and mapped malware behaviours',
      'Wrote custom YARA signatures to detect malware variants',
    ],
    github: null,
    demo: null,
    status: 'Completed',
    highlight: false,
  },
  {
    id: 'incident-response-2025',
    title: 'Cybersecurity Incident Detection & Response',
    subtitle: 'Academic Project Highlight (2025)',
    featured: false,
    description:
      'Conducted threat analysis and incident investigations in a simulated SOC environment using ELK Stack. Analysed authentication logs, suspicious user activity, and insider threat indicators using the MITRE ATT&CK framework and Cyber Kill Chain. Recommended security controls and mitigation strategies based on investigation findings.',
    technologies: ['ELK Stack', 'MITRE ATT&CK', 'Cyber Kill Chain', 'Log Analysis', 'Threat Hunting'],
    challenges: [
      'Parsing massive log files to identify faint anomalies and lateral movement patterns',
      'Effectively mapping sophisticated multi-stage attacks to specific MITRE ATT&CK techniques',
    ],
    achievements: [
      'Detected insider threat and data exfiltration vectors',
      'Drafted professional incident mitigation and SOC response playbook recommendations',
    ],
    github: null,
    demo: null,
    status: 'Completed',
    highlight: false,
  },
  {
    id: 'forensics-suspect-laptop',
    title: 'Digital Forensic Investigation – Suspect Laptop',
    subtitle: 'Academic Project Highlight (2025)',
    featured: false,
    description:
      'Performed digital forensic analysis using Autopsy to examine files, metadata, browser artefacts, and evidence of unauthorized access. Collected and analyzed forensic evidence, documented findings, and provided remediation recommendations in a formal forensic report.',
    technologies: ['Autopsy', 'Digital Forensics', 'Registry Analysis', 'FTK Imager'],
    challenges: [
      'Locating hidden partition data and verifying data integrity via cryptographic hashing',
      'Timeline reconstruction of unauthorized local access attempts',
    ],
    achievements: [
      'Uncovered registry keys and browser cache indicating data theft',
      'Compiled a formal forensic report detailing all findings for legal/corporate audit',
    ],
    github: null,
    demo: null,
    status: 'Completed',
    highlight: false,
  },
  {
    id: 'ethical-hacking-2025',
    title: 'Ethical Hacking & Defense Exercise',
    subtitle: 'Academic Project Highlight (2025)',
    featured: false,
    description:
      'Conducted vulnerability assessments and penetration testing using Nmap, Hydra, John the Ripper, Maltego, and Burp Suite in a Kali Linux environment. Performed service enumeration, password auditing, HTTP traffic analysis, and vulnerability identification to evaluate system security.',
    technologies: ['Kali Linux', 'Nmap', 'Hydra', 'John the Ripper', 'Maltego', 'Burp Suite', 'Penetration Testing'],
    challenges: [
      'Bypassing simple firewalls/IDS rules during initial enumeration stages',
      'Correlating raw scan results to actionable vulnerability classifications',
    ],
    achievements: [
      'Identified configuration flaws and weak password policies',
      'Demonstrated impact of cleartext credentials in HTTP web forms',
    ],
    github: null,
    demo: null,
    status: 'Completed',
    highlight: false,
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================
export const certifications = [
  {
    id: 'cisco-intro-cyber',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    logo: 'cisco',
    date: '2023',
    credentialUrl: 'https://www.credly.com/users/nilesh-peiris',
    color: '#00bceb',
    description: 'Foundational cybersecurity concepts including threat landscapes, attack types, and defensive strategies.',
  },
  {
    id: 'cisco-network',
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    logo: 'cisco',
    date: '2023',
    credentialUrl: 'https://www.credly.com/users/nilesh-peiris',
    color: '#00bceb',
    description: 'Core networking concepts including IP addressing, TCP/IP protocols, switching, and routing fundamentals.',
  },
  {
    id: 'cisco-endpoints',
    name: 'Endpoint Security',
    issuer: 'Cisco Networking Academy',
    logo: 'cisco',
    date: '2023',
    credentialUrl: 'https://www.credly.com/users/nilesh-peiris',
    color: '#00bceb',
    description: 'Endpoint protection strategies, operating system security hardening, and security monitoring concepts.',
  },
  {
    id: 'google-digital',
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    logo: 'google',
    date: '2023',
    credentialUrl: 'https://www.credly.com/users/nilesh-peiris',
    color: '#4285F4',
    description: 'Digital marketing principles, analytics, and online strategy from Google\'s Digital Garage programme.',
  },
  {
    id: 'cisco-python',
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy (PCEP)',
    logo: 'cisco',
    date: '2023',
    credentialUrl: 'https://www.credly.com/users/nilesh-peiris',
    color: '#00bceb',
    description: 'Python programming fundamentals, data structures, functions, and file handling aligned to PCEP certification.',
  },
  {
    id: 'cisco-cyber-ops',
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    logo: 'cisco',
    date: '2023',
    credentialUrl: 'https://www.credly.com/users/nilesh-peiris',
    color: '#00bceb',
    description: 'Security principles, access controls, cryptography, and threat management aligned to industry frameworks.',
  },
];

// ============================================================
// STATS / ACHIEVEMENTS
// ============================================================
export const stats = [
  { label: 'Certifications Earned', value: 6, suffix: '+' },
  { label: 'Projects Completed', value: 5, suffix: '' },
  { label: 'Security Tools Proficient', value: 12, suffix: '+' },
  { label: 'Years of Study', value: 3, suffix: '' },
];

// ============================================================
// TERMINAL CONTENT
// ============================================================
export const terminalContent = {
  whoami: [
    { type: 'output', text: 'Mathias Hewage Nilesh Thisun Peiris' },
    { type: 'output', text: 'Role     : Cyber Security Undergraduate | Aspiring SOC Analyst' },
    { type: 'output', text: 'Location : Moratuwa, Sri Lanka' },
    { type: 'output', text: 'Email    : nileshpeiris00@gmail.com' },
    { type: 'output', text: 'LinkedIn : linkedin.com/in/nilesh-peiris-a9b8b2292' },
    { type: 'output', text: 'GitHub   : github.com/nileshpeiris' },
  ],
  skills: [
    { type: 'output', text: '[ Programming ]    Python · Flask · OpenCV · Scikit-learn' },
    { type: 'output', text: '[ Cyber Security ] Digital Forensics · Malware Analysis · Threat Detection' },
    { type: 'output', text: '                   Incident Response · Vulnerability Assessment · Pen Testing' },
    { type: 'output', text: '[ Security Tools ] Wireshark · Burp Suite · Nmap · ELK Stack · Autopsy' },
    { type: 'output', text: '                   Maltego · VirusTotal · PEStudio · Google Safe Browsing' },
    { type: 'output', text: '[ OS ]             Kali Linux · Ubuntu · Windows · macOS' },
  ],
  experience: [
    { type: 'output', text: '[ 2024–2025 ]  Final Year Project Lead @ Edith Cowan University' },
    { type: 'output', text: '               → AI-Powered QR Code Threat Detection System' },
    { type: 'output', text: '               → Hybrid ML + VirusTotal + Google Safe Browsing engine' },
    { type: 'output', text: '[ 2023–Now  ]  Cyber Security Awareness Volunteer @ Community Outreach' },
    { type: 'output', text: '               → Phishing awareness & digital safety workshops' },
  ],
  education: [
    { type: 'output', text: '[ 2023–Now  ]  BSc Cyber Security @ Edith Cowan University' },
    { type: 'output', text: '[ 2022–2023 ]  Foundation Programme @ Edith Cowan College' },
    { type: 'output', text: '[ 2019–2021 ]  G.C.E. A/L (Physical Science) @ St. Sebastian\'s College' },
  ],
  projects: [
    { type: 'output', text: '[ ★ FEATURED ] AI-Powered QR Code Threat Detection System' },
    { type: 'output', text: '               Stack: Python · Flask · Scikit-learn · OpenCV · ELK Stack' },
    { type: 'output', text: '[ 2 ]          Reverse Engineering & Malware Analysis (2026)' },
    { type: 'output', text: '               Stack: PEStudio · Detect It Easy · Procmon · ANY.RUN · VirusTotal' },
    { type: 'output', text: '[ 3 ]          Cybersecurity Incident Detection & Response (2025)' },
    { type: 'output', text: '               Stack: ELK Stack · MITRE ATT&CK · Cyber Kill Chain' },
    { type: 'output', text: '[ 4 ]          Digital Forensic Investigation – Suspect Laptop (2025)' },
    { type: 'output', text: '               Stack: Autopsy · Registry Analysis · FTK Imager' },
    { type: 'output', text: '[ 5 ]          Ethical Hacking & Defense Exercise (2025)' },
    { type: 'output', text: '               Stack: Kali Linux · Nmap · Hydra · John the Ripper · Burp Suite' },
  ],
};
