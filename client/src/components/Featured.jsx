import React from "react";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, loading } = useFetch(
    `${baseURL}/hotels/city?cities=Chicago,Los Angeles,New York,Los Angeles`
  );

  return (
    <div className="flex flex-wrap justify-center w-full md:justify-between items-center gap-4 p-4">
      {loading ? (
        "Loading data please wait"
      ) : (
        <React.Fragment>
          <div className="md:h-[350px] md:w-[450px] w-full h-full relative p-4">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt="Chicago city"
            />
            <div className="flex flex-col gap-1 absolute bottom-10 left-10 text-white font-bold">
              <h1 className="text-xl">Chicago</h1>
              <h2 className="text-md">{data[0]} properties</h2>
            </div>
          </div>
          <div className="md:h-[350px] md:w-[450px] w-full h-full relative p-4">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt="Los Angeles city"
            />
            <div className="flex flex-col gap-1 absolute bottom-10 left-10 text-white font-bold">
              <h1 className="text-xl">Los Angeles</h1>
              <h2 className="text-md">{data[1]} properties</h2>
            </div>
          </div>
          <div className="md:h-[350px] md:w-[450px] w-full h-full relative p-4">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="New York city"
            />
            <div className="flex flex-col gap-1 absolute bottom-10 left-10 text-white font-bold">
              <h1 className="text-xl">New York</h1>
              <h2 className="text-md">{data[2]} properties</h2>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Featured;
