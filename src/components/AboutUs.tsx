

const AboutUs = () => {
  return (
    <section className="bg-amber-50 text-gray-800 py-20 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-orange-600 leading-tight">
          Welcome to Soul Sanctuary Yoga – Dubai
        </h2>

        {/* Founder Info */}
        <div className="text-center text-lg md:text-xl space-y-2 font-medium">
          <p>
            Founded by{" "}
            <span className="font-bold text-orange-600">
              Yogacharya Dr. Saurav Kumar
            </span>
          </p>
          <p>
            Under the guidance of{" "}
            <span className="font-bold text-orange-600">
              Yogi Dr. Aman Sood SuryaVanshi (Ph.D. in Yoga)
            </span>
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="text-center max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
          <p>
            Soul Sanctuary Yoga is more than just a studio — it's a sacred space
            for holistic healing, transformation, and self-discovery. Our
            programs blend the timeless wisdom of yogic science with
            cutting-edge therapeutic practices to support physical vitality,
            emotional balance, and spiritual awakening.
          </p>
        </div>

        {/* What Makes Us Unique */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              🔥 Hot Yoga with Oxygen Infusion
            </h3>
            <p>
              Practiced at 40°C with added oxygen, these sessions are designed
              to detoxify, promote circulation, and activate cellular
              rejuvenation — supporting the body's natural anti-aging process.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              🧘‍♀️ Diverse Yogic Disciplines
            </h3>
            <p>
              Our offerings include Reverse Aging Yoga, Hatha, Ashtanga, and
              Vinyasa — each crafted to suit different bodies, goals, and levels
              of experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              💆‍♂️ Personalized Yoga Therapy
            </h3>
            <p>
              We provide targeted rehabilitation programs for chronic conditions
              like back pain, migraines, arthritis, and stress-related disorders
              through yogic therapy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              🌿 Guided by Yogic Wisdom
            </h3>
            <p>
              Under the mentorship of an Indian master with a Ph.D. in Yoga
              Science, our practices are rooted in authenticity and guided by
              purpose.
            </p>
          </div>
        </div>

        {/* Closing */}
        <p className="text-center text-xl md:text-2xl font-semibold text-orange-700 mt-10">
          Rediscover your youth, realign with your essence, and begin your
          transformative journey at Soul Sanctuary Yoga – Dubai.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
