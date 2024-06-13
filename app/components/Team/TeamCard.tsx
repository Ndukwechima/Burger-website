import Image from "next/image";
import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
}
const TeamCard = ({ image, name, position }: TeamCardProps) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="rounded-2xl mx-auto"
      />
      <h1 className="text-[30px] text-gray-800 mt-[1.5rem] text-center font-bold">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium">
        {position}
      </p>
      <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">
        Lorem ipsum dolor sit amet, consectetur , optio!
      </p>
    </div>
  );
};

export default TeamCard;
