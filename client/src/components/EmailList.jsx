const EmailList = () => {
  return (
    <div className="bg-[#0C356A] text-white w-full h-[200px] justify-center flex flex-col gap-4 lg:gap-8 p-4 mt-16 lg:mt-24 lg:h-[300px] lg:justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl mt-2">Save Time, Save Money!</h1>
        <span className="text-md">
          Sign Up and we will send the best deals to you
        </span>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <input
          className="focus:outline-none h-10 p-2 rounded-md"
          type="text"
          placeholder="Your Email"
        />
        <button className="bg-yellow-400 font-bold p-2 rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default EmailList;
