import React, { memo, useEffect } from "react";
import HomeCarousel from "@templates/HomeTemplate/Layout/HomeCarousel";
import { selectCinemaSystem, selectListFilm } from "@modules/global/selector";
import MutipleRowSlick from "@/components/RSlick";
import { useDispatch, useSelector } from "react-redux";
import HomeMenu from "./HomeMenu";

const HomeMenuMemo = memo(function HomeMenuMemo({ cinemaSystem }) {
  return <HomeMenu cinemaSystem={cinemaSystem} />;
});

export default function Home() {
  const dispatch = useDispatch();
  const arrFilm = useSelector(selectListFilm);
  const cinemaSystem = useSelector(selectCinemaSystem);

  useEffect(() => {
    dispatch({ type: "getListFilm", payload: { filmName: "" } });
    dispatch({ type: "getListCinemaSystem" });
  }, []);

  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600">
        <div className="container px-5 py-14 mx-auto">
          <MutipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className="mx-36">
        <HomeMenuMemo cinemaSystem={cinemaSystem} />
      </div>
    </div>
  );
}
