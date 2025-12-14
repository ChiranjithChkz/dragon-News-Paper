 
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {image, description, plantId, plantName } = news;

 

  return (
    <div className="card bg-base-100 shadow-md mb-6">
     

      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-primary  cursor-pointer">
          {plantName}
        </h2>
      </div>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          src={image}
          alt={plantName}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>



      {/* condition integrate */}
      <div className="px-4  text-accent">
        {description.length > 200 ? (
          <>
            {description.slice(0, 100)}
            <Link to={`/news-details/${plantId}`}  className="text-primary font-semibold cursor-pointer  btn hover:bg-red-700 hover:text-white flex justify-center">
              Check it out
            </Link>
          </>
        ) : (
          description
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-base-200 mt-3">
        {/* Rating */}
        {/* <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating.number}</span>
        </div> */}

        {/* Views */}
        {/* <div className="flex items-center gap-2 text-gray-500">
            
        </div> */}
      </div>
    </div>
  );
};

export default NewsCard;
