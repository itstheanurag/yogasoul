export type Service = {
  title: string;
  description: string;
  src: string;
  duration: string;
  price: string;
};

export type Services = Service[];

export const servicesData: Services = [
  {
    title: "Hatha Yoga",
    description:
      "A balanced practice of postures and breathwork that builds strength, flexibility, and inner calm.",
    src: "/yoga/hatha-yoga.jpg",
    duration: "60 min",
    price: "$25",

  },
  {
    title: "Vinyasa Flow",
    description:
      "A dynamic, breath-synchronized flow that energizes the body and calms the mind through continuous movement.",
    src: "/yoga/vinyasa-yoga.jpg",
    duration: "75 min",
    price: "$30",
  },
  {
    title: "Ashtanga Yoga",
    description:
      "A structured series of powerful postures that build stamina, flexibility, and deep focus through steady breath.",
    src: "/yoga/ashtanga-yoga.jpg",
    duration: "90 min",
    price: "$35",
  },
  {
    title: "Power Yoga",
    description:
      "An intense, fitness-based yoga style designed to boost strength, burn calories, and enhance endurance.",
    src: "/yoga/power-yoga.jpg",
    duration: "60 min",
    price: "$28",
  },
  {
    title: "Corporate Wellness",
    description:
      "Short, effective sessions for stress relief and mental clarity, designed to boost productivity at the workplace.",
    src: "/yoga/corporate-yoga.jpg",
    duration: "45 min",
    price: "$20",
  },
  {
    title: "Parental Yoga",
    description:
      "Gentle, safe practices for expecting mothers to promote relaxation, strength, and emotional balance.",
    src: "/yoga/maternal-yoga.png",
    duration: "60 min",
    price: "$32",
  },
];
