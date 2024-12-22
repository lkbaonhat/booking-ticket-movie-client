import React, { Fragment, memo } from "react";
//Library
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default function HomeMenu(props: any) {
  const { cinemaSystem } = props;
  const [tabPosition, setTabPosition] = React.useState("left");

  const changeTabPosition = (e: any) => {
    setTabPosition(e.target.value);
  };

  const renderCinemaSystem = () => {
    return cinemaSystem?.map((cinemaSystem: any, index: number) => {
      return (
        <TabPane
          tab={<img src={cinemaSystem.logo} className="" width={50} />}
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {cinemaSystem.lstCumRap?.map((cumRap: any, index: number) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                        alt=""
                      />
                      <br />
                      <div className="text-left ml-2">
                        {cumRap.tenCumRap}
                        <p className="text-red-200">Detail</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim
                    .slice(0, 4)
                    .map((film: any, index: number) => {
                      return (
                        <Fragment key={index}>
                          <div className="my-5">
                            <div style={{ display: "flex" }}>
                              <img
                                src={film.hinhAnh}
                                alt={film.tenPhim}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://picsum.photos/7575";
                                }}
                              />

                              <div className="ml-2">
                                <h1 className="text-2xl text-green-700">
                                  <p>{cumRap.diaChi}</p>
                                  <div className="grid grid-cols-6 gap-6">
                                    {film.lstLichChieuTheoPhim
                                      ?.slice(0, 12)
                                      .map((lichChieu: any, index: number) => {
                                        return (
                                          <NavLink
                                            className="text-2xl text-green-400"
                                            to={`/checkout/${lichChieu.maLichChieu}`}
                                          >
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </NavLink>
                                        );
                                      })}
                                  </div>
                                </h1>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs tabPosition={tabPosition}>{renderCinemaSystem()}</Tabs>
    </>
  );
}
