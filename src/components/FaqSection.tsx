import  { useState } from "react";
import { FrequentlyAskedQuestions } from "../data/faq";
import AccordionItem from "./AccordianItem";

const FaqSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll
    ? FrequentlyAskedQuestions
    : FrequentlyAskedQuestions.slice(0, 4);

  return (
    <section className="bg-white m-5 md:px-12 text-gray-800 mt-8">
      <div className="max-w-4xl mx-auto m-5">
        <h2 className="text-3xl md:text-3xl font-bold text-center text-orange-600 mb-8">
          Frequently Asked Questions
        </h2>

        <div>
          {visibleFaqs.map((faq, idx) => (
            <AccordionItem key={idx} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-600 font-semibold hover:underline"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
