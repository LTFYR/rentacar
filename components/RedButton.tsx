"use client";
import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/types";

const RedButton = ({
  title,
  customStyles,
  format,
  Icon,
  customOnClick,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={format || "button"}
      className={`custom-btn ${customStyles}`}
      onClick={customOnClick}
    >
      <span className={`flex-1`}>{title}</span>
      {Icon && (
        <div className="relative w-6 h-6">
          <Image
            src={Icon}
            alt="arrow icon"
            fill
            className="object-contain text-white"
          />
        </div>
      )}
    </button>
  );
};

export default RedButton;
