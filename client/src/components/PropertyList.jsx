import React from "react";
import useFetch from "../hooks/useFetch";

const PropertyList = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, loading } = useFetch(`${baseURL}/hotels/type`);
  const images = [
    "https://images.unsplash.com/photo-1504652517000-ae1068478c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  ];

  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 px-4">
      {loading ? (
        "Loading"
      ) : (
        <React.Fragment>
          {data &&
            images.map((img, idx) => (
              <div
                key={idx}
                className="p-4 md:h-[300px] w-full h-full cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <img
                  className="w-full h-[350px] md:h-[300px] object-cover rounded-md"
                  src={img}
                  alt="Hotels"
                />
                <div className="flex flex-col gap-1 m-2 items-center justify-center">
                  <h1 className="text-xl capitalize">{data[idx]?.type}</h1>
                  <h2 className="text-md">
                    {data[idx]?.count} {data[idx]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default PropertyList;
