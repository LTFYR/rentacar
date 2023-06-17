import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  format?: "button" | "submit";
  customStyles?: string;
  customOnClick?: MouseEventHandler<HTMLButtonElement>;
  Icon?: string;
  isDisabled?: boolean;
}

export interface MainProps {
  searchParams: FilterProps;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  limit: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  // images: string[];
  // cover: string;
}

export interface SearchOverlayProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface OptionsProps {
  value: string;
  title: string;
}

export interface showMoreProps {
  pageNumber: number;
  nextPage: boolean;
}

export interface FilterOptions {
  title: string;
  options: OptionsProps[];
}
