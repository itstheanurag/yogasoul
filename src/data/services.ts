import yogaImg from "../assets/yoga.jpg";
import kidsYogaImg from "../assets/kids-yoga.jpg";
import corporateImg from "../assets/corporate-yoga.jpg";
import therapyImg from "../assets/therapy-yoga.jpg";
import certificationImg from "../assets/certification.jpg";
import nutritionImg from "../assets/nutrition.jpg";
import hydroImg from "../assets/colon-hydrotherapy.jpg";
import reverseAgingImg from "../assets/reverse-aging-yoga.jpg";
import retreatsImg from "../assets/retreats.jpg";

export const services = [
  {
    title: "General Yoga & Meditation",
    description:
      "Our General Yoga & Meditation sessions are designed for people of all levels and ages, offering a balanced blend of physical postures, breath control, and mindfulness. These sessions help reduce stress, improve flexibility, and cultivate a deeper awareness of the body and mind. Practicing daily yoga builds strength and improves balance, while meditation enhances emotional clarity and calmness. Whether you're seeking better health, more energy, or simply a peaceful start to your day, our sessions provide a holistic approach to well-being. Join us to explore your inner potential and create lasting harmony in your lifestyle through regular yoga and meditation.",
    image: yogaImg,
  },
  {
    title: "Kids Sports Yoga",
    description:
      "Our Kids Sports Yoga program is an energetic and engaging series of yoga sessions tailored specifically for children. Designed to build confidence, flexibility, strength, and focus, these classes incorporate playful movements and fun challenges to keep kids motivated and active. The goal is to cultivate physical coordination and mental discipline from a young age. Children are encouraged to explore their capabilities through creative movement and breathwork, laying a foundation for lifelong fitness. We also introduce Olympic-style strength and agility techniques to inspire children toward high-performance athletics while ensuring the sessions remain joyful, inclusive, and developmentally appropriate for all age groups.",
    image: kidsYogaImg,
  },
  {
    title: "Corporate Yoga",
    description:
      "Corporate Yoga is a workplace wellness initiative that empowers employees to enhance focus, reduce stress, and boost productivity through guided yoga practices. These sessions are tailored to fit within busy work schedules and are suitable for all levels. Our instructors bring yoga directly to your office or conduct virtual classes that promote posture correction, improved breathing, and mental clarity. Scientific studies show that regular yoga at work leads to happier employees and fewer sick days. We work with HR departments to customize programs that address burnout, screen fatigue, and workplace anxiety while cultivating mindfulness and team-building within corporate environments.",
    image: corporateImg,
  },
  {
    title: "Therapeutic Yoga",
    description:
      "Therapeutic Yoga is a gentle, healing approach that integrates yoga practices with therapeutic techniques to support individuals recovering from injury, illness, or chronic pain. Each session is customized based on individual needs and health goals, making it ideal for people with limited mobility or medical conditions. By combining breathing exercises, restorative postures, and mindfulness, this service aims to release tension, strengthen weak areas, and promote holistic healing. Our instructors work in collaboration with healthcare professionals to ensure safety and efficacy. Whether you are managing arthritis, recovering from surgery, or addressing emotional trauma, Therapeutic Yoga offers support at every step.",
    image: therapyImg,
  },
  {
    title: "Certified Yoga Courses",
    description:
      "Become a certified yoga instructor with our comprehensive 200-hour and 300-hour Teacher Training programs. These courses are accredited by the World Real Yoga Alliance and the Canadian Yoga Alliance (CYA), ensuring international recognition. Our curriculum covers yoga philosophy, anatomy, teaching methodology, and practical teaching experience. You'll learn traditional techniques, modern modifications, and safe alignment practices under expert guidance. Whether you aspire to teach professionally or deepen your personal practice, our courses provide the tools and confidence needed to succeed. On completion, graduates are eligible for registration as certified yoga teachers, empowering them to share the gift of yoga worldwide.",
    image: certificationImg,
  },
  {
    title: "Diet & Nutrition Plans",
    description:
      "Our Diet & Nutrition Plans are personalized to align with your body’s unique needs, lifestyle, and wellness goals. Crafted by certified nutrition experts, these plans support weight loss, improved digestion, muscle gain, hormonal balance, and overall vitality. We focus on sustainable eating habits rather than temporary diets, incorporating whole foods, balanced meals, and Ayurvedic principles when appropriate. Whether you're vegetarian, vegan, or have specific dietary concerns, our team will guide you with meal plans, grocery lists, and ongoing support. These plans complement our yoga programs and help you build a holistic, long-term approach to health and nutritional awareness.",
    image: nutritionImg,
  },
  {
    title: "Colon Hydrotherapy",
    description:
      "Colon Hydrotherapy is a gentle internal cleansing technique that uses purified water to flush out accumulated waste, toxins, and gas from the colon. This process promotes better digestion, increased nutrient absorption, and a sense of lightness and clarity. Ideal for individuals dealing with bloating, constipation, or sluggish metabolism, our sessions are conducted in a safe, sterile environment by trained professionals. Unlike harsh chemical cleanses, our method is natural and non-invasive. Many clients report improved skin health, mental focus, and energy levels post-session. Colon Hydrotherapy is a key part of our detox and wellness protocols, supporting your body’s innate healing process.",
    image: hydroImg,
  },
  {
    title: "Reverse Aging Yoga",
    description:
      "Reverse Aging Yoga is an advanced wellness experience designed to promote cellular rejuvenation and slow the signs of aging. Practiced in a 40°C hot room with oxygen-enriched air, these sessions stimulate sweat detoxification, improve blood circulation, and enhance skin elasticity. Through targeted asanas, breathwork, and deep stretching, we encourage hormone balance, increased vitality, and reduced inflammation—key factors in aging. Our unique environment mimics natural therapeutic conditions that boost collagen production and improve overall longevity. This service is ideal for those seeking to maintain youthfulness, strength, and mental clarity while gracefully embracing every stage of life through mindful movement.",
    image: reverseAgingImg,
  },
  {
    title: "Retreats & Workshops",
    description:
      "Our Retreats & Workshops offer immersive, transformative experiences that take you beyond daily routines into deep self-exploration and healing. Set in serene natural locations, these events combine intensive yoga, meditation, mindfulness, and spiritual teachings. Whether it's a weekend escape or a week-long retreat, you'll disconnect from distractions and reconnect with your purpose. Sessions are guided by experienced teachers and often include activities like journaling, group sharing, nature walks, and detox diets. Our workshops also focus on specific topics like chakra healing, yoga philosophy, or breathwork. These journeys are ideal for personal growth, emotional release, and lasting inner transformation.",
    image: retreatsImg,
  },
];

export type OurServices = {
  title: string;
  description: string;
  image: string;
};
