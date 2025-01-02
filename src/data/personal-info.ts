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
  role: 'Tech Entrepreneur',
  bio: "I'm a tech entrepreneur who loves to solve real world problem using technology. Aside tech I love to work on marketing, product and business development",
  images: [
    'https://avatars.githubusercontent.com/u/91181868?v=4',
    'https://live.staticflickr.com/65535/54241877452_39dc62951f_k.jpg',
    'https://live.staticflickr.com/65535/54242780096_6fd0e9f8cd_k.jpg',
    'https://live.staticflickr.com/65535/54242779836_4c08f24151_k.jpg'
    
  ],
  contact: {
    email: 'bahauddin.co@gmail.com',
    phone: '+880 1621 28 5057',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/bahauddin-chishte/',
  },
};