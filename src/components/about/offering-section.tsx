export const OfferingsSection = () => (
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8 text-center">
      Our Offerings
    </h2>

    <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
          Wellness & Therapeutic Yoga
        </h3>
        <p className="text-base text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
          Targeted sessions designed to help with:
        </p>
        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Insomnia and fatigue
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Anxiety, restlessness, and depression
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Dissociation and low emotional energy
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Poor digestion and appetite
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Reverse aging and cellular rejuvenation
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
          Specialized Yoga Programs
        </h3>
        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <div>
              <strong>Private Yoga for Beginners</strong> – gentle, customized
              guidance to start your journey
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <div>
              <strong>Kids' Sports Yoga</strong> – professional training for
              international yoga championships, including in Bulgaria
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <div>
              <strong>Meditation for Spiritual Growth</strong> – deepen your
              awareness and connect with your higher self
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <div>
              <strong>Certified Yoga Teacher Training Courses</strong> – become
              a globally recognized yoga instructor
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <div>
              <strong>Yoga Retreats & Workshops</strong> – immersive experiences
              to reset, learn, and grow
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
