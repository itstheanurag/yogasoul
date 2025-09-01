export type TeamMember = {
  name: string;
  title: string;
  description: string;
  designation: string;
  mantra: string;
  image?: string;
};

export interface TeamsCardsProps {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content?: React.ReactNode | (() => React.ReactNode);
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Saurav Kumar",
    title: "Yogacharya",
    designation: "Founding Director & Leading Yoga Teacher",
    description:
      "A dedicated yogacharya and researcher, Dr. Saurav Kumar blends ancient wisdom with modern science to guide students toward holistic well-being. As the founding director, he has created a nurturing space where yoga is taught with authenticity, depth, and personal care. His approach emphasizes balance, healing, and transformation for every practitioner.",
    mantra: "Balance is the key to life.",
    image: "/team/saurav-kumar.jpg",
  },
  {
    name: "Dr. Aman Sood Suryavanshi",
    title: "Yogaraj",
    designation: "Managing Director & Guinness World Records Holder",
    description:
      "A renowned yoga master and Guinness World Records holder, Dr. Aman Sood Suryavanshi is celebrated for his dedication to advancing yoga on a global scale. As Managing Director, he brings visionary leadership and decades of experience, inspiring students to explore their highest potential through discipline, strength, and mindfulness.",
    mantra: "Discipline transforms dreams into reality.",
    image: "/team/aman.png",
  },
  {
    name: "Ms. Shabana Azmi",
    title: "",
    designation: "Leading Yoga Teacher",
    description:
      "With deep expertise in traditional and modern yoga practices, Ms. Shabana Azmi guides her students with compassion and clarity. Her teaching style focuses on balance, flexibility, and inner awareness, helping practitioners connect body, mind, and breath with ease.",
    mantra: "Breathe deeply, live mindfully.",
    image: "/team/shama-azmee.png",
  },
  {
    name: "Ms. Shama Parveen",
    title: "",
    designation: "Senior Leading Yoga Teacher",
    description:
      "With years of dedicated teaching, Ms. Shama Parveen brings depth and authenticity to every class. Her expertise lies in guiding students toward strength, flexibility, and mindfulness while creating a calm and supportive learning environment.",
    mantra: "Stability in body brings peace in mind.",
    image: "/team/shama-parveen.png",
  },
  {
    name: "Ms. Roshi",
    title: "",
    designation: "Leading Yoga Teacher",
    description:
      "Ms. Roshi is dedicated to guiding students with a blend of strength and mindfulness. Her teaching emphasizes proper alignment, fluid movements, and inner awareness, helping practitioners deepen their practice while cultivating peace and vitality.",
    mantra: "Flow with breath, grow with balance.",
    image: "/team/roshi.png",
  },
  {
    name: "Mr. Sahilpreet Singh",
    title: "",
    designation: "Leading Yoga Teacher & Accounts Admin",
    description:
      "Balancing both the art of yoga and the precision of administration, Mr. Sahilpreet Singh brings dedication to teaching and management alike. As a yoga teacher, he focuses on strength, discipline, and mindful practice, while as an accounts admin, he ensures smooth operations behind the scenes.",
    mantra: "Discipline in practice, harmony in life.",
    image: "/team/sahil.png",
  },
];
