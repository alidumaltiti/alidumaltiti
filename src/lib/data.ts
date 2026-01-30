import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

export const PERSONAL_DETAILS = {
  name: "Maltiti Azindoo Alidu",
  location: "Tamale, Northern Region, Ghana",
  phone: "(+233) 55 883 9833",
  email: "alidumaltiti0@gmail.com",
  linkedin: "https://www.linkedin.com/in/maltiti-azindoo-alidu-076046151",
  github: "https://alidumaltiti.github.io/alidumaltiti/",
  portfolio: "https://www.kickresume.com/cv/maltiti-alidu/",
  headlines: [
    "Software Developer",
    "Data Scientist",
    "Agriculture Professional",
    "Sustainability Advocate",
    "AI/ML Scholar"
  ],
  summary: `Biotechnology & Agriculture Professional | Sustainable Development Advocate | Rural Empowerment Enthusiast.
  
  I'm Maltiti Azindoo Alidu, a purpose-driven professional passionate about transforming communities through science, sustainability, and innovation. With 3+ years of experience across agricultural research, rural development, community engagement and data-driven solutions, I thrive at the intersection of biotechnology, community impact, agriculture and emerging digital tools.
  
  From conducting DNA sequencing and soil chemistry analysis in research labs, to coordinating field surveys with rural farmers, my journey has been rooted in empowering people with knowledge and practical solutions. My skill set spans from agronomy, mechanization, plant pathology and sustainable farming to digital data analysis, project coordination, and community engagement.`,
};

export const EXPERIENCE = [
  {
    role: "Agriculture Specialist Volunteer",
    company: "Ghana Youth Guide",
    location: "Tamale, Ghana",
    date: "Oct 2025 - Present",
    description: "Supporting youth-focused agricultural empowerment by providing technical guidance, field-based training, and practical demonstrations aimed at improving agronomic practices and productivity.",
    tags: ["Environment", "Volunteering"]
  },
  {
    role: "Software Development Intern",
    company: "Precision Quality Internship",
    location: "Tamale, Northern Region, Ghana (Hybrid)",
    date: "Jun 2025 - Present",
    description: "Trained in software development with hands-on practice in HTML, JavaScript, and database management for building efficient web applications. Collaborated with multidisciplinary teams on innovation-driven projects.",
    tags: ["Internship", "Product Design", "Technical Skills"]
  },
  {
    role: "Intern",
    company: "Nobel Learning PBC",
    location: "Remote",
    date: "Jul 2025 - Sep 2025",
    description: "Participated in a global mentorship program focused on personal growth, leadership, and career development. Engaged in weekly sessions with mentors to strengthen self-awareness and emotional intelligence.",
    tags: ["Internship", "Mentorship", "Social Impact"]
  },
  {
    role: "Forward Learning Program (Apprenticeship)",
    company: "McKinsey & Company",
    location: "Remote",
    date: "May 2025 - Jul 2025",
    description: "Participated in a 10-week program designed to sharpen essential workplace and career-readiness skills. Enhanced ability to solve problems, communicate effectively, and adapt to change.",
    tags: ["Apprenticeship", "Problem Solving", "Leadership"]
  },
  {
    role: "Enumerator",
    company: "MEDA (Mennonite Economic Development Associates)",
    location: "Tamale, Northern Region, Ghana (Remote)",
    date: "Jul 2024 (1 month)",
    description: "Conducted surveys and gathered data for agriculture and rural development research projects. Leveraged digital tools for efficient and accurate data collection and entry.",
    tags: ["Contract", "Data Collection", "Research Support"]
  },
  {
    role: "Customer Solution Executive",
    company: "GLICO Life Insurance",
    location: "Tamale, Northern Region, Ghana (Hybrid)",
    date: "Jun 2024 (1 month)",
    description: "Acted as a company agent, soliciting customer applications and promoting insurance products. Ensured adherence to the Insurance Act 2021 and followed all company regulations.",
    tags: ["Part-time", "Sales", "Customer Service"]
  },
  {
    role: "Sales Manager",
    company: "Crystal Mineral Water",
    location: "Bibiani, Western North Region, Ghana (On-site)",
    date: "Apr 2024 - May 2024 (2 months)",
    description: "Oversaw the production process to ensure high-quality standards. Compiled and analyzed daily sales data to track revenue and identify trends.",
    tags: ["Part-time", "Supply Chain", "Management"]
  },
  {
    role: "Scientific Laboratory Technician",
    company: "CSIR-Savanna Agricultural Research Institute",
    location: "Nyankpala, Tamale, Northern Region, Ghana (Hybrid)",
    date: "Oct 2021 - Sep 2022",
    description: "Conducted chemical analysis of soil samples to support agricultural research. Collaborated with scientists on laboratory experiments to enhance soil fertility recommendations.",
    tags: ["Contract", "Research", "Lab Technician"]
  }
];

export const PROJECTS = [
  {
    title: "Green Skills Ghana",
    role: "Founder & Lead Developer",
    link: "https://greenskillsgh.byethost22.com/",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Generative AI"],
    description: "Developed an 'Enterprise Monolith' digital ecosystem designed to bridge the gap between traditional agricultural practices and modern green digital skills in Ghana. Built LearnScope, an AI-powered educational navigator.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60" // Placeholder
  },
  {
    title: "BioShield AI",
    role: "Lead Full Stack Developer",
    link: "http://bioshield-gh.infinityfreeapp.com/",
    techStack: ["PHP", "MySQL", "Leaflet.js", "Chart.js", "Bootstrap 5", "Gemini AI API"],
    description: "Architected a secure, mobile-responsive web application for real-time disease tracking and early outbreak detection. Integrated geospatial heatmaps and dynamic data visualization.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60" // Placeholder
  },
  {
    title: "Green Ghana",
    role: "Founder & Web Developer",
    link: "https://alidumaltiti.github.io/greenghana/",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Designed and developed a platform to inspire and equip people with green skills. Provides practical learning resources on renewable energy and sustainable agriculture.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&auto=format&fit=crop&q=60" // Placeholder
  },
  {
    title: "LearnScope",
    role: "Developer",
    link: "https://partyrock.aws/u/maltiti/6xxd69lln/LearnScope%3A-Free-Course-Navigator",
    techStack: ["Generative AI", "No-Code", "Prompt Engineering"],
    description: "An AI-powered course recommendation tool built using PartyRock. Helps users discover tailored courses based on interests and skill levels.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60" // Placeholder
  }
];

export const SKILLS = {
  Technical: [
    "Python", "Machine Learning", "Data Science", "PHP", "MySQL",
    "Tailwind CSS", "JavaScript", "React", "Next.js", "AWS Cloud",
    "Generative AI", "Prompt Engineering", "Linux"
  ],
  Agriculture: [
    "Biotechnology", "Agronomy", "Soil Chemistry", "Field Research",
    "Sustainable Farming", "Climate-Smart Agriculture"
  ],
  Professional: [
    "Project Management", "Leadership", "Communication",
    "Problem Solving", "Community Engagement", "Public Speaking"
  ]
};

export const EDUCATION = [
  {
    institution: "University for Development Studies",
    degree: "Bachelor of Applied Science - BASc, Agriculture Technology",
    major: "Agriculture Biotechnology",
    date: "Sep 2017 - Oct 2021"
  },
  {
    institution: "AWS",
    degree: "AWS re/Start Program Learner",
    field: "Cloud Computing",
    date: "Aug 2025 - Oct 2025"
  }
];

export const TESTIMONIALS = [
  {
    name: "Eric Kwame Ahiabu",
    role: "Group Leader, TTFPP",
    text: "Maltiti distinguished himself as a dependable, hardworking, and respectful team member. He consistently demonstrated genuine curiosity and a strong willingness to learn. His positive attitude and unwavering work ethic were truly commendable."
  },
  {
    name: "Estela Turqui",
    role: "Customer Care Leadership",
    text: "What stands out most about Maltiti is his character. He approaches every opportunity with integrity, humility, and a deep sense of curiosity. His love for learning is both inspiring and contagious."
  }
];
