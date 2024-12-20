import React from "react";
import { useDispatch } from "react-redux";

export default function MutipleRowSlick(props: any) {
  const dispatch = useDispatch();

  const renderFilms = () => {
    return props.arrFilm.slice(0, 12).map((item: any, index: number) => {
      return <div className="mt-2" key={index}></div>;
    });
  };

  return <div>index</div>;
}
