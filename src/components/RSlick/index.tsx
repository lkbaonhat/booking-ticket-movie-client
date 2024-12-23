import React from "react";
import styleSlick from "./MultipleRowSlick.module.css";
import { useDispatch, useSelector } from "react-redux";
import Film_Flip from "../Film/Film_Flip";
import { selectDangChieu, selectSapChieu } from "@modules/global/selector";
import { Slider } from "antd";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

export default function MutipleRowSlick(props: any) {
  const dispatch = useDispatch();
  const dangChieu = useSelector(selectDangChieu);
  const sapChieu = useSelector(selectSapChieu);

  const renderFilms = () => {
    return props.arrFilm.map((item: any, index: number) => {
      <div className="mt-2" key={index}>
        <Film_Flip item={item} />
      </div>;
    });
  };

  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <button
        className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
}
