import Image from "next/image";
import React from "react";
import DeliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <Image src={DeliveryImg} alt="delivery" />
        </div>

        {/* Text contents */}
        <div>
          <h1 className="text-[30px] md:text-[40px] uppercase lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-orange-600">Favorite Burger</span>on the
            way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod
            accusantium rerum quas consectetur distinctio quasi neque deserunt,
            tenetur dolorum quis, reiciendis facilis, doloremque veniam quidem?
            Ipsa, pariatur enim. Esse.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 minutes
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Free shipping from $75
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery on your Door-step
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
