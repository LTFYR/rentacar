"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { FilterOptions } from "@/types";
import { handleSearchParams } from "@/utils";

const CarFilter = ({ title, options }: FilterOptions) => {
  const [val, setVal] = useState(options[0]);

  const router = useRouter();

  const handleUpdateSearch = (e: { title: string; value: string }) => {
    const newPathName = handleSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={val}
        onChange={(e) => {
          setVal(e);
          handleUpdateSearch(e);
        }}
      >
        <div className="relative z-10 w-fit">
          <Listbox.Button className="custom-filter__btn">
            <span className="flex truncate">
              {val.title}
              <Image
                src="/up.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="up down"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((opt) => (
                <Listbox.Option
                  key={opt.title}
                  value={opt}
                  className={({ active }) =>
                    `realtive cursor-default select-none px-5 py-2 ${
                      active ? "bg-red-600 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {opt.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CarFilter;
