import moment from "moment";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div``;

export default function CardFilmItem(props: any) {
  return (
    <CardContainer>
      <div>
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-end-3 p-2">
            <Link to={""}>
              <img className="rounded" src={props.hinhAnh} alt="" />
            </Link>
          </div>
          <div className="col-start-3 col-end-13 p-2">
            <strong>{props.tenPhim}</strong>
            <p>{props.diaChi}</p>
            <div className="grid grid-cols-6 gap-2">
              {props.lstLichChieuTheoPhim
                ?.slice(0, 12)
                .map((lichChieu: any, index: number) => {
                  return (
                    <NavLink
                      to={""}
                      className="border border-cyan-800 rounded text-center"
                      key={index}
                    >
                      {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                    </NavLink>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
