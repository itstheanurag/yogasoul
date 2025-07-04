type Review = {
  name: string;
  text: string;
  avatar?: string;
};

const ReviewCard = ({ name, text, avatar }: Review) => (
  <div className="bg-white shadow-md p-6 mx-4 w-72 leading-tight">
    {avatar && (
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full mb-2 object-cover"
      />
    )}
    <h4 className="font-bold text-orange-600 mb-2">{name}</h4>
    <p className="text-gray-700 text-sm">{text}</p>
  </div>
);
export default ReviewCard;
