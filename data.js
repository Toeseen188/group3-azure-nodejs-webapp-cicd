// Central data for the app. Served by Node so the front-end stays data-driven.

const providers = [
  {
    name: 'Amazon Web Services',
    short: 'AWS',
    tagline: 'The pioneer that brought the cloud to the masses.',
    blurb:
      'The broadest and deepest cloud platform on Earth — 200+ services spanning compute, storage, and AI, powering a huge slice of the internet.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    color: '#FF9900',
    sky: 'linear-gradient(160deg, #232f3e 0%, #ff9900 140%)',
  },
  {
    name: 'Microsoft Azure',
    short: 'AZURE',
    tagline: 'Enterprise cloud, built for everyone.',
    blurb:
      "Microsoft's cloud — deeply integrated with the enterprise world, hybrid-ready, and the home of this very project's CI/CD pipeline.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    color: '#0089D6',
    sky: 'linear-gradient(160deg, #0078d4 0%, #50e6ff 140%)',
  },
  {
    name: 'Google Cloud Platform',
    short: 'GCP',
    tagline: 'Data, AI, and the planet-scale network of Google.',
    blurb:
      "Google's cloud — famous for data analytics, Kubernetes, and machine learning, running on the same backbone as Search and YouTube.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    color: '#4285F4',
    sky: 'linear-gradient(160deg, #4285f4 0%, #34a853 140%)',
  },
]

// =====================================================================
//  TEAM — each member edits their OWN block below.
//  See CONTRIBUTING.md for the full step-by-step guide.
//
//  Fields:
//    name   = your full name
//    role   = your job / title on the project
//    bestCP = your pick for the best Cloud Provider (free text, e.g.
//             "Azure", "AWS", "GCP" — whatever YOU think is best)
//    bio    = a few sentences about you — UP TO 150 WORDS. There is
//             plenty of room on the card; write freely.
//    photo  = OPTIONAL — the file NAME of your own image dropped into
//             public/assets/team/  (e.g. "jane.jpg"). NOT a web link.
//             Leave it out and an avatar is generated for you.
// =====================================================================
// Every member has the SAME block below. Find yours, fill in the 5 fields.
// To add your photo: put your image in public/assets/team/ , then REMOVE the
// "//" in front of the photo line and put your file name between the quotes.
const team = [
  {
    name: 'Member One',
    role: 'Project Lead / Cloud Architect',
    bestCP: 'Azure', // your pick for best cloud provider
    // photo: "member-one.jpg",            // <- remove the // and use your file name in public/assets/team/
    bio: "Hi! I'm Member One and I lead the crew. Replace this whole bio with your own story — up to 150 words. Tell us your background, what you study, what part of the project you worked on, your skills, hobbies, and anything else you'd like the world to know. There is space for everyone in the cloud!",
  },
  {
    name: 'Member Two',
    role: 'DevOps Engineer',
    bestCP: 'Azure',
    // photo: "member-two.jpg",            // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'Emmanuel Oyakhire',
    role: 'Backend Developer (Java)',
    bestCP: 'Azure',
    photo: 'Emma.png',
    bio: 'A software engineer with a background in Java and a focus on backend systems.',
  },
  {
    name: 'Member Four',
    role: 'Frontend Developer',
    bestCP: 'Azure',
    // photo: "member-four.jpg",           // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'kolawole Joshua',
    role: 'Software Developer II',
    bestCP: 'AWS',
    photo: 'Joshua1.png', // <- remove the // and use your file name in public/assets/team/
    bio: 'I am a Software Engineering student at the Federal University of Technology, Akure (FUTA), with a strong foundation in full-stack development and database systems. I am currently specializing in Cloud Computing through the Tech4Africans program, deepening my expertise in scalable, production-grade infrastructure. Alongside my academic work, I actively explore Blockchain and Web3 ecosystems — building tools that sit at the intersection of AI and decentralized applications. My hands-on experience includes developing MCP (Model Context Protocol) server integrations with crypto-native platforms such as Bags.fm and Celo.',
  },
  {
    name: 'Member Six',
    role: 'Database Administrator',
    bestCP: 'Azure',
    // photo: "member-six.jpg",            // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'Member Seven',
    role: 'QA / Test Engineer',
    bestCP: 'Azure',
    // photo: "member-seven.jpg",          // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'Member Eight',
    role: 'Site Reliability Engineer',
    bestCP: 'Azure',
    // photo: "member-eight.jpg",          // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'Member Nine',
    role: 'UI/UX Designer',
    bestCP: 'Azure',
    // photo: "member-nine.jpg",           // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'Member Ten',
    role: 'Documentation Lead',
    bestCP: 'Azure',
    // photo: "member-ten.jpg",            // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'Member Eleven',
    role: 'Scrum Master',
    bestCP: 'Azure',
    // photo: "member-eleven.jpg",         // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
  {
    name: 'Member Twelve',
    role: 'Data Engineer',
    bestCP: 'Azure',
    // photo: "member-twelve.jpg",         // <- remove the // and use your file name in public/assets/team/
    bio: 'Replace me with your own bio (up to 150 words).',
  },
]

module.exports = { providers, team }
