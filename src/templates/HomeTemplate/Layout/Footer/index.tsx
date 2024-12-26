import React from "react";
import _ from "lodash";
import { selectCinemaSystem } from "@modules/global/selector";
import { useSelector } from "react-redux";
import { AppleOutlined, FacebookOutlined } from "@ant-design/icons";

export default function Footer(props: any) {
  const cinemaSystem = useSelector(selectCinemaSystem);

  const arrCinemaSystem = _.map(cinemaSystem, (cinemaSystem) =>
    _.pick(cinemaSystem, ["maHeThongRap", "tenHeThongRap", "logo"])
  );

  return (
    <footer className="py-6 bg-gray-800">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              href="#"
              className="flex justify-center space-x-3 md:justify-start text-black"
            >
              <img
                src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                alt="cyberlearn.vn"
              />
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-white">PARTNER</p>
            <div className="grid grid-cols-3" style={{ color: "#fff" }}>
              {arrCinemaSystem.map((cs: any, index: any) => {
                return (
                  <div key={index}>
                    <img src={cs.logo} style={{ width: 50 }} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
            <p className="pb-1 text-lg font-medium">Mobile app</p>
            <div className="flex text-white">
              <div className="mr-5">
                <AppleOutlined className="text-2xl" />
              </div>
              <div>
                <FacebookOutlined className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between text-white">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2021 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
