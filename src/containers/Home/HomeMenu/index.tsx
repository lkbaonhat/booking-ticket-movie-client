import React, { Fragment, memo } from "react";
//Library
import { Tabs } from "antd";
import CardFilmItem from "./CardFilmItem";

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
          tab={
            <img src={cinemaSystem.logo} className="rounded-full" width={50} />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {cinemaSystem.lstCumRap?.map((cumRap: any, index: number) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        style={{ width: "60px" }}
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
                              <CardFilmItem
                                hinhAnh={film.hinhAnh}
                                tenPhim={film.tenPhim}
                                diaChi={cumRap.diaChi}
                                lstLichChieuTheoPhim={film.lstLichChieuTheoPhim}
                              />
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
