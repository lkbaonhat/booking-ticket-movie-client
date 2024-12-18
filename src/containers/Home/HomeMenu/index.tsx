import React from "react";
//Library
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
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
                ></TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return <div>index</div>;
}
