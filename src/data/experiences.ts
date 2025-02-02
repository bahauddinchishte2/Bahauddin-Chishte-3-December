export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'full-time' | 'part-time' | 'freelance' | 'contract';
  // location: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Fulfilment Lead',
    company: 'oLab.',
    period: '2024 - Present',
    type: 'full-time',
    // location: 'Remote',
    description: 'Leading client projects and managing digital solutions from conception to delivery.',
    achievements: [
      'Successfully managed 4 concurrent client projects',
      'Improved project delivery time by 30%',
      'Implemented standardized project management processes'
    ],
    skills: ['Project Management', 'Digital Marketing', 'Web Development', 'Client Relations'],
    url: 'https://olab.com.au'
  },
  {
    title: 'Product Developer & Content Specialist',
    company: 'Vocabulary Builder',
    period: 'Dec 2023 - Jun 2024',
    type: 'contract',
    // location: 'Remote',
    description: 'Developed educational content and maintained full-stack applications for language learning.',
    achievements: [
      'Created 200+ educational content pieces',
      'Increased user engagement by 45%',
      'Optimized application performance'
    ],
    skills: ['Content Development', 'Full-stack Development', 'UX Design', 'Educational Technology'],
    url: 'https://vocabbuilder.com'
  },
  {
    title: 'Promotion And Public Relations Executive',
    company: 'Aemers',
    period: '2018 - 2019',
    type: 'part-time',
    // location: 'Dhaka, Bangladesh',
    description: 'Built responsive web interfaces and implemented RESTful APIs for startup clients.',
    achievements: [
      'Developed 5+ client websites',
      'Reduced page load time by 40%',
      'Implemented mobile-first design approach'
    ],
    skills: ['React', 'Node.js', 'REST APIs', 'Responsive Design'],
    url: 'https://startuphub.com'
  },
  {
    title: 'Customer Support & Community Specialist',
    company: 'Passive Journal – ',
    period: 'Jan 2022 - Dec 2022',
    type: 'full-time',
    // location: 'Dhaka, Bangladesh',
    description: 'Built responsive web interfaces and implemented RESTful APIs for startup clients.',
    achievements: [
      'Developed 5+ client websites',
      'Reduced page load time by 40%',
      'Implemented mobile-first design approach'
    ],
    skills: ['Customer Support', 'Communication', 'Management', 'Data Analysis','Sales'],
    url: 'passivejournal.com'
  }
];