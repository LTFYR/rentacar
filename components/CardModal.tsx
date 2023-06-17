"use client";

import { CarProps } from "@/types";
import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

interface CarModalProps {
  toggle: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CardModal = ({ toggle, closeModal, car }: CarModalProps) => {
  return (
    <>
      <Transition appear show={toggle} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="easy-in duartion-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed bg-black inset-0 bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex justify-center items-center text-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-400"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="easy-in duartion-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] transform rounded-2xl overflow-y-auto text-left shadow-xl transition-all flex flex-col p-6 gap-5 bg-white">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 w-fit p-2 z-10 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/cancel.svg"
                      alt="cancel button"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 rounded-lg bg-white bg-cover bg-center">
                      <Image
                        src="/bmw.png"
                        alt="car"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100">
                        <Image
                          src="/bmw2.png"
                          alt="car"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100">
                        <Image
                          src="/mercedes3.png"
                          alt="car"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100">
                        <Image
                          src="/mercedes4.png"
                          alt="car"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold capitalize text-xl">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 text-right w-full"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold text-black-100">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardModal;
