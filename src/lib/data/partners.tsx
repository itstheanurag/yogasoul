export type Partner = {
  title: string;
  logo: string;
  description: string;
  link: string;
};

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

export const partners: Partner[] = [
  {
    title: "Soul Yoga",
    description:
      "A modern yoga studio in the UAE offering a variety of classes for all levels, blending traditional practices with contemporary wellness approaches.",
    link: "https://soulyoga.ae",
    logo: `${assetPrefix}/partners/logo.webp`,
  },
  {
    title: "Canadian Yoga Association",
    description:
      "Promoting yoga awareness and holistic practices across Canada.",
    link: "https://canadianyogaassociation.org",
    logo: `${assetPrefix}/partners/canadian-yoga-assosciation.png`,
  },
  {
    title: "Amazing Olympia Yoga",
    description:
      "A global community connecting yoga enthusiasts with wellness experts.",
    link: "https://amazingolympiayoga.com",
    logo: `${assetPrefix}/partners/amazing-olympia-yoga.png`,
  },
  {
    title: "Yoga Clinic",
    description:
      "Integrating yoga into therapeutic and clinical healing programs.",
    link: "https://clinic.org",
    logo: `${assetPrefix}/partners/clinic.png`,
  },
  {
    title: "Registered Yoga Teachers",
    description:
      "An international registry of certified yoga teachers and trainers.",
    link: "https://registeredyogateachers.org",
    logo: `${assetPrefix}/partners/registered-yoga-teacher.png`,
  },
  {
    title: "World Real Yoga Alliance",
    description:
      "Advocating authentic yoga practices and global unity through yoga.",
    link: "https://worldrealyogaalliance.org",
    logo: `${assetPrefix}/partners/world-real-yoga-alliance.png`,
  },
  {
    title: "Yoga Ministry Canada",
    description:
      "Government-supported initiative promoting yoga for all Canadians.",
    link: "https://yogaministrycanada.ca",
    logo: `${assetPrefix}/partners/yoga-ministery-canada.png`,
  },
  {
    title: "Yogasna Bulgaria",
    description:
      "Spreading the culture of yoga and wellness throughout Bulgaria.",
    link: "https://yogasanabulgaria.bg",
    logo: `${assetPrefix}/partners/yogasana-bulgaria.png`,
  },
];
