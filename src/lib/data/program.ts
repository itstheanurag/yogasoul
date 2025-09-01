export interface Program {
  title: string;
  description: string;
  price?: string;
  venue?: string;
  dates?: string;
  totalSeats?: number;
  buttonText?: string;
}

export const programsData: Program[] = [
  {
    title: "International Yoga Teachers Training Course",
    description:
      "Teachers can register as a CYA-YMC-RYT 200 & 300 if they have successfully completed a 300-hour yoga teacher training that is registered with World Real Yoga Alliance. All training hours must come from the same school and multiple pieces of training cannot be combined to meet the 200 hours or 300-hour requirement.",
    buttonText: "Join",
  },
  {
    title: "Ashtanga Yoga Therapy TTC-200h/300h",
    description: "Step into a transformative Ashtanga Yoga Therapy program.",
    price: "12500 AED",
    venue: "Dubai",
    dates: "20 Nov – 20 Dec 2025",
    totalSeats: 60,
    buttonText: "Join",
  },
  {
    title: "Ashtanga Yoga Therapy TTC-200h/300h",
    description: "Step into a transformative Ashtanga Yoga Therapy program.",
    price: "12500 AED",
    venue: "Dubai",
    dates: "15 Nov – 20 Dec 2025",
    totalSeats: 300,
    buttonText: "Join",
  },
  {
    title: "200-Hour Yoga Alliance Certified Teacher Training Course",
    description:
      "Step into your journey as a certified yoga teacher with our internationally recognized 200-hour TTC. Accredited by the US Yoga Alliance, this multistyle course blends the depth of Hatha, the creativity of Vinyasa, the stillness of Yin, and the healing of Restorative Yoga. You'll dive deep into yoga philosophy, anatomy, pranayama, meditation, and teaching methodology—all guided by experienced and supportive instructors. Graduate with the skills, confidence, and certification to teach yoga worldwide and live the practice on and off the mat.",
    buttonText: "Learn More",
  },
];
