import { CarProps, FilterProps } from "@/types";

export const carImageUrls = (car: CarProps, angle?: string) => {
  const carApiUrl = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;

  carApiUrl.searchParams.append("customer", "hrjavascript-mastery");
  carApiUrl.searchParams.append("make", make);
  carApiUrl.searchParams.append("modeFamily", model.split(" ")[0]);
  carApiUrl.searchParams.append("zoomType", "fullscreen");
  carApiUrl.searchParams.append("modelYear", `${year}`);
  carApiUrl.searchParams.append("angle", `${angle}`);

  return `${carApiUrl}`;
};

export const calculateCarPrice = (city_mpg: number, year: number) => {
  const pricePerDay = 50;

  const mileAge = 0.1;

  const ageRateFactor = 0.05;

  const mileAgeRate = city_mpg * mileAge;

  const ageRate = (new Date().getFullYear() - year) * ageRateFactor;

  const rentCarRatePerDay = pricePerDay + mileAgeRate + ageRate;

  return rentCarRatePerDay.toFixed(0);
};

export async function carsApi(filters: FilterProps) {
  const { manufacturer, year, limit, model, fuel } = filters;

  console.log(filters);
  const headers = {
    "X-RapidAPI-Key": "d66c609f54msh0204621ca6c47cfp16ed0ajsnc0fa53c5af23",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const res = await response.json();

  return res;
}

export const handleSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const pathName = `${window.location.pathname}?${searchParams.toString()}`;
  return pathName;
};
