import { selectFilmDetail } from "@/modules/global/selector";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function FilmDetail(props: any) {
  const filmDetail = useSelector(selectFilmDetail);
  const dispatch = useDispatch();
  let { filmCode } = useParams();

  useEffect(() => {
    if (filmCode) {
      dispatch({ type: "getFilmDetail", payload: { filmCode: filmCode } });
    }
  }, [filmCode]);

  return (
    <Wrapper>
      <div className="film-detail grid grid-cols-12">
        <div className="col-span-5 col-start-3">
          <div className="grid grid-cols-3">
            <img
              className="film-image"
              src={filmDetail.hinhAnh}
              alt={filmDetail.tenPhim}
            />
            <div className="film-content col-span-2">
              <h1>
                <strong>{filmDetail.tenPhim}</strong>
              </h1>
              <p>{filmDetail.moTa}</p>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  .film-detail {
    background-color: #12263f;
    padding: 20px;
    .film-image {
      border-radius: 5px;
      border: 2px solid #fff;
    }

    .film-content {
      padding-left: 20px;
      color: #fff;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;
