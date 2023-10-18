import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailList from "../components/EmailList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";
import Reserve from "../components/Reserve";

const Hotel = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [expandModal, setExpandModal] = useState(false);
  const [expandImg, setExpandImg] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading } = useFetch(`${baseURL}/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const numOfDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return numOfDays;
  };
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleMove = (dir) => {
    let newIdx;

    if (dir === "left") {
      newIdx = imageIdx === 0 ? data.photos.length - 1 : imageIdx - 1;
    } else {
      newIdx = imageIdx === data.photos.length - 1 ? 0 : imageIdx + 1;
    }
    setImageIdx(newIdx);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (user) {
      setExpandModal(true);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="w-full p-4">
            {expandImg && (
              <div className="absolute w-full h-full bg-black/90 top-0 left-0 z-20 flex justify-center items-center">
                <div className="relative w-[80vw] h-[80vh] justify-center items-center flex">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    onClick={() => setExpandImg(false)}
                    className="absolute top-10 right-10 text-3xl text-gray-600"
                  />
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    onClick={() => handleMove("left")}
                    className="absolute left-8 rounded-full bg-slate-500 p-2 text-3xl text-gray-600"
                  />
                  <div>
                    <img
                      className="w-[40vw] h-[60vh] object-cover"
                      src={data?.photos[imageIdx]}
                      alt=""
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    onClick={() => handleMove("right")}
                    className="absolute right-8 rounded-full bg-slate-500 p-2 text-3xl text-gray-600"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col text-sm gap-4 p-4">
              <h1 className="text-2xl font-bold">{data.name}</h1>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="text-xs">{data.address}</span>
              </div>
              <span className="text-blue-500">
                Excellent location - {data.distance} m from center
              </span>
              <span className="text-green-500">
                Book a stay over ${data.cheapestPrice} at this property and get
                a free airport taxi
              </span>
              <div className="flex flex-wrap gap-16 items-center justify-between my-4">
                {data.photos?.map((photo, index) => {
                  return (
                    <img
                      className="h-[300px] w-[300px] rounded-md object-cover"
                      key={index}
                      src={photo}
                      alt="Hotel Image"
                      onClick={() => {
                        setImageIdx(index);
                        setExpandImg(true);
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between gap-16 mt-8">
                <div className="flex flex-col gap-4 w-[40vw]">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <p className="text-justify">{data.description}</p>
                </div>
                <div className="flex flex-col justify-center md:justify-between gap-4 bg-gray-300 p-8 rounded-md">
                  <h1 className="text-2xl font-bold">
                    Perfect for a {days}-night stay
                  </h1>
                  <span className="max-w-[300px]">
                    Located at the heart of New York, this hotel has an
                    excellent rating of 5.0
                  </span>
                  <h2 className="text-xl">
                    <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                    nights)
                  </h2>
                  <button
                    onClick={handleClick}
                    className="bg-blue-600 p-4 rounded-lg"
                  >
                    Reserve / Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <EmailList />
          <Footer />
        </>
      )}
      {expandModal && <Reserve expandModal={setExpandModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
