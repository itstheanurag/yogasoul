import React from "react";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };
  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center px-4 py-12">
      <div className="bg-amber-50 rounded-2xl shadow-sm p-8 min-w-lg transition-shadow duration-300 hover:shadow-2xl ease-in-out">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
          Contact Us
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              placeholder="Write your message here..."
              className="w-full p-3 h-32 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
