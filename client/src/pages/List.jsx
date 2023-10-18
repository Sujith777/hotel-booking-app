/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchResult from "../components/SearchResult";
import useFetch from "../hooks/useFetch.js";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, reFetch } = useFetch(
    `http://localhost:3001/hotels?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );
  const handleClick = () => {
    reFetch();
  };

  return (
    <div className="w-full">
      <Navbar />
      <Header type="list" />
      <div className="w-full p-4 flex justify-center">
        <div className="w-full flex gap-4">
          <div className="flex flex-col gap-2 basis-1/4 bg-yellow-400 p-2 rounded-md h-[450px] sticky top-2">
            <h1 className="text-2xl text-gray-500 font-bold">Search</h1>
            <div className="flex flex-col gap-1 p-1">
              <label className="text-sm">Destination</label>
              <input
                className="focus:outline-none h-8 text-sm rounded-sm p-1"
                type="text"
                placeholder={destination}
              />
            </div>
            <div className="flex flex-col gap-1 p-1">
              <label className="text-sm">Check-in date</label>
              <span
                onClick={() => setOpenDate((prev) => !prev)}
                className="cursor-pointer flex h-8 p-1 items-center justify-center bg-white rounded-sm text-xs"
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="flex flex-col gap-2 p-1">
              <label>Options</label>
              <div className="flex justify-between gap-1 text-xs">
                <span>
                  Min Price <small>per night</small>
                </span>
                <input
                  className="h-5 w-12 focus:outline-none p-1"
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-1 text-xs">
                <span>
                  Max Price <small>per night</small>
                </span>
                <input
                  className="h-5 w-12 focus:outline-none p-1"
                  type="number"
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-1 text-xs">
                <span>Adult</span>
                <input
                  className="h-5 w-12 focus:outline-none p-1"
                  type="number"
                  min={1}
                  placeholder={options.adult}
                />
              </div>
              <div className="flex justify-between gap-1 text-xs">
                <span>Children</span>
                <input
                  className="h-5 w-12 focus:outline-none p-1"
                  type="number"
                  min={0}
                  placeholder={options.children}
                />
              </div>
              <div className="flex justify-between gap-1 text-xs">
                <span>Rooms</span>
                <input
                  className="h-5 w-12 focus:outline-none p-1"
                  type="number"
                  min={1}
                  placeholder={options.room}
                />
              </div>
              <button
                className="bg-blue-600 rounded-md py-2 mt-2 cursor-pointer text-white font-medium"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8 basis-3/4">
            {loading ? (
              "Loading data"
            ) : (
              <>
                {data?.map((item) => (
                  <SearchResult key={item._id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
