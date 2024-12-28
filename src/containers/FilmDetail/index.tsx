import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarOutlined,
  HeartFilled,
  LikeOutlined,
  PlayCircleFilled,
  StarFilled,
} from "@ant-design/icons";
import { Tabs } from "antd";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { selectFilmDetail } from "@modules/global/selector";

type TabPosition = "left" | "right" | "top" | "bottom";

export default function FilmDetail(props: any) {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  const filmDetail = useSelector(selectFilmDetail);
  const dispatch = useDispatch();
  let { filmCode } = useParams();

  // useEffect(() => {
  //   if (filmCode) {
  //     dispatch({ type: "getFilmDetail", payload: { filmCode: filmCode } });
  //   }
  // }, [filmCode]);

  const renderCinemaTabs = () => {
    return filmDetail.heThongRapChieu?.map((cs: any, index: number) => ({
      label: (
        <div className="flex flex-grow items-center justify-center">
          <img
            src={cs.logo}
            className="rounded-full w-full"
            style={{ width: 50 }}
            alt="..."
          />
          <div className="text-center ml-2 font-bold">{cs.tenHeThong}</div>
        </div>
      ),
      key: index.toString(),
      children: (
        <div className="">
          {cs.cumRapChieu?.map((cumRap: any, index: number) => (
            <div className="cinema-item mb-2" key={index}>
              <div className="flex flex-row">
                <div className="">
                  <p
                    style={{ fontSize: 18, fontWeight: "bold", lineHeight: 1 }}
                  >
                    {cumRap.tenCumRap}
                  </p>
                  <p className="text-gray-400 py-2">{cumRap.diaChi}</p>
                </div>
              </div>
              <div className="flex">
                {cumRap.lichChieuPhim
                  ?.slice(0, 12)
                  .map((lichChieu: any, index: number) => (
                    <NavLink
                      to={`/checkout/${lichChieu.maLichChieu}`}
                      key={index}
                      className="time-film-item"
                    >
                      {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                    </NavLink>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ),
    }));
  };

  const tabItems = [
    {
      label: "Show time",
      key: "1",
      children: (
        <div className="container mx-auto px-10">
          <Tabs tabPosition={tabPosition} items={renderCinemaTabs()} />
        </div>
      ),
    },
    {
      label: "Detail",
      key: "2",
      children: <div style={{ minHeight: 300 }}>Thông tin</div>,
    },
    {
      label: "Review",
      key: "3",
      children: <div style={{ minHeight: 300 }}>Đánh giá</div>,
    },
  ];

  return (
    <Wrapper>
      <div className="film-detail grid grid-cols-12">
        <div className="col-span-6 col-start-4">
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
              <div className="film-action text-xs mt-2">
                <button className="border rounded px-2 py-1 me-1">
                  <HeartFilled className="me-1" />
                  Like
                </button>
                <button className="border rounded px-2 py-1 me-1">
                  <StarFilled className="me-1" />
                  Review
                </button>
                <button className="border rounded px-2 py-1 me-1">
                  <PlayCircleFilled className="me-1" />
                  Trailer
                </button>
                <button className="border rounded px-2 py-1 bg-red-600">
                  Buy ticket
                </button>
              </div>
              <p className="py-2">{filmDetail.moTa}</p>
              <div className="flex font-bold text-base">
                <div className="">
                  <p>
                    <LikeOutlined className="pe-1 font-bold" />
                    Hài lòng
                  </p>
                  <p>{filmDetail.danhGia * 10}%</p>
                </div>
                <div className="px-4">
                  <p>
                    <CalendarOutlined className="pe-1 font-bold" />
                    Ngày khởi chiếu
                  </p>
                  <p>{moment(filmDetail.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="film-booking">
        <Tabs defaultActiveKey="1" centered items={tabItems} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 96px;
  min-height: 100vh;
  .film-detail {
    background-color: #12263f;
    padding: 20px;
    .film-image {
      border-radius: 5px;
      border: 2px solid #fff;
      width: 200px;
      margin: auto;
    }
    .film-content {
      color: #fff;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  .film-booking {
    .cinema-item {
      background-color: #edf2f9;
      border: 1px solid #e3ebf6;
      border-radius: 5px;
      padding: 20px;
    }
    .time-film-item {
      border-radius: 5px;
      border: 1px solid #12263f;
      height: 38px;
      line-height: 14px;
      margin-bottom: 4px;
      padding: 4px 0;
      width: 56px;
      text-align: center;
      margin-right: 5px;
      transition: all 0.5s;
      &:hover {
        background-color: #12263f;
        border-color: #12263f;
        color: #fff;
      }
    }
  }
`;
