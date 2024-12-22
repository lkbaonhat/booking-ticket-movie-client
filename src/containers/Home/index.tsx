import React from "react";
import HomeCarousel from "@templates/HomeTemplate/Layout/HomeCarousel";
import { selectCinemaSystem, selectListFilm } from "@modules/global/selector";
import MutipleRowSlick from "@/components/RSlick";
import { useSelector } from "react-redux";
import HomeMenu from "./HomeMenu";

export default function Home() {
  const arrFilm = useSelector(selectListFilm);
  const cinemaSystem = useSelector(selectCinemaSystem);

  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <MutipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className="mx-36">
        <HomeMenu cinemaSystem={cinemaSystem} />
      </div>
    </div>
  );
}
