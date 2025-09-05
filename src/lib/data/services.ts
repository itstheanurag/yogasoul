export type ServiceType = {
  title: string;
  description: string;
  buttonText: string;
};

export type Service = {
  title: string;
  description: string;
  src: string;
  duration: string;
  price: string;
};

export type Services = Service[];

const assetPrefix = process.env.NODE_ENV === "production" ? "/yogasoul" : "";

export const servicesData: Services = [
  {
    title: "Hatha Yoga",
    description:
      "A balanced practice of postures and breathwork that builds strength, flexibility, and inner calm.",
    src: `${assetPrefix}/services/yoga/hatha-yoga.jpg`,
    duration: "60 min",
    price: "$25",
  },
  {
    title: "Vinyasa Flow",
    description:
      "A dynamic, breath-synchronized flow that energizes the body and calms the mind through continuous movement.",
    src: `${assetPrefix}/services/yoga/vinyasa-yoga.jpg`,
    duration: "75 min",
    price: "$30",
  },
  {
    title: "Ashtanga Yoga",
    description:
      "A structured series of powerful postures that build stamina, flexibility, and deep focus through steady breath.",
    src: `${assetPrefix}/services/yoga/ashtanga-yoga.jpg`,
    duration: "90 min",
    price: "$35",
  },
  {
    title: "Power Yoga",
    description:
      "An intense, fitness-based yoga style designed to boost strength, burn calories, and enhance endurance.",
    src: `${assetPrefix}/services/yoga/power-yoga.jpg`,
    duration: "60 min",
    price: "$28",
  },
  {
    title: "Corporate Wellness",
    description:
      "Short, effective sessions for stress relief and mental clarity, designed to boost productivity at the workplace.",
    src: `${assetPrefix}/services/yoga/corporate-yoga.jpg`,
    duration: "45 min",
    price: "$20",
  },
  {
    title: "Parental Yoga",
    description:
      "Gentle, safe practices for expecting mothers to promote relaxation, strength, and emotional balance.",
    src: `${assetPrefix}/services/yoga/maternal-yoga.png`,
    duration: "60 min",
    price: "$32",
  },
];

export const whatWeOffer = [
  {
    title: "One-to-One Private Classes",
    description:
      "Move at your own pace with expert instruction that nurtures strength, healing, and personal transformation.",
    buttonText: "Learn More",
  },
  {
    title: "Group Classes",
    description:
      "Connect and grow with our vibrant community. Our inclusive classes welcome all levels and include styles like Hatha, Vinyasa, Ashtanga, and more.",
    buttonText: "Explore Styles",
  },
  {
    title: "Yoga Therapy for Healing",
    description:
      "Address health concerns like back pain, anxiety, insomnia, and more through therapeutic yoga tailored for your well-being.",
    buttonText: "Inquire Now",
  },
];
