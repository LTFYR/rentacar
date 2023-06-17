"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchOverlay } from "./";
import Image from "next/image";

const SearchButton = ({ classes }: { classes: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${classes}`}>
    <Image
      className="object-contain"
      src="/glass.svg"
      alt="button"
      width={16}
      height={16}
    />
  </button>
);

const Search = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const searchCar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Add search parameters");
    }

    handleSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const router = useRouter();

  const handleSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const pathName = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(pathName);
  };

  return (
    <form className="searchcar" onSubmit={searchCar}>
      <div className="searchcar__item">
        <SearchOverlay
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton classes="sm:hidden" />
      </div>
      <div className="searchcar__item">
        <Image
          src="/model.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="S-Class"
          className="searchcar__input"
        />
        <SearchButton classes="sm:hidden" />
      </div>
      <SearchButton classes="max-sm:hidden" />
    </form>
  );
};

export default Search;
