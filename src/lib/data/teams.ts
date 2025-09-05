export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  link: string;
};

const assetPrefix = process.env.NODE_ENV === "production" ? "/yogasoul" : "";

export const teamMemberData: TeamMember[] = [
  {
    name: "Dr. Saurav Kumar",
    role: "Founding Director & Leading Yoga Teacher",
    avatar: `${assetPrefix}/team/hatha-yoga.jpg`,
    link: "https://www.instagram.com/yoga.with.saurav/",
  },
  {
    name: "Dr. Aman Sood Suryavanshi",
    role: "Managing Director & Guinness World Records Holder",
    avatar: `${assetPrefix}/team/aman.png`,
    link: "#",
  },
  {
    name: "Ms. Shabana Azmi",
    role: "Leading Yoga Teacher",
    avatar: `${assetPrefix}/team/shama-azmee.png`,
    link: "https://www.instagram.com/yoga.with.shama/",
  },
  {
    name: "Ms. Shama Parveen",
    role: "Senior Leading Yoga Teacher",
    avatar: `${assetPrefix}/team/shama-parveen.png`,
    link: "#",
  },
  {
    name: "Ms. Roshi",
    role: "Leading Yoga Teacher",
    avatar: `${assetPrefix}/team/roshi.png`,
    link: "https://www.instagram.com/yoga.with.roshi/",
  },
  {
    name: "Mr. Sahilpreet Singh",
    role: "Leading Yoga Teacher & Accounts Admin",
    avatar: `${assetPrefix}/team/sahil.png`,
    link: "https://www.instagram.com/vibrantvinyasa_with_sahil/",
  },
];
