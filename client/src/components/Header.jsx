/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme cs file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);

  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    // SERVICES
    <div className=" bg-[#279EFF] text-white w-full p-4 mb-4">
      <div className="flex flex-wrap md:flex-row w-full md:gap-32 justify-center p-2">
        <div className="flex gap-2 md:gap-4  items-center hover:bg-blue-900 hover:scale-105 ease-in duration-300 p-2 hover:shadow-lg rounded-sm cursor-pointer hover:rounded-md">
          <FontAwesomeIcon icon={faBed} />
          <span className="text-md">Stays</span>
        </div>
        <div className="flex gap-2 md:gap-4 items-center hover:bg-blue-900 hover:scale-105 ease-in duration-300 p-2 hover:shadow-lg rounded-sm cursor-pointer hover:rounded-md">
          <FontAwesomeIcon icon={faPlane} />
          <span className="text-md">Flights</span>
        </div>
        <div className="flex gap-2 md:gap-4 items-center hover:bg-blue-900 hover:scale-105 ease-in duration-300 p-2 hover:shadow-lg rounded-sm cursor-pointer hover:rounded-md">
          <FontAwesomeIcon icon={faCar} />
          <span className="text-md">Car Rentals</span>
        </div>

        <div className="flex gap-2 md:gap-4 items-center hover:bg-blue-900 hover:scale-105 ease-in duration-300 p-2 hover:shadow-lg rounded-sm cursor-pointer hover:rounded-md">
          <FontAwesomeIcon icon={faTaxi} />
          <span className="text-md">Airport Taxis</span>
        </div>
      </div>

      {/* INFO */}
      {type !== "list" && (
        <div className="p-4">
          <h1 className="text-4xl my-4">
            A lifetime of discounts? It&apos;s genius!
          </h1>
          <p className="text-md my-4 max-w-[80vw]">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free My BooKING account
          </p>
          {!user && (
            <button className="bg-[#FFC436] font-bold text-lg rounded-lg p-2 text-gray-500">
              Sign In / Register
            </button>
          )}
        </div>
      )}

      {/* SEARCH SECTION */}
      {type !== "list" && (
        <div className="flex text-lg md:text-sm md:flex-row flex-col gap-4 justify-center md:justify-evenly items-center m-4 border-4 border-yellow-400 rounded-md py-2 bg-white">
          <div className="flex px-2 gap-2 justify-center items-center text-gray-500">
            <FontAwesomeIcon icon={faBed} />
            <input
              className="rounded-md w-[60%] md:w-full p-2 focus:outline-none"
              type="text"
              placeholder="Where are you going"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="flex px-2 relative gap-2 justify-center items-center text-gray-500">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span
              className="cursor-pointer"
              onClick={() => setOpenDate((prev) => !prev)}
            >
              {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={true}
                ranges={dates}
                className="absolute top-[50px] z-10"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="flex relative gap-2 justify-center items-center text-gray-500 px-2">
            <FontAwesomeIcon icon={faPerson} />
            <span
              onClick={() => setOpenOptions((prev) => !prev)}
              className="cursor-pointer"
            >
              {`${options.adult} adult . ${options.children} children . ${options.room} room`}
            </span>
            {openOptions && (
              <div className="absolute p-2 top-[50px] rounded-md bg-white flex flex-col gap-2 w-full shadow-xl z-10">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Adult</span>
                  <div className="flex gap-1 items-center">
                    <button
                      disabled={options.adult <= 1}
                      className="bg-gray-200 rounded-sm p-1 m-1"
                      onClick={() => handleOption("adult", "dec")}
                    >
                      -
                    </button>
                    <span className="text-sm">{options.adult}</span>
                    <button
                      className="bg-gray-200 rounded-sm p-1 m-1"
                      onClick={() => handleOption("adult", "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center ">
                  <span className="text-sm">Children</span>
                  <div className="flex gap-1 items-center">
                    <button
                      disabled={options.children <= 0}
                      className="bg-gray-200 rounded-sm p-1 m-1"
                      onClick={() => handleOption("children", "dec")}
                    >
                      -
                    </button>
                    <span className="text-sm">{options.children}</span>
                    <button
                      className="bg-gray-200 rounded-sm p-1 m-1"
                      onClick={() => handleOption("children", "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Room</span>
                  <div className="flex gap-1 items-center">
                    <button
                      disabled={options.room <= 1}
                      className="bg-gray-200 rounded-sm p-1 m-1"
                      onClick={() => handleOption("room", "dec")}
                    >
                      -
                    </button>
                    <span className="text-sm">{options.room}</span>
                    <button
                      className="bg-gray-200 rounded-sm p-1 m-1"
                      onClick={() => handleOption("room", "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-2 w-full md:w-[10%]">
            <button
              className="text-gray-500 p-2 w-full rounded-md bg-[#FFC436] font-bold"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
