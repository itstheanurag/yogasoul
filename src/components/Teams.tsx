import { teamMembers } from "../data/teams";

const Teams = () => {
  return (
    <div className="bg-orange-100 flex justify-content">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
          Meet Our Team
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Our team is dedicated to providing the best yoga experience. Each
          member brings unique skills and passion to our community.
        </p>
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team member cards would go here */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-amber-50 rounded-lg shadow p-4 text-center m-4 hover:scale-101 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-orange-600">
                {member.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
