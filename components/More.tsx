"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { showMoreProps } from "@/types";
import RedButton from "./RedButton";
import { handleSearchParams } from "@/utils";

const More = ({ pageNumber, nextPage }: showMoreProps) => {
  const router = useRouter();

  const handleShowMore = () => {
    const limitVar = (pageNumber + 1) * 10;

    const newPathName = handleSearchParams("limit", `${limitVar}`);

    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center mt-10 gap-5">
      {!nextPage && (
        <RedButton
          title="Show More"
          format="button"
          customStyles="bg-red-600 rounded-full text-white"
          customOnClick={handleShowMore}
        />
      )}
    </div>
  );
};

export default More;
