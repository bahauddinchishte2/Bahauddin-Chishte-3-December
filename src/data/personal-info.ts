export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  images: string[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Baha',
  role: 'Software Engineer',
  bio: "I'm a software engineer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.",
  images: [
    'https://avatars.githubusercontent.com/u/91181868?v=4',
    'https://drive.google.com/file/d/1RUntMuu4lTsg7apT6e0j7Lj5VHUMSoyW/view?usp=sharing',
    'https://drive.google.com/file/d/1RUntMuu4lTsg7apT6e0j7Lj5VHUMSoyW/view?usp=sharing',
    'https://drive.google.com/file/d/1RUntMuu4lTsg7apT6e0j7Lj5VHUMSoyW/view?usp=sharing'
  ],
  contact: {
    email: 'bahauddin.co@gmail.com',
    phone: '+880 1621 28 5057',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
};