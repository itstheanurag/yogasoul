import AccordionItem from "./AccordianItem";

const AboutUs = () => {
  return (
    <section className="bg-amber-50 text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6">
          Welcome to Soul Sanctuary Yoga – Dubai
        </h2>

        <p className="text-lg md:text-xl text-center font-medium mb-10">
          Founded by Yogacharya{" "}
          <span className="font-semibold text-orange-600">
            Dr. Saurav Kumar
          </span>
          <br />
          Under the guidance of his Guruji,{" "}
          <span className="font-semibold text-orange-600">
            Yogi Dr. Aman Sood SuryaVanshi (Ph.D. in Yoga)
          </span>
        </p>

        <p className="mb-6">
          At Soul Sanctuary Yoga, we offer more than just yoga – we provide a
          sacred space for self-discovery, holistic healing, and inner
          transformation. Our Dubai-based studio is designed to promote
          wellness, vitality, and reverse aging, blending ancient yogic wisdom
          with modern therapeutic techniques.
        </p>

        <div className="space-y-4">
          <AccordionItem title="Alternative Healing through Yogic Science">
            Our programs include sessions in 40°C hot temperatures with oxygen
            infusion, designed to rejuvenate the body and support reverse aging.
          </AccordionItem>

          <AccordionItem title="Innovative & Holistic Yoga Programs">
            Explore diverse styles such as Reverse Aging Yoga in Oxygen, Hot
            Yoga, Ashtanga Yoga, Hatha Yoga, and Vinyasa Yoga — each tailored to
            elevate your physical and spiritual well-being.
          </AccordionItem>

          <AccordionItem title="Specialized Yoga Therapy">
            Therapeutic yoga sessions for chronic conditions including:
            <ul className="list-disc list-inside mt-2">
              <li>Back & neck pain</li>
              <li>Migraines</li>
              <li>Arthritis</li>
              <li>Stress, anxiety, and depression</li>
              <li>Mental wellness support</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Guided by Tradition, Powered by Purpose">
            Receive personalized yogic rehabilitation and holistic guidance from
            Yogacharya Dr. Saurav Kumar, mentored by Yogi Dr. Aman Sood
            SuryaVanshi, an Indian master and Ph.D. in Yoga Science.
          </AccordionItem>
        </div>

        <p className="mt-10 text-xl font-semibold text-orange-700 text-center">
          Rediscover your youth, realign with your essence, and begin your
          transformative journey at Soul Sanctuary Yoga – Dubai.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
