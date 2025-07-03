import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Anjali Sharma",
    text: "Absolutely transformative! I've never felt more in tune with my body and mind.",
  },
  {
    name: "Rahul Mehta",
    text: "The yoga retreats are peaceful, rejuvenating, and deeply spiritual. Highly recommended!",
  },
  {
    name: "Sanya Kapoor",
    text: "After joining, my flexibility and confidence improved tremendously. Wonderful instructors!",
  },
  {
    name: "Aditya Rao",
    text: "The therapeutic yoga sessions helped me manage my back pain more effectively than anything else.",
  },
  {
    name: "Nisha Verma",
    text: "Each class is filled with positivity, encouragement, and real transformation.",
  },
];

const ReviewsSection = () => (
  <>
    <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
      What Our Clients Say
    </h2>
    <section className="md:px-12 border border-orange-200 shadow-md">
      <Marquee pauseOnHover speed={50} gradient gradientWidth={80}>
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
    </section>
  </>
);

export default ReviewsSection;
