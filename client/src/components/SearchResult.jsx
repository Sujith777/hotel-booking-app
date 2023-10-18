import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SearchResult = ({ item }) => {
  return (
    <div className="w-full flex gap-4 justify-between md:gap-8 md:flex-row flex-col p-6 border-2 border-lightgray rounded-md">
      <img
        className="h-[200px] rounded-md w-full object-cover md:h-[250px] md:w-[250px]"
        src={item.photos[0]}
        alt="Hotel Image"
      />
      <div className="flex md:basis-1/2 flex-col md:justify-between items-center md:items-start gap-2">
        <h1 className="text-2xl text-blue-500 font-bold">{item.name}</h1>
        <span className="text-sm">{item.distance} m from center</span>
        <span className="text-sm text-white bg-green-600 p-1 rounded-md">
          Free airport taxi
        </span>
        <span className="text-sm font-bold">
          Studio Apartment with air conditioning
        </span>
        <span className="text-sm">{item.description}</span>
        <span className="text-sm text-green-600 font-bold">
          Free Cancellation
        </span>
        <span className="text-sm text-green-600">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="md:basis-1/4 flex md:flex-col items-center justify-center gap-16 md:gap-8 md:justify-between">
        {item.rating && (
          <div className="flex flex-col items-center md:flex-row gap-2 md:justify-between">
            <span>Excellent</span>
            <button className="bg-blue-700 p-2 rounded-lg text-white font-bold">
              {item.rating}
            </button>
          </div>
        )}
        <div className="flex flex-col justify-between items-center">
          <span className="text-xl">${item.cheapestPrice}</span>
          <p className="text-gray-500 p-2">Includes taxes and fees</p>
          <Link to={`/hotels/${item._id}`}>
            <button className="p-2 bg-blue-500 my-2 rounded-lg text-white shadow-lg">
              See Availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
