"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import RedButton from "./RedButton";
import { calculateCarPrice, carImageUrls } from "@/utils";
import CardModal from "./CardModal";
import { cars } from "@/data/cars";

interface SingleCarPros {
  car: CarProps;
}

const SingleCarCard = ({ car }: SingleCarPros) => {
  const [toggle, setToggle] = useState(false);
  const [newCar, setnewCar] = useState({});

  const { city_mpg, year, make, model, transmission, drive } = car;

  const rentCar = calculateCarPrice(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {rentCar}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/audi.png"
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/wheel2.png" width={20} height={20} alt="wheel" />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}{" "}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/wheel.png" width={20} height={20} alt="wheel" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/gas.png" width={20} height={20} alt="wheel" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <RedButton
            title="View more"
            customStyles="w-full py-[16px] rounded-full bg-red-600 text-white leading-[17px] font-bold"
            Icon="/rightarrow.svg"
            customOnClick={() => setToggle(true)}
          />
        </div>
      </div>
      <CardModal
        toggle={toggle}
        closeModal={() => setToggle(false)}
        car={car}
      />
    </div>
  );
};

export default SingleCarCard;
