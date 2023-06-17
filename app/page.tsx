import { CarFilter, Hero, More, Search, SingleCarCard } from "@/components";
// import { cars } from "@/data/cars";
import Image from "next/image";

import { carsApi } from "@/utils";
import { MainProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
export default async function Home({ searchParams }: MainProps) {
  const cars = await carsApi({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    limit: searchParams.limit || 12,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });

  const isEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  console.log(cars);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="explore">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Categories</h1>
          <p>Discover our cars</p>
        </div>
        <div className="home__filters">
          <Search />
          <div className="home__filter-container">
            <CarFilter title="fuel" options={fuels} />
            <CarFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car) => (
                <SingleCarCard car={car} />
              ))}
            </div>
            <More
              pageNumber={(searchParams.limit || 10) / 10}
              nextPage={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No cars</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
