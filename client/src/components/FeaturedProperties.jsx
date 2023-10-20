import React from "react";
import useFetch from "../hooks/useFetch";

const FeaturedProperties = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, loading } = useFetch(`${baseURL}/hotels?featured=true`);

  return (
    <div className="flex w-full flex-col md:flex-row justify-center items-center gap-4 p-4">
      {loading ? (
        "Loading"
      ) : (
        <React.Fragment>
          {data &&
            data.map((item) => (
              <div
                key={item._id}
                className="p-4 md:h-[250px] w-full text-center justify-center items-center flex flex-col gap-1"
              >
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={item.photos[0]}
                  alt={item?.name}
                />
                <span className="px-4 font-bold text-lg">{item?.name}</span>
                <span className="px-4 text-sm">{item?.city}</span>
                <span className="px-4 text-sm">
                  Starting from ${item?.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="flex gap-2 px-4 text-sm">
                    <button className="bg-[#0C356A] text-white py-0.5 px-1 rounded-sm">
                      {item?.rating}
                    </button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default FeaturedProperties;
