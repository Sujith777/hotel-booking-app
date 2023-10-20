import { useState } from "react";

const EmailList = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#0C356A] text-white w-full h-[300px] justify-center flex flex-col gap-4 md:gap-8 p-4 mt-16 md:mt-24 md:h-[300px] md:justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl mt-2">Save Time, Save Money!</h1>
        <span className="text-md">
          Sign Up and we will send the best deals to you
        </span>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <input
          className="focus:outline-none md:w-[30%] h-10 p-2 rounded-md"
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-yellow-400 font-bold p-2 rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default EmailList;
