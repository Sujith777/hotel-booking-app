import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Reserve = ({ expandModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);
  const { data } = useFetch(`http://localhost:3001/hotels/room/${hotelId}`);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
  console.log(dates);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:3001/rooms/availability/${roomId}`,
            { dates: allDates }
          );
          return res.data;
        })
      );
      expandModal(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allDates);

  return (
    <div className="w-[100vw] h-[100vh] bg-black/40 fixed top-0 left-0 flex items-center justify-center">
      <div className="bg-white p-5 relative rounded-md shadow-lg">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="absolute top-2 right-2 text-lg cursor-pointer"
          onClick={() => expandModal(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div key={item._id} className="flex items-center gap-12 p-5">
            <div className="flex flex-col gap-1">
              <div className="font-bold">{item.title}</div>
              <div>{item.description}</div>
              <div className="text-xs">
                Capacity: <strong>{item.capacity}</strong>
              </div>
              <div>{item.price}</div>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              {item.roomNumbers.map((roomNumber) => (
                <div key={roomNumber._id} className="flex flex-col gap-1">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleClick}
          className="w-full bg-blue-600 p-2 rounded-md text-white font-bold cursor-pointer mt-2"
        >
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
