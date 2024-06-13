import React from "react";

const Newsletter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] text-black font-bold uppercase">
          Join for hot offer
        </h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          deserunt pariatur magnam veniam optio cupiditate eligendi magni
          doloremque suscipit dolor tenetur facere laborum omnis? Saepe
          necessitatibus quaerat sed repellat impedit.
        </p>

        {/* Input & Button */}
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          {/* Input */}
          <input
            type="email"
            placeholder="Email Address"
            className="px-5 py-3 bg-gray-400 w-[40%] outline-none rounded-lg placeholder:text-black "
          />

          {/* subscribe button */}
          <button className="px-8 py-3 bg-green-700 hover:bg-green-900 transition-all duration-200 text-white rounded-md font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
