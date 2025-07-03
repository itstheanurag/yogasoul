const CallToAction = () => {
  return (
    <section className="w-full bg-amber-50 text-orange-500 py-12 px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
        Are You Ready?
      </h2>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-6 font-light">
        Join us and start your healthy spiritual journey with Indian Yogacharya
        <span className="font-semibold text-orange-600"> Dr. Saurav Kumar</span>
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
        Join Now
      </button>
    </section>
  );
};

export default CallToAction;
